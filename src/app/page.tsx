"use client";

import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos";
import { useEffect } from "react";

export default function Home() {
  const events: {
    name: string;
    time: string;
    venue: string;
    image: string;
  }[] = [
    {
      name: "100m Race(Boys)",
      time: "8:00 AM",
      venue: "Main Ground",
      image:
        "https://images.theconversation.com/files/615514/original/file-20240826-20-9ywu2a.jpg?ixlib=rb-4.1.0&rect=156%2C423%2C3560%2C1777&q=45&auto=format&w=668&h=324&fit=crop"
    },
    {
      name: "100m Race(Boys)",
      time: "8:00 AM",
      venue: "Main Ground",
      image:
        "https://images.theconversation.com/files/615514/original/file-20240826-20-9ywu2a.jpg?ixlib=rb-4.1.0&rect=156%2C423%2C3560%2C1777&q=45&auto=format&w=668&h=324&fit=crop"
    },
    {
      name: "100m Race(Boys)",
      time: "8:00 AM",
      venue: "Main Ground",
      image:
        "https://images.theconversation.com/files/615514/original/file-20240826-20-9ywu2a.jpg?ixlib=rb-4.1.0&rect=156%2C423%2C3560%2C1777&q=45&auto=format&w=668&h=324&fit=crop"
    },
    {
      name: "100m Race(Boys)",
      time: "8:00 AM",
      venue: "Main Ground",
      image:
        "https://images.theconversation.com/files/615514/original/file-20240826-20-9ywu2a.jpg?ixlib=rb-4.1.0&rect=156%2C423%2C3560%2C1777&q=45&auto=format&w=668&h=324&fit=crop"
    },
    {
      name: "100m Race(Boys)",
      time: "8:00 AM",
      venue: "Main Ground",
      image:
        "https://images.theconversation.com/files/615514/original/file-20240826-20-9ywu2a.jpg?ixlib=rb-4.1.0&rect=156%2C423%2C3560%2C1777&q=45&auto=format&w=668&h=324&fit=crop"
    },
    {
      name: "100m Race(Boys)",
      time: "8:00 AM",
      venue: "Main Ground",
      image:
        "https://images.theconversation.com/files/615514/original/file-20240826-20-9ywu2a.jpg?ixlib=rb-4.1.0&rect=156%2C423%2C3560%2C1777&q=45&auto=format&w=668&h=324&fit=crop"
    },
    {
      name: "100m Race(Boys)",
      time: "8:00 AM",
      venue: "Main Ground",
      image:
        "https://images.theconversation.com/files/615514/original/file-20240826-20-9ywu2a.jpg?ixlib=rb-4.1.0&rect=156%2C423%2C3560%2C1777&q=45&auto=format&w=668&h=324&fit=crop"
    },
    {
      name: "100m Race(Boys)",
      time: "8:00 AM",
      venue: "Main Ground",
      image:
        "https://images.theconversation.com/files/615514/original/file-20240826-20-9ywu2a.jpg?ixlib=rb-4.1.0&rect=156%2C423%2C3560%2C1777&q=45&auto=format&w=668&h=324&fit=crop"
    }
  ];

  const organizers: {
    [key: string]: {
      name: string;
      image: string;
      year: string;
    }[];
  } = {
    "Track and Field": [
      {
        name: "John Doe",
        image:
          "https://www.sportireland.ie/sites/default/files/styles/card/public/2022-12/Lucymull.jpg?h=1a5cb00f&itok=Djcryd8N",
        year: "4th"
      },
      {
        name: "John Doe",
        image:
          "https://www.sportireland.ie/sites/default/files/styles/card/public/2022-12/Lucymull.jpg?h=1a5cb00f&itok=Djcryd8N",
        year: "4th"
      },
      {
        name: "John Doe",
        image:
          "https://www.sportireland.ie/sites/default/files/styles/card/public/2022-12/Lucymull.jpg?h=1a5cb00f&itok=Djcryd8N",
        year: "4th"
      },
      {
        name: "John Doe",
        image:
          "https://www.sportireland.ie/sites/default/files/styles/card/public/2022-12/Lucymull.jpg?h=1a5cb00f&itok=Djcryd8N",
        year: "4th"
      },
      {
        name: "John Doe",
        image:
          "https://www.sportireland.ie/sites/default/files/styles/card/public/2022-12/Lucymull.jpg?h=1a5cb00f&itok=Djcryd8N",
        year: "4th"
      }
    ],
    "First-aid": [
      {
        name: "John Doe",
        image:
          "https://www.sportireland.ie/sites/default/files/styles/card/public/2022-12/Lucymull.jpg?h=1a5cb00f&itok=Djcryd8N",
        year: "4th"
      },
      {
        name: "John Doe",
        image:
          "https://www.sportireland.ie/sites/default/files/styles/card/public/2022-12/Lucymull.jpg?h=1a5cb00f&itok=Djcryd8N",
        year: "4th"
      },
      {
        name: "John Doe",
        image:
          "https://www.sportireland.ie/sites/default/files/styles/card/public/2022-12/Lucymull.jpg?h=1a5cb00f&itok=Djcryd8N",
        year: "4th"
      },
      {
        name: "John Doe",
        image:
          "https://www.sportireland.ie/sites/default/files/styles/card/public/2022-12/Lucymull.jpg?h=1a5cb00f&itok=Djcryd8N",
        year: "4th"
      },
      {
        name: "John Doe",
        image:
          "https://www.sportireland.ie/sites/default/files/styles/card/public/2022-12/Lucymull.jpg?h=1a5cb00f&itok=Djcryd8N",
        year: "4th"
      }
    ],
    Jumping: [
      {
        name: "John Doe",
        image:
          "https://www.sportireland.ie/sites/default/files/styles/card/public/2022-12/Lucymull.jpg?h=1a5cb00f&itok=Djcryd8N",
        year: "4th"
      },
      {
        name: "John Doe",
        image:
          "https://www.sportireland.ie/sites/default/files/styles/card/public/2022-12/Lucymull.jpg?h=1a5cb00f&itok=Djcryd8N",
        year: "4th"
      },
      {
        name: "John Doe",
        image:
          "https://www.sportireland.ie/sites/default/files/styles/card/public/2022-12/Lucymull.jpg?h=1a5cb00f&itok=Djcryd8N",
        year: "4th"
      },
      {
        name: "John Doe",
        image:
          "https://www.sportireland.ie/sites/default/files/styles/card/public/2022-12/Lucymull.jpg?h=1a5cb00f&itok=Djcryd8N",
        year: "4th"
      },
      {
        name: "John Doe",
        image:
          "https://www.sportireland.ie/sites/default/files/styles/card/public/2022-12/Lucymull.jpg?h=1a5cb00f&itok=Djcryd8N",
        year: "4th"
      }
    ],
    Throwing: [
      {
        name: "John Doe",
        image:
          "https://www.sportireland.ie/sites/default/files/styles/card/public/2022-12/Lucymull.jpg?h=1a5cb00f&itok=Djcryd8N",
        year: "4th"
      },
      {
        name: "John Doe",
        image:
          "https://www.sportireland.ie/sites/default/files/styles/card/public/2022-12/Lucymull.jpg?h=1a5cb00f&itok=Djcryd8N",
        year: "4th"
      },
      {
        name: "John Doe",
        image:
          "https://www.sportireland.ie/sites/default/files/styles/card/public/2022-12/Lucymull.jpg?h=1a5cb00f&itok=Djcryd8N",
        year: "4th"
      },
      {
        name: "John Doe",
        image:
          "https://www.sportireland.ie/sites/default/files/styles/card/public/2022-12/Lucymull.jpg?h=1a5cb00f&itok=Djcryd8N",
        year: "4th"
      },
      {
        name: "John Doe",
        image:
          "https://www.sportireland.ie/sites/default/files/styles/card/public/2022-12/Lucymull.jpg?h=1a5cb00f&itok=Djcryd8N",
        year: "4th"
      }
    ]
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <div className="">
      <div className="h-full lg:h-[50dvh]  xl:h-[90dvh] mt-[6rem] xl:mt-16 bg-[#eeeeee] mx-4 sm:mx-8 xl:mx-[5.5rem] block lg:flex sm:flex-row flex-col items-center justify-center">
        <div className="text-black flex-1">
          <p
            className="text-[1.5rem] sm:text-[1.5rem] font-[600] mb-2"
            data-aos="fade-up"
          >
            Silicon Sports Club <br /> presents
          </p>
          <div className="facon leading-normal" data-aos="fade-up">
            <h1 className="text-[4rem] sm:text-[5rem]">
              AT
              <span className="text-blue">H</span>
              LON
            </h1>
            <h2 className="text-[4rem]" data-aos="fade-up">
              2<span className="text-blue">K</span>
              25
            </h2>
          </div>
          <p
            className="text-[1.25rem] sm:text-[1.5rem] font-[600]"
            data-aos="fade-up"
          >
            The ultimate champions face up in the ultimate annual athletic meet
            2025.
          </p>
          <Link href={"/jersey"} className="block w-fit" data-aos="fade-up">
            <button className="mt-6 bg-blue rounded-xl px-6 py-3 text-white items-center flex gap-4 transition-all duration-300 hover:bg-white hover:text-blue hover:shadow-lg hover:gap-6">
              <p className="font-[600]">Book your jersey</p>
              <FaArrowRightLong className="transition-transform duration-300" />
            </button>
          </Link>
          <div
            className="flex gap-4 items-center text-[1.25rem] sm:text-[1.5rem] mt-6"
            data-aos="fade-up"
          >
            <FaRegCalendarAlt
              className="
            h-6 sm:h-8
            w-6 sm:w-8"
            />
            <p className="font-[600]">8th February, 2025, Saturday</p>
          </div>
        </div>
        <div className="hidden lg:flex w-full h-[20rem] sm:h-full flex-1 items-center justify-center relative">
          <div className="w-[16rem] h-[12rem] bg-transparent border-blue border-solid border-[5px] absolute rounded-xl top-[18%] right-[36%] xl:top-[18%] xl:right-[30%]"></div>
          <div className="w-[16rem] h-[12rem] bg-transparent border-[#EEDF04] border-solid border-[5px] absolute rounded-xl top-[14%] right-[6%] xl:top-[14%] xl:right-[-5%]"></div>
          <div className="w-[12rem] h-[16rem] bg-transparent border-blue border-solid border-[5px] absolute rounded-xl top-[44%] right-[30%] xl:top-[51%] xl:right-[24%] opacity-50"></div>
          <div
            data-aos="fade-left"
            className="absolute hidden sm:block sm:w-[12rem] sm:h-[16rem] w-[9rem] h-[13rem] rounded-xl bg-[#d6d6d6] top-[10%] right-[30%] xl:top-[10%] xl:right-[24%] shadow-xl transition-transform duration-300 hover:translate-x-2"
          >
            <Image
              src={
                "https://images.theconversation.com/files/615514/original/file-20240826-20-9ywu2a.jpg?ixlib=rb-4.1.0&rect=156%2C423%2C3560%2C1777&q=45&auto=format&w=668&h=324&fit=crop"
              }
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
              alt="sport-1"
            />
          </div>
          <div
            data-aos="fade-left"
            className="absolute sm:hidden block sm:w-[12rem] sm:h-[16rem] w-[9rem] h-[13rem] rounded-xl bg-[#d6d6d6] top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 shadow-xl transition-transform duration-300 hover:translate-x-2"
          >
            <Image
              src={
                "https://images.theconversation.com/files/615514/original/file-20240826-20-9ywu2a.jpg?ixlib=rb-4.1.0&rect=156%2C423%2C3560%2C1777&q=45&auto=format&w=668&h=324&fit=crop"
              }
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
              alt="sport-1"
            />
          </div>
          <div
            data-aos="fade-up"
            className="absolute sm:w-[12rem] sm:h-[16rem] w-[9rem] h-[13rem] rounded-xl bg-[#d6d6d6] top-[36%%] right-[56%] xl:top-[36%] xl:right-[45%] shadow-xl transition-transform duration-300 hover:translate-x-2"
          >
            <Image
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKHexW8zmCTSsWDVe0fftVrcZQTKvw2FEhTlbB001uLaiwsbtxoMHuM0g5As1U4XzOIiU&usqp=CAU"
              }
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
              alt="sport-2"
            />
          </div>
          <div
            data-aos="fade-down"
            className="absolute sm:w-[12rem] sm:h-[16rem] w-[9rem] h-[13rem] rounded-xl bg-[#d6d6d6] top-[24%] right-0 xl:top-[24%] xl:right-[4%] shadow-xl transition-transform duration-300 hover:-translate-x-2"
          >
            <Image
              src={
                "https://www.sportireland.ie/sites/default/files/styles/card/public/2022-12/Lucymull.jpg?h=1a5cb00f&itok=Djcryd8N"
              }
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
              alt="sport-3"
            />
          </div>
          <div
            data-aos="fade-right"
            className="absolute hidden sm:block sm:w-[12rem] sm:h-[16rem] w-[9rem] h-[13rem] rounded-xl bg-[#d6d6d6] top-[53%] right-[9%] xl:top-[53%] xl:right-[11%] shadow-xl transition-transform duration-300 hover:-translate-x-2"
          >
            <Image
              src={
                "https://i2-prod.irishmirror.ie/incoming/article30695458.ece/ALTERNATES/s615/2_inpho_02310494.jpg"
              }
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
              alt="sport-4"
            />
          </div>
          <div
            data-aos="fade-up"
            className="absolute sm:w-[12rem] sm:h-[16rem] w-[9rem] h-[13rem] rounded-xl bg-[#d6d6d6] top-[120%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 sm:hidden block shadow-xl "
          >
            <Image
              src={
                "https://i2-prod.irishmirror.ie/incoming/article30695458.ece/ALTERNATES/s615/2_inpho_02310494.jpg"
              }
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
              alt="sport-4"
            />
          </div>
        </div>
        <div
          data-aos="zoom-in"
          className="md:hidden flex flex-1 items-center justify-center relative mt-16"
        >
          <Image src={"/assets/hero.svg"} width={500} height={500} alt="hero" />
        </div>
        <div
          data-aos="zoom-in"
          className="hidden lg:hidden md:flex flex-1 items-center justify-center relative mt-16"
        >
          <Image
            src={"/assets/hero-md.svg"}
            width={600}
            height={600}
            alt="hero"
          />
        </div>
      </div>

      <div className="bg-white px-4 mt-12 md:mt-16 xl:mt-0 xl:px-[5.5rem] flex sm:flex-row flex-col items-center justify-between py-4 md:py-8 relative overflow-hidden">
        <div className="w-[11rem] h-[9rem] bg-transparent border-[#EEDF04] border-solid border-[5px] absolute rounded-xl xl:top-[3%] xl:right-[-5%] top-[3%] right-[-35%] lg:right-[-13%] lg:top-[-10%]"></div>
        <div className="xl:flex-1 w-full md:w-[40%] flex items-center justify-center">
          <Image
            src={"/assets/ssc-logo.svg"}
            width={250}
            height={250}
            alt="ssc-logo"
          />
        </div>
        <div className="xl:flex-1 text-black w-full md:w-[60%]">
          <p className="text-[1.5rem] font-[500]">ORGANIZED BY</p>
          <h1 className="text-[2.5rem] font-[600]">SILICON SPORTS CLUB</h1>
          <p className="mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias iure
            dignissimos sequi dolorum eaque, consequatur maxime delectus, saepe
            aliquam quibusdam autem quisquam ullam perspiciatis aperiam
            consectetur. Dolorum ea blanditiis labore, veritatis odio molestias
            error magni rerum perspiciatis iure vitae, corporis similique? Culpa
            facere consequuntur architecto at, optio laboriosam adipisci eius?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reiciendis, molestiae ratione? Deleniti voluptatibus ipsa velit eum
            debitis optio perspiciatis culpa.
          </p>
        </div>
      </div>

      <div className="bg-[#eeeeee] py-8 text-black sm:px-8 xl:px-[5.5rem] px-8 items-center justify-center flex flex-col relative">
        <h1 data-aos="fade-up" className="text-[2rem] font-[600] text-center">
          EVENTS
        </h1>
        <div className="w-[16rem] h-[12rem] bg-transparent border-blue border-solid border-[5px] absolute rounded-xl xl:top-[-6%] xl:left-[-9%] left-[-55%] top-[3%] lg:top-[4%] lg:right-[20%]"></div>
        <div className="mt-8 grid grid-col-1 md:grid-cols-3 xl:grid-cols-4 gap-12 w-full xl:w-auto">
          {events.map((event, index) => {
            return (
              <div
                className="sm:w-[14rem] w-full h-[18rem] rounded-lg shadow-lg relative group cursor-pointer"
                key={index}
                data-aos="flip-right"
              >
                <Image
                  src={event.image}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                  alt="event"
                />
                <div className="bg-white opacity-0 group-hover:opacity-70 w-full h-[40%] absolute text-left bottom-0 p-4 rounded-b-lg transition-opacity duration-300">
                  <p className="text-black font-[600] text-[1.25rem]">
                    {event.name}
                  </p>
                  <p className="text-black font-[600]">8th Feb, {event.time}</p>
                  <p className="text-black font-[600]">{event.venue}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-white xl:px-[5.5rem] flex flex-col items-center sm:py-8 p-4 sm:p-0 relative overflow-hidden text-black justify-center">
        <h1 className="text-[2rem] font-[600] text-center">ORGANIZERS</h1>
        <div className="w-[16rem] h-[12rem] bg-transparent border-[#EEDF04] border-solid border-[5px] absolute rounded-xl xl:top-[-6%] xl:right-[-9%] top-[-15%] right-[-50%] lg:right-[-20%]"></div>
        <div className="flex flex-wrap gap-8 items-center justify-around sm:justify-evenly w-full mt-8">
          {Object.keys(organizers).map((key, index) => {
            return (
              <div className="" key={index}>
                <h1 className="text-[1.25rem] font-[600]">{key}</h1>
                <div className="">
                  {organizers[key].map((organizer, index) => {
                    return (
                      <div className="flex items-center gap-4 mt-4" key={index}>
                        <div className="w-[3rem] h-[3rem] relative rounded-full overflow-hidden">
                          <Image
                            src={organizer.image}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-full"
                            alt="organizer"
                          />
                        </div>
                        <div>
                          <p className="text-[1.15rem] font-[600]">
                            {organizer.name}
                          </p>
                          <p className="text-[1rem]">{organizer.year} Year</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-[#eeeeee] py-8 text-black p-4  xl:px-[5.5rem] items-center justify-center flex flex-col relative">
        <div
          data-aos="fade-up"
          className=" bg-white shadow-md w-full  relative"
        >
          <h1 className="text-[2rem] font-[600] text-center mt-6">
            Watch Our Event
          </h1>
          <div
            data-aos="zoom-in"
            className="w-full h-full flex justify-center my-4 pb-4"
          >
            <iframe
              className="sm:h-[30rem] sm:w-[50rem] lg:w-[55rem] w-full h-[15rem] px-2"
              src="https://www.youtube.com/embed/cDBjpAY_GBY" // Replace with your YouTube video URL
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className=" bg-white px-8 xl:px-[5.5rem] py-8 text-white items-center flex justify-center">
        {/* <h1 className="text-[2rem] font-[600] text-center">Contact Us</h1> */}
        <div className="flex flex-col sm:flex-row gap-2 overflow-x-auto hide-scrollbar">
          <div className="flex sm:flex-col gap-2 sm:gap-0">
            <div
              data-aos="fade-down"
              className="w-[10rem] h-[10rem] lg:w-[15rem] lg:h-[15rem] relative"
            >
              <Image
                src={
                  "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                objectFit="cover"
                layout="fill"
                alt="contact"
              />
            </div>
            <div
              data-aos="fade-up"
              className="w-[10rem] h-[10rem] lg:w-[15rem] lg:h-[15rem] relative sm:mt-2"
            >
              <Image
                src={
                  "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                objectFit="cover"
                layout="fill"
                alt="contact"
              />
            </div>
          </div>
          <div className="flex sm:flex-col gap-2 sm:gap-0">
            <div
              data-aos="fade-down-right"
              className="w-[10rem] h-[10rem] lg:w-[15rem] lg:h-[15rem] relative bg-blue p-2"
            >
              <p className="font-[600] text-[1.5rem] lg:text-[2rem]">
                Extensive range of sports and games
              </p>
            </div>
            <div
              data-aos="fade-up-right"
              className="w-[10rem] h-[10rem] lg:w-[15rem] lg:h-[15rem] relative sm:mt-2"
            >
              <Image
                src={
                  "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                objectFit="cover"
                layout="fill"
                alt="contact"
              />
            </div>
          </div>
          <div className="flex sm:flex-col gap-2 sm:gap-0">
            <div
              data-aos="fade-down-left"
              className="w-[10rem] h-[10rem] lg:w-[15rem] lg:h-[15rem] relative"
            >
              <Image
                src={
                  "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                objectFit="cover"
                layout="fill"
                alt="contact"
              />
            </div>
            <div
              data-aos="fade-up-left"
              className="w-[10rem] h-[10rem] lg:w-[15rem] lg:h-[15rem] relative bg-blue p-2 sm:mt-2"
            >
              <p className="font-[600] text-[1.5rem] lg:text-[2rem]">
                Extensive range of sports and games
              </p>
            </div>
          </div>
          <div className="flex sm:flex-col gap-2 sm:gap-0">
            <div
              data-aos="fade-down-right"
              className="w-[10rem] h-[10rem] lg:w-[15rem] lg:h-[15rem] relative bg-blue p-2"
            >
              <p className="font-[600] text-[1.5rem] lg:text-[2rem]">
                Extensive range of sports and games
              </p>
            </div>
            <div
              data-aos="fade-up-right"
              className="w-[10rem] h-[10rem] lg:w-[15rem] lg:h-[15rem] relative sm:mt-2"
            >
              <Image
                src={
                  "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                objectFit="cover"
                layout="fill"
                alt="contact"
              />
            </div>
          </div>
          <div className="flex sm:flex-col gap-2 sm:gap-0">
            <div
              data-aos="fade-down-left"
              className="w-[10rem] h-[10rem] lg:w-[15rem] lg:h-[15rem] relative "
            >
              <Image
                src={
                  "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                objectFit="cover"
                layout="fill"
                alt="contact"
              />
            </div>
            <div
              data-aos="fade-up-left"
              className="w-[10rem] h-[10rem] lg:w-[15rem] lg:h-[15rem] relative bg-blue p-2 sm:mt-2"
            >
              <p className="font-[600] text-[1.5rem] lg:text-[2rem]">
                Extensive range of sports and games
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue px-8 xl:px-[5.5rem] py-8 flex flex-col sm:flex-row items-center justify-between text-white">
        <div className="lg:flex-1 flex flex-col sm:flex-row items-center justify-between">
          <div className="flex gap-4 items-center md:flex-col lg:flex-row justify-center">
            <div className="h-[6rem] w-[6rem] lg:h-[8rem] lg:w-[8rem] flex items-center justify-center relative">
              <Image
                src={"/assets/ssc-logo.svg"}
                objectFit="cover"
                layout="fill"
                alt="ssc-logo"
              />
            </div>

            <div className="lg:w-[14rem] lg:h-[6rem] w-[10rem] h-[4rem] flex items-center justify-center md:mt-4 lg:mt-0">
              <img
                src="/assets/silicon-logo.png"
                className="w-full h-full"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="lg:flex-1 flex justify-between flex-col lg:flex-row  mt-8 sm:mt-0">
          {/* <div className="flex gap-2 items-center text-[1.25rem]">
            <LuMapPin />
            <p>Silicon Institute of Technology, Sambalpur</p>
          </div>
          <p className="text-[1.25rem]">Organizer: Silicon Sports Club</p> */}
          <div className="">
            <p className="font-[600] text-[1.25rem] underline">VENUE</p>
            <p className="text-[1.15rem] mt-2">
              Silicon Institute of Technology <br />
              Silicon West, Sason, Sambalpur, Odisha <br />
              Pin: 768200
            </p>
          </div>
          <div className="mt-4 sm:mt-0">
            <p className="font-[600] text-[1.25rem] underline md:mt-2">
              CONTACT
            </p>
            <p>
              Sandeep Prusty (Sports Secretary) : +91 7008 123 456 <br />
              Satyabrat Panigrahi (Secretary General) : +91 7008 123 456
            </p>
          </div>
        </div>
      </div>
      <div className="bg-black py-2">
        <p className="text-white text-center text-[0.75rem]">
          &copy; 2025 Silicon Sports Club. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
