import crypto from "crypto";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const { invoiceId } = req.query;

  if (!invoiceId || typeof invoiceId !== "string") {
    return res.status(400).json({ error: "Invalid invoice ID" });
  }

  const keyIndex = 1;
  const string =
    `/pg/v1/invoice/${process.env.MERCHANT_ID}/${invoiceId}` +
    process.env.MERCHANT_KEY;
  const checksum =
    crypto.createHash("sha256").update(string).digest("hex") + "###" + keyIndex;

  const options = {
    method: "GET",
    url: `${process.env.MERCHANT_INVOICE_URL}/${process.env.MERCHANT_ID}/${invoiceId}`,
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      "X-VERIFY": checksum,
      "X-MERCHANT-ID": process.env.MERCHANT_ID
    }
  };

  try {
    const response = await axios.request(options);
    console.log("Response data:", response.data);

    if (response.data.success) {
      return res
        .status(200)
        .json({ success: true, invoice: response.data.invoice });
    } else {
      return res
        .status(400)
        .json({ success: false, error: response.data.message });
    }
  } catch (error) {
    console.error("Error retrieving invoice:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
