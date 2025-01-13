"use client";

import axios from "axios";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState, Suspense } from "react";

interface PaymentData {
  id: string;
  // type: string;
  amount: number;
  datetime: string;
}

const FailureContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams ? searchParams.get("id") : null;
  const [paymentData, setPaymentData] = useState<PaymentData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (id) {
      axios
        .get(`/api/check-payment-status?id=${id}`)
        .then((response) => {
          if (response.data.status) {
            router.push("/success?id=" + id);
          } else if (
            !response.data.status &&
            response.data.message === "PAYMENT_ERROR"
          ) {
            setLoading(false);
            setPaymentData({
              id,
              amount: response.data.amount,
              datetime: response.data.datetime
            });
          } else {
            router.push("/");
          }
        })
        .catch((error) => {
          console.error(error);
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
          src={"/assets/red-cross.png"}
          alt="Red Cross"
          width={75}
          height={75}
        />
        <div className="">
          <h2 className="text-2xl font-bold mb-4 mt-4">Payment Failed</h2>
          <p>Transaction ID: {paymentData?.id}</p>
          <p>Amount: {paymentData?.amount}</p>
          <p>Date: {paymentData?.datetime}</p>
        </div>
      </div>
    </div>
  );
};

const Failure = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FailureContent />
    </Suspense>
  );
};

export default Failure;
