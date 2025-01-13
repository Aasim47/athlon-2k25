import crypto from "crypto";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
// import { supabase } from "@/utils/supabase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  //   const merchantTransactionId = req.query.id;
  const { id: merchantTransactionId } = req.query;

  if (!merchantTransactionId || typeof merchantTransactionId !== "string") {
    return res.status(400).json({ error: "Invalid transaction ID" });
  }

  const keyIndex = 1;
  const string =
    `/pg/v1/status/${process.env.MERCHANT_ID}/${merchantTransactionId}` +
    process.env.MERCHANT_KEY;
  const sha256 = crypto.createHash("sha256").update(string).digest("hex");
  const checksum = sha256 + "###" + keyIndex;

  const option = {
    method: "GET",
    url: `${process.env.MERCHANT_STATUS_URL}/${process.env.MERCHANT_ID}/${merchantTransactionId}`,
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      "X-VERIFY": checksum,
      "X-MERCHANT-ID": process.env.MERCHANT_ID
    }
  };

  try {
    const response = await axios.request(option);
    // console.log("Response status:", response.status);
    // console.log("Response headers:", response.headers);
    console.log("Response data:", response.data);

    if (response.data.success === true) {
      return res.status(200).json({
        message: response.data.message,
        status: response.data.success,
        info: {
          type: response.data.data.paymentInstrument.type,
          amount: response.data.data.amount / 100
        }
      });
    } else if (
      response.data &&
      !response.data.success &&
      response.data.code != "PAYMENT_SUCCESS"
    ) {
      return res.status(400).json({
        message: response.data.message,
        status: response.data.success,
        info: {
          amount: response.data.data?.amount / 100
        }
      });
    } else {
      return res.status(200).json({
        message: "INVALID_TRANSACTION_ID",
        status: false,
        info: {}
      });
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data);
      return res.status(500).json({
        error: "Internal server error",
        details: error.response?.data
      });
    } else {
      console.error("Error:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }
}
