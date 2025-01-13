"use server";

import { NextResponse } from "next/server";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  // res.status(200).json({ name: "John Doe" });
  // res.redirect("http://localhost:3000/jersey");
  res.redirect("https://www.google.com/");
}
