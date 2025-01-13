import Cors from "cors";
import { NextApiRequest, NextApiResponse } from "next";

// Initialize the cors middleware
const cors = Cors({
  origin: ["https://athlon-2k25.vercel.app", "http://localhost:3000"], // Replace with your frontend URL and localhost
  methods: ["GET"],
  credentials: true
});

// Helper method to wait for a middleware to execute before continuing
function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: (
    req: NextApiRequest,
    res: NextApiResponse,
    callback: (result: unknown) => void
  ) => void
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: unknown) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export { cors, runMiddleware };
