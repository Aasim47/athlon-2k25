"use server";

import axios from "axios";
import crypto from "crypto";

import { NextApiRequest, NextApiResponse } from "next";

import { supabase } from "@/utils/supabase";
import { cors, runMiddleware } from "@/utils/corsMiddleware";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  // const merchantTransactionId = req.query.id;
  await runMiddleware(req, res, cors);

  const {
    id: merchantTransactionId,
    name,
    sic,
    year,
    phone,
    tshirtSize
  } = req.query;
  // console.log(req.query.merchantTransactionId);

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

  axios
    .request(option)
    .then(async (response) => {
      await supabase.from("T-shirt registrations").insert([
        {
          name,
          sic,
          year,
          phone,
          tshirtSize,
          paymentRefId: merchantTransactionId,
          amount: response.data.data.amount / 100,
          paymentMode: response.data.data.paymentInstrument.type,
          success: response.data.success
        }
      ]);
      if (response.data.success === true) {
        // res.redirect(303,
        //   `https://www.google.com/`
        // );
        const successUrl = process.env.SUCCESS_URL;
        if (successUrl) {
          const url = new URL(successUrl);
          if (typeof merchantTransactionId === "string") {
            url.searchParams.append("id", merchantTransactionId);
          } else {
            return res.status(400).send("Invalid transaction ID");
          }
          return res.redirect(303, url.toString()); // Use 303 status code for redirection after POST
        } else {
          return res.status(500).send("Success URL not defined");
        }
      } else {
        if (process.env.FAILURE_URL) {
          const failureUrl = new URL(process.env.FAILURE_URL);
          if (typeof merchantTransactionId === "string") {
            failureUrl.searchParams.append("id", merchantTransactionId);
          } else {
            return res.status(400).send("Invalid transaction ID");
          }
          return res.redirect(303, failureUrl.toString());
        } else {
          return res.status(500).send("Failure URL not defined");
        }
      }
    })
    .catch((error) => {
      console.log(error);
      return res.status(500).send("Error while fetching status");
    });
}
