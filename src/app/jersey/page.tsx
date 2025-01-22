"use client";

import Image from "next/image";
import React from "react";

const Jersey = () => {
  // useEffect(() => {
  //   const rzpPaymentForm = document.getElementById("rzp_payment_form");

  //   if (rzpPaymentForm && !rzpPaymentForm.hasChildNodes()) {
  //     const script = document.createElement("script");
  //     script.src = "https://checkout.razorpay.com/v1/payment-button.js";
  //     script.async = true;
  //     script.dataset.payment_button_id = "pl_PjF7XDdDzpu6zL";
  //     rzpPaymentForm.appendChild(script);
  //   }
  // });
  return (
    <div className="mt-[8rem] mx-4 xl:mx-[5.5rem]">
      <div className="hidden md:block mt-[6rem] bg-white shadow-md w-full h-[18rem] py-8 lg:h-[25rem] xl:h-[30rem] relative">
        <Image
          src={"/assets/Artboard 5-100.jpg"}
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="block md:hidden mt-[6rem] bg-white shadow-md w-full  md:h-[50rem] relative">
        <Image
          src={"/assets/Artboard 4-100.jpg"}
          alt="Picture of the author"
          // layout="fill"
          width={400}
          height={400}
          objectFit="cover"
        />
      </div>
      <div className="mt-4 bg-white shadow-md w-full p-4 sm:p-8 text-black">
        <p className="text-[1.25rem] font-[600]">ATHLON 2k25 Jersey</p>
        <ul className="mt-4 list-disc list-inside">
          <li className="relative pl-4">
            {/* <span className="absolute left-0 top-0 h-2 w-2 bg-black rounded-full mt-2"></span> */}
            The cost of Athlon 2k25 T-shirt is <b>Rs. 320/-</b> (inc. of all
            taxes.)
          </li>
          <li className="relative pl-4">
            {/* <span className="absolute left-0 top-0 h-2 w-2 bg-black rounded-full mt-2"></span> */}
            Once the amount is paid, it is non-refundable.
          </li>
          <li className="relative pl-4">
            In case of any issues with the event such as cancellation or
            rescheduling, the amount will be refunded.
          </li>
          <li className="relative pl-4">
            {/* <span className="absolute left-0 top-0 h-2 w-2 bg-black rounded-full mt-2"></span> */}
            The T-shirt will be made available before the event date. You will
            be notified about the same.
          </li>
          <li className="relative pl-4">
            {/* <span className="absolute left-0 top-0 h-2 w-2 bg-black rounded-full mt-2"></span> */}
            Once booked, the T-shirt size cannot be changed. Be accurate with
            your size.
          </li>
        </ul>
      </div>

      <div className="bg-white shadow-md mt-4 w-full p-4 sm:p-8 text-black mb-4">
        <h3 className="text-[1.5rem] font-[600]">
          Fill out this form to book your T-shirt
        </h3>
        <p className="mt-2">
          Please fill out this Razorpay form to book your T-shirt. Once the form
          is submitted, you will be redirected to the payment gateway to
          complete the payment. Fill all the required deatils correctly.
        </p>

        <div className="mt-4 flex items-center justify-center">
          {/* <form id="rzp_payment_form"></form> */}
          <p className="text-red-600">
            The booking has been closed. Thank you for your interest.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Jersey;
