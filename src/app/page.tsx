"use client";

import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import { FaArrowUp, FaRegCalendarAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos";
import { useEffect, useState } from "react";
import { useSidebar } from "./components/SidebarContext";
import { organizers } from "./utils/organizers";
import { events } from "./utils/events";

export default function Home() {
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="">
      <div className={`${isSidebarOpen ? "overflow-hidden h-screen" : ""}`}>

        <div className="h-full lg:h-[50dvh]  xl:h-[90dvh] mt-[6rem] xl:mt-16 bg-[#eeeeee] px-4 sm:px-8 xl:px-[5.5rem] block lg:flex sm:flex-row flex-col items-center justify-center">
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
              The ultimate champions face up in the ultimate annual athletic
              meet 2025.
            </p>
            <div
              className="flex flex-col md:flex-row mt-6 gap-4 md:items-center"
              data-aos="fade-up"
            >
              <Link href={"/jersey"} className="block w-fit">
                <button className=" bg-blue rounded-xl px-6 py-3 text-white items-center flex gap-4 transition-all duration-300 hover:bg-white hover:text-blue hover:shadow-lg hover:gap-6">
                  <p className="font-[600]">Book your jersey</p>
                  <FaArrowRightLong className="transition-transform duration-300" />
                </button>
              </Link>
              <p
                className="font-[600] flex items-center gap-2 text-[1.125rem] cursor-pointer ml-2 md:ml-0"
                onClick={() => {
                  toggleSidebar();
                }}
              >
                Participate here
                <span>
                  <FaArrowRightLong className="transition-transform duration-300" />
                </span>
              </p>
            </div>
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
                  "/assets/WhatsApp Image 2025-01-15 at 01.12.15_ca606c93.jpg"
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
                  "/assets/WhatsApp Image 2025-01-15 at 01.12.16_523cf5d8.jpg"
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
                  "/assets/WhatsApp Image 2025-01-15 at 01.12.16_523cf5d8.jpg"
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
                  "/assets/WhatsApp Image 2025-01-15 at 01.11.49_9ec62461.jpg"
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
                  "/assets/WhatsApp Image 2025-01-15 at 01.11.50_706723a9.jpg"
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
            <Image
              src={"/assets/hero.svg"}
              width={500}
              height={500}
              alt="hero"
            />
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

        <div
          data-aos="fade-up"
          className="bg-white px-4 mt-12 md:mt-16 xl:mt-0 xl:px-[5.5rem] flex sm:flex-row flex-col items-center justify-between py-4 md:py-8 relative overflow-hidden"
        >
          <div className="w-[11rem] h-[9rem] bg-transparent border-[#EEDF04] border-solid border-[5px] absolute rounded-xl xl:top-[3%] xl:right-[-5%] top-[3%] right-[-35%] lg:right-[-13%] lg:top-[-10%]"></div>
          <div
            data-aos="fade-up"
            className="xl:flex-1 w-full md:w-[40%] flex items-center justify-center"
          >
            <Image
              src={"/assets/ssc-logo.svg"}
              width={250}
              height={250}
              alt="ssc-logo"
            />
          </div>
          <div
            data-aos="fade-up"
            className="xl:flex-1 text-black w-full md:w-[60%]"
          >
            <p className="text-[1.5rem] font-[500]">ORGANIZED BY</p>
            <h1 className="text-[2.5rem] font-[600]">SILICON SPORTS CLUB</h1>
            <p className="mt-4">
              The annual athletic meet of Silicon Institute of Technology,
              Sambalpur (ATHLON) is the most awaited atheletic event of the
              year. The event is organized by the Silicon Sports Club, the
              official sports club of the institute. Every year the event host a
              wide range of sports and games, and the champions are awarded with
              the prestigious trophies and medals. The event is a platform for
              the students to showcase their sportsmanship and athletic skills.
              The event is a blend of sports, music, dance and fun. This year
              the 14th edition of ATHLON is scheduled to be held on 8th
              February, 2025.
            </p>
          </div>
        </div>

        <div className=" xl:px-[5.5rem] flex flex-col items-center p-8 md::p-0 relative overflow-hidden text-black justify-center">
          <h1 className="text-[2rem] font-[600] text-center">ORGANIZERS</h1>
          <div className="w-[16rem] h-[12rem] bg-transparent border-[#EEDF04] border-solid border-[5px] absolute rounded-xl xl:top-[-6%] xl:right-[-9%] top-[-15%] right-[-50%] lg:right-[-20%] "></div>
          <div className="grid xl:grid-cols-4 xl:grid-rows-4 md:grid-cols-2 md:grid-rows-6 grid-cols-1 gap-2 md:gap-4 xl:gap-8 items-center justify-around sm:justify-evenly w-full my-8 z-9">
            {organizers.map((organizer, index) => {
              return (
                <div
                  data-aos="fade-up"
                  className="flex items-center xl:mt-4 h-[5.5rem] bg-[#F8FAFC] shadow-lg w-full"
                  key={index}
                >
                  <div className="w-[5.5rem] h-[5.5rem] relative overflow-hidden md:p-2 xl:p-0">
                    <Image
                      src={organizer.image}
                      layout="fill"
                      objectFit="cover"
                      className="shadow-lg"
                      alt="organizer"
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-[1.15rem] font-[600]">
                      {organizer.name}
                    </p>
                    <p className="text-[1rem]">{organizer.role}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-[#ffffff] overflow-clip py-8 text-black sm:px-8 xl:px-[5.5rem] px-8 items-center justify-center flex flex-col relative">
          <h1 className="text-[2rem] font-[600] text-center">EVENTS</h1>
          <div className="w-[16rem] h-[12rem] bg-transparent border-blue border-solid border-[5px] absolute rounded-xl xl:top-[-6%] xl:left-[-9%] left-[-55%] top-[3%] lg:top-[4%] lg:right-[20%]"></div>
          <div className=" mt-8 justify-items-center grid grid-col-1 md:grid-cols-3 xl:grid-cols-5 gap-12 w-full xl:w-auto">
            {events.map((event, index) => {
              return (
                <div
                  className="sm:w-[14rem] w-full h-[18rem] shadow-xl relative group cursor-pointer overflow-hidden"
                  key={index}
                  data-aos="flip-right"
                >
                  <Image
                    src={event.image}
                    layout="fill"
                    objectFit="cover"
                    className=" group-hover:scale-110 transition-transform duration-300"
                    alt="event"
                  />
                  <div className="bg-white opacity-70 w-full h-[40%] absolute text-left bottom-0 p-4  transition-opacity duration-300">
                    <p className="text-black font-[600] text-[1.25rem]">
                      {event.name}
                    </p>

                    <p className="text-black font-[600]">{event.venue}</p>
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

        <div className=" bg-white px-8 xl:px-[5.5rem] py-8 text-white items-center flex justify-center overflow-hidden">
          <div className="flex flex-col sm:flex-row gap-2 md:overflow-x-auto hide-scrollbar">
            <div className="flex sm:flex-col gap-2 sm:gap-0">
              <div
                data-aos="fade-down"
                className="w-[10rem] h-[10rem] lg:w-[15rem] lg:h-[15rem] relative overflow-hidden"
              >
                <Image
                  src={
                    "/assets/WhatsApp Image 2025-01-13 at 23.56.34_822d6132.jpg"
                  }
                  objectFit="cover"
                  layout="fill"
                  className="transition-transform duration-300 hover:scale-110"
                  alt="contact"
                />
              </div>
              <div
                data-aos="fade-up"
                className="w-[10rem] h-[10rem] lg:w-[15rem] lg:h-[15rem] relative sm:mt-2 overflow-hidden"
              >
                <Image
                  src={
                    "/assets/WhatsApp Image 2025-01-15 at 15.22.58_b94fc2ff.jpg"
                  }
                  className=" transition-transform duration-300 hover:scale-110"
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
                className="w-[10rem] h-[10rem] lg:w-[15rem] lg:h-[15rem] relative sm:mt-2 overflow-hidden"
              >
                <Image
                  src={
                    "/assets/WhatsApp Image 2025-01-15 at 01.11.48_6213fea4.jpg"
                  }
                  objectFit="cover"
                  layout="fill"
                  className="transition-transform duration-300 hover:scale-110"
                  alt="contact"
                />
              </div>
            </div>
            <div className="flex sm:flex-col gap-2 sm:gap-0">
              <div
                data-aos="fade-down-left"
                className="w-[10rem] h-[10rem] lg:w-[15rem] lg:h-[15rem] relative overflow-hidden"
              >
                <Image
                  src={
                    "/assets/WhatsApp Image 2025-01-15 at 10.26.12_d76a4ede.jpg"
                  }
                  objectFit="cover"
                  layout="fill"
                  className="transition-transform duration-300 hover:scale-110"
                  alt="contact"
                />
              </div>
              <div
                data-aos="fade-up-left"
                className="w-[10rem] h-[10rem] lg:w-[15rem] lg:h-[15rem] relative bg-blue p-2 sm:mt-2"
              >
                <p className="font-[600] text-[1.5rem] lg:text-[2rem]">
                  Carry the athletic sprit with the torch forward
                </p>
              </div>
            </div>
            <div className="flex sm:flex-col gap-2 sm:gap-0">
              <div
                data-aos="fade-down-right"
                className="w-[10rem] h-[10rem] lg:w-[15rem] lg:h-[15rem] relative bg-blue p-2"
              >
                <p className="font-[600] text-[1.5rem] lg:text-[2rem]">
                  Enjoy the evening with music and dance
                </p>
              </div>
              <div
                data-aos="fade-up-right"
                className="w-[10rem] h-[10rem] lg:w-[15rem] lg:h-[15rem] relative sm:mt-2 overflow-hidden"
              >
                <Image
                  src={"/assets/party.jpg"}
                  objectFit="cover"
                  layout="fill"
                  className="transition-transform duration-300 hover:scale-110"
                  alt="contact"
                />
              </div>
            </div>
            <div className="flex sm:flex-col gap-2 sm:gap-0">
              <div
                data-aos="fade-down-left"
                className="w-[10rem] h-[10rem] lg:w-[15rem] lg:h-[15rem] relative overflow-hidden"
              >
                <Image
                  src={
                    "/assets/WhatsApp Image 2025-01-15 at 01.12.16_1929ac55.jpg"
                  }
                  objectFit="cover"
                  layout="fill"
                  className="transition-transform duration-300 hover:scale-110"
                  alt="contact"
                />
              </div>
              <div
                data-aos="fade-up-left"
                className="w-[10rem] h-[10rem] lg:w-[15rem] lg:h-[15rem] relative bg-blue p-2 sm:mt-2"
              >
                <p className="font-[600] text-[1.5rem] lg:text-[2rem]">
                  Refresh-ments, Medals and Trophies
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue px-8 xl:px-[5.5rem] py-8 flex flex-col sm:flex-row items-center justify-between text-white">
          <div className="lg:w-[40%] flex flex-col sm:flex-row items-center justify-center">
            <div className="flex gap-4 items-center md:flex-col lg:flex-row justify-around">
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
          <div className="lg:w-[60%] flex justify-between flex-col lg:flex-row  mt-8 sm:mt-0">
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
                Sandeep Prusty (Sports Secretary) : +917978699617 <br />
                Satyabrat Panigrahi (Secretary General) : +917853998437 <br />
                Saswat Ranjan Pattnaik (Secretary Amenities) : +918249097228
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

      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-blue text-white p-3 rounded-full shadow-lg hover:bg-dark-blue transition-colors duration-300"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}
