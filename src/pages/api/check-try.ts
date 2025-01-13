import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const merchantTransactionId = req.query.id;

  if (!merchantTransactionId || typeof merchantTransactionId !== "string") {
    return res.status(400).json({ error: "Invalid transaction ID" });
  }

  const options = {
    method: "GET",
    url: `https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/status/${process.env.MERCHANT_ID}/${merchantTransactionId}`,
    headers: {
      accept: "application/json", // Ensure the accept header is correct
      "Content-Type": "application/json",
      "X-VERIFY": "your-checksum", // Add the checksum if required
      "X-MERCHANT-ID": process.env.MERCHANT_ID
    }
  };

  try {
    const response = await axios.request(options);
    console.log("Response status:", response.status);
    console.log("Response headers:", response.headers);
    console.log("Response data:", response.data);

    res.status(200).json(response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data);
      res
        .status(error.response?.status || 500)
        .json({
          error: "Internal server error",
          details: error.response?.data
        });
    } else {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
}
