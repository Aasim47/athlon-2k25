"use client";

import Image from "next/image";
import React, { useEffect } from "react";
// import { useForm, Controller } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import TextField from "@mui/material/TextField";

// import Button from "@mui/material/Button";
// import {
//   FormControl,
//   FormControlLabel,
//   FormLabel,
//   Radio,
//   RadioGroup
// } from "@mui/material";
// import axios from "axios";

// const schema = z.object({
//   name: z.string().min(1, "Name is required"),
//   sic: z.string().min(1, "SIC is required"),
//   year: z.string().min(1, "Year is required"),
//   phone: z.string().min(10, "Phone number must be at least 10 digits"),
//   tshirtSize: z.string().min(1, "T-shirt size is required")
// });

// type FormData = z.infer<typeof schema>;

const Jersey = () => {
  // const {
  //   control,
  //   handleSubmit,
  //   formState: { errors }
  // } = useForm<FormData>({
  //   resolver: zodResolver(schema),
  //   defaultValues: {
  //     name: "",
  //     sic: "",
  //     year: "",
  //     phone: "",
  //     tshirtSize: ""
  //   }
  // });

  // const onSubmit = async (data: FormData) => {
  //   console.log(data);
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:3000/api/create-payment",
  //       data
  //     );
  //     console.log(response);
  //     window.location.href = response.data.url;
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  useEffect(() => {
    const rzpPaymentForm = document.getElementById("rzp_payment_form");

    if (rzpPaymentForm && !rzpPaymentForm.hasChildNodes()) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.async = true;
      script.dataset.payment_button_id = "pl_PjF7XDdDzpu6zL";
      rzpPaymentForm.appendChild(script);
    }
  });
  return (
    <div className="mt-8 mx-4 xl:mx-[5.5rem]">
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
      <div className="mt-4 bg-white shadow-md w-full p-8 text-black">
        <p className="text-[1.25rem] font-[600]">ATHLON 2k25 Jersey</p>
        <ul className="mt-4 list-disc list-inside">
          <li className="relative pl-4">
            {/* <span className="absolute left-0 top-0 h-2 w-2 bg-black rounded-full mt-2"></span> */}
            The cost of Athlon 2k25 T-shirt is <b>Rs. 350/-</b> (inc. of all
            taxes.)
          </li>
          <li className="relative pl-4">
            {/* <span className="absolute left-0 top-0 h-2 w-2 bg-black rounded-full mt-2"></span> */}
            Once the amount is paid, it is non-refundable.
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

      <div className="bg-white shadow-md mt-4 w-full p-8 text-black mb-4">
        <h3 className="text-[1.5rem] font-[600]">
          Fill out this form to book your T-shirt
        </h3>
        <p className="mt-2">
          Please fill out this Razorpay form to book your T-shirt. Once the form
          is submitted, you will be redirected to the payment gateway to
          complete the payment. Fill all the required deatils correctly.
        </p>
        {/* <FormControl fullWidth>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
            <div className="mb-4">
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Name"
                    variant="outlined"
                    fullWidth
                    error={!!errors.name}
                    helperText={errors.name ? errors.name.message : ""}
                  />
                )}
              />
            </div>
            <div className="mb-4">
              <Controller
                name="sic"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="SIC"
                    variant="outlined"
                    fullWidth
                    error={!!errors.sic}
                    helperText={errors.sic ? errors.sic.message : ""}
                  />
                )}
              />
            </div>
            <div className="mb-4">
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Phone"
                    variant="outlined"
                    fullWidth
                    error={!!errors.phone}
                    helperText={errors.phone ? errors.phone.message : ""}
                  />
                )}
              />
            </div>
            <div className="mb-4 pl-2">
              <Controller
                name="year"
                control={control}
                render={({ field }) => (
                  <>
                    <FormLabel component="legend">Year</FormLabel>
                    <RadioGroup {...field} row>
                      <FormControlLabel
                        value="1st"
                        control={<Radio />}
                        label="1st"
                      />
                      <FormControlLabel
                        value="2nd"
                        control={<Radio />}
                        label="2nd"
                      />
                      <FormControlLabel
                        value="3rd"
                        control={<Radio />}
                        label="3rd"
                      />
                      <FormControlLabel
                        value="4th"
                        control={<Radio />}
                        label="4th"
                      />
                    </RadioGroup>
                    {errors.year && (
                      <p className="text-red-500 text-sm">
                        {errors.year.message}
                      </p>
                    )}
                  </>
                )}
              />
            </div>
            <div className="mb-4 pl-2">
              <Controller
                name="tshirtSize"
                control={control}
                render={({ field }) => (
                  <>
                    <FormLabel component="legend">T-shirt Size</FormLabel>
                    <RadioGroup {...field} row>
                      <FormControlLabel
                        value="XS"
                        control={<Radio />}
                        label="Extra Small"
                      />
                      <FormControlLabel
                        value="S"
                        control={<Radio />}
                        label="Small"
                      />
                      <FormControlLabel
                        value="M"
                        control={<Radio />}
                        label="Medium"
                      />
                      <FormControlLabel
                        value="L"
                        control={<Radio />}
                        label="Large"
                      />
                      <FormControlLabel
                        value="XL"
                        control={<Radio />}
                        label="Extra Large"
                      />
                      <FormControlLabel
                        value="XXL"
                        control={<Radio />}
                        label="Double Extra Large"
                      />
                    </RadioGroup>
                    {errors.tshirtSize && (
                      <p className="text-red-500 text-sm">
                        {errors.tshirtSize.message}
                      </p>
                    )}
                  </>
                )}
              />
            </div>
           

            <hr />
            <div className="flex justify-between mt-6 text-slate-500">
              <p>ATHLON 2K25 T-shirt x 1</p>
              <p>Rs. 350/-</p>
            </div>
            <div className="flex justify-end mt-4">
              <Button type="submit" variant="contained" color="primary">
                Submit & Pay
              </Button>
            </div>
           
          </form>
        </FormControl> */}
        <div className="mt-4 flex items-center justify-center">
          <form id="rzp_payment_form"></form>
        </div>
      </div>
    </div>
  );
};

export default Jersey;
