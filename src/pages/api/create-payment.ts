"use server";

import axios from "axios";
import crypto from "crypto";
import { v4 as uuidv4 } from "uuid";

import { NextApiRequest, NextApiResponse } from "next";

interface PaymentPayload {
  merchantId: string;
  merchantUserId: string;
  mobileNumber: string;
  amount: number;
  merchantTransactionId: string;
  redirectUrl: string;
  redirectMode: string;
  paymentInstrument: {
    type: string;
  };
}

interface RequestOption {
  method: string;
  url: string;
  headers: {
    accept: string;
    "Content-Type": string;
    "X-VERIFY": string;
  };
  data: {
    request: string;
  };
}

interface PaymentResponse {
  data: {
    data: {
      instrumentResponse: {
        redirectInfo: {
          url: string;
        };
      };
    };
  };
}

interface ErrorResponse {
  response?: {
    data?: any;
  };
  message?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const { name, sic, year, tshirtSize, phone } = req.body;
  const orderId = uuidv4();

  //payment
  const paymentPayload: PaymentPayload = {
    merchantId: process.env.MERCHANT_ID!,
    merchantUserId: name,
    mobileNumber: phone,
    amount: Number(process.env.AMOUNT) * 100,
    merchantTransactionId: orderId,
    redirectUrl: `${process.env.REDIRECT_URL}/?id=${orderId}&name=${name}&sic=${sic}&year=${year}&tshirtSize=${tshirtSize}&phone=${phone}`,
    redirectMode: "POST",
    paymentInstrument: {
      type: "PAY_PAGE"
    }
  };

  const payload = Buffer.from(JSON.stringify(paymentPayload)).toString(
    "base64"
  );
  const keyIndex = 1;
  const string = payload + "/pg/v1/pay" + process.env.MERCHANT_KEY!;
  const sha256 = crypto.createHash("sha256").update(string).digest("hex");
  const checksum = sha256 + "###" + keyIndex;

  const option: RequestOption = {
    method: "POST",
    url: process.env.MERCHANT_BASE_URL!,
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      "X-VERIFY": checksum
    },
    data: {
      request: payload
    }
  };

  try {
    const response: PaymentResponse = await axios.request(option);
    console.log(response.data.data.instrumentResponse.redirectInfo.url);
    res.status(200).json({
      msg: "OK",
      url: response.data.data.instrumentResponse.redirectInfo.url
    });
  } catch (error) {
    const err = error as ErrorResponse;
    console.log("error in payment", err);
    res.status(500).json({ error: "Failed to initiate payment" });
  }
}
