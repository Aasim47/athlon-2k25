"use server";

import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/utils/supabase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  //   const { name, sic, year, phone, tshirtSize } = req.body;

  const { data, error } = await supabase.from("T-shirt registrations").insert([
    {
      name: "John Doe",
      sic: "123456",
      year: "4th",
      phone: "1234567890",
      tshirtSize: "M",
      paymentRefId: "123456",
      amount: 500,
      paymentMode: "UPI",
      success: true
    }
  ]);

  if (error) {
    console.log("Error inserting data:", error);
    
    return res.status(500).json({ error: error.message });
  }

  res.status(200).json(data);
}
