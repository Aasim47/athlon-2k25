"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface PaymentData {
  id: string;
  type: string;
  amount: number;
  datetime: string;
}

const Success = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams ? searchParams.get("id") : null;
  // const name = searchParams ? searchParams.get("name") : null;
  // const sic = searchParams ? searchParams.get("sic") : null;
  // const year = searchParams ? searchParams.get("year") : null;
  // const phone = searchParams ? searchParams.get("phone") : null;
  // const tshirtSize = searchParams ? searchParams.get("tshirtSize") : null;
  // const [status, setStatus] = useState<string | null>(null);

  const [paymentData, setPaymentData] = useState<PaymentData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (id) {
      axios
        .get(
          `/api/check-payment-status?id=${id}`
        )
        .then((response) => {
          if (response.data.status) {
            // setStatus("Payment successful");
            setPaymentData({
              id: id,
              type: response.data.info.type,
              amount: response.data.info.amount,
              datetime: new Date().toLocaleString()
            });
          } else if (
            !response.data.status &&
            response.data.message === "PAYMENT_ERROR"
          ) {
            router.push("/failure?id=" + id);
          } else if (
            !response.data.status &&
            response.data.message === "INVALID_TRANSACTION_ID"
          ) {
            router.push("/");
          }
        })
        .catch((error) => {
          console.error(error);
          // setStatus("Error checking payment status");
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      router.push("/");
    }
  }, [id, router]);

  if (loading) {
    return (
      <div className="h-[100dvh] flex items-center justify-center text-black">
        <div className="bg-white p-6 rounded-lg shadow-lg text-left items-center flex flex-col justify-between w-[16rem] h-[20rem]">
          <div className="animate-pulse flex space-x-4">
            {/* <div className="rounded-full bg-gray-200 h-12 w-12"></div> */}
            <div className="flex-1 space-y-4 py-1">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-[100dvh] flex items-center justify-center text-black">
      <div className="bg-white p-6 rounded-lg shadow-lg text-left items-center flex flex-col justify-between">
        <Image
          src={"/assets/green-tick.png"}
          alt="Green Tick"
          width={75}
          height={75}
        />
        <div className="">
          <h2 className="text-2xl font-bold mb-6 mt-4 text-center">
            Payment Successful
          </h2>
          <p className="text-gray-700 mb-2">
            <span className="font-[600]">Reference ID: </span>

            {paymentData ? paymentData.id : ""}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-[600]">Item Purchased: </span> ATHLON 2K25
            T-shirt
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-[600]">Amount Paid:</span> Rs.{" "}
            {paymentData ? paymentData.amount : 0}/-
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-[600]">Payment Method:</span>{" "}
            {paymentData ? paymentData.type : ""}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-[600]">Date & Time:</span>{" "}
            {paymentData ? paymentData.datetime : ""}
          </p>
        </div>
        <Link href={"/"} className="w-full">
          <button className="mt-4 px-4 py-2 border-solid border-blue border-2 w-full text-blue rounded hover:bg-blue-700">
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
