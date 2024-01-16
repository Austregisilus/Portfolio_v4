import React from "react";
import Image from "next/image";
import initials from "../../public/Group 13.svg";
import { IoAnalyticsOutline } from "react-icons/io5";
import analytics from "../../public/google-data-analytics-certificate.png";
import developer from "../../public/meta-front-end-developer-certificate.png";
import { MdOutlineDesignServices, MdDeveloperMode } from "react-icons/md";
import { Chip } from "@nextui-org/react";
import CardTilt from "./UI/CardTilt";

const Services = () => {
  return (
    <section className="my-4">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="grid place-content-between">
          <div className="relative mt-4 flex flex-col">
            <Chip className="text-md my-4 py-2 font-marcellus" color="success">
              Services
            </Chip>
            <h1 className="w-3/4 font-vidaloka text-4xl font-bold capitalize md:text-5xl lg:text-6xl lg:leading-[50px]">
              What is it that I do?
            </h1>
            <p className="my-2 w-3/4 py-2 font-marcellus text-base text-white/70 md:text-lg lg:text-xl">
              I provide services form data analysis to design and development of
              websites. I would like to improve these skill and to be
              competitive in the job market.
            </p>
            <Image
              src={initials}
              width={700}
              height={500}
              alt="service watermark"
              className="absolute left-1/2 top-1/2 -z-50 -translate-x-1/2 -translate-y-1/2 object-contain"
              aria-hidden
            />
          </div>
          <div className="grid grid-cols-1 place-items-end gap-4 sm:grid-cols-2">
            <CardTilt className="rounded-2xl border-[1px] border-neutral-800 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-500 via-black to-neutral-900 px-4 py-6">
              <div
                style={{
                  transform: "translateZ(50px)",
                }}
              >
                <Image
                  src={analytics}
                  alt="Data analysis badge"
                  width={125}
                  height={125}
                  loading="lazy"
                  className="mx-auto"
                />
              </div>
              <div>
                <h6
                  className="my-2 text-center font-marcellus text-lg md:text-xl lg:text-2xl"
                  style={{
                    transform: "translateZ(50px)",
                  }}
                >
                  Google data analytics badge
                </h6>
                <p
                  className="my-2 text-center font-marcellus text-base text-white/70 md:text-lg lg:text-xl"
                  style={{
                    transform: "translateZ(50px)",
                  }}
                >
                  This badge was awarded by completing the data analytics
                  certificate.
                </p>
              </div>
            </CardTilt>
            <CardTilt className="rounded-2xl border-[1px] border-neutral-800 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900 via-black to-neutral-900 px-4 py-6">
              <div
                style={{
                  transform: "translateZ(50px)",
                }}
              >
                <Image
                  src={developer}
                  alt="Developer badge"
                  width={125}
                  height={125}
                  className="mx-auto"
                />
              </div>
              <div>
                <h6
                  className="my-2 text-center font-marcellus text-lg md:text-xl lg:text-2xl"
                  style={{
                    transform: "translateZ(50px)",
                  }}
                >
                  Frontend developer badge
                </h6>
                <p
                  className="my-2 text-center font-marcellus text-base text-white/70 md:text-lg lg:text-xl"
                  style={{
                    transform: "translateZ(50px)",
                  }}
                >
                  This badge was awarded by completing the front end
                  certificate.
                </p>
              </div>
            </CardTilt>
          </div>
        </div>
        <CardTilt className="rounded-2xl border-[1px] border-neutral-800 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-900 via-black to-neutral-900 px-10 py-4">
          <div
            style={{
              transform: "translateZ(50px)",
            }}
          >
            <div className="mb-3 mt-2 flex h-20 w-20 items-center justify-center rounded-full bg-black pb-2 pt-2 ring-[1px] ring-neutral-800">
              <IoAnalyticsOutline
                size={50}
                className="text-6xl text-purple-800"
              />
            </div>
            <h3 className="mb-2 pb-2 font-marcellus text-lg md:text-xl lg:text-2xl">
              Data analysis
            </h3>
            <p className="my-2 border-b-[1px] border-neutral-900 py-2 font-marcellus text-base text-white/70 md:text-lg lg:text-xl">
              Analyzes data to uncover insights and trends providing valuable
              information for decision making and business strategies.
            </p>
          </div>
          <div
            style={{
              transform: "translateZ(50px)",
            }}
          >
            <div className="mb-3 mt-2 flex h-20 w-20 items-center justify-center rounded-full bg-black pb-2 pt-2 ring-[1px] ring-neutral-800">
              <MdDeveloperMode size={50} className="text-6xl text-blue-800" />
            </div>
            <h3 className="mb-2 pb-2 font-marcellus text-lg md:text-xl lg:text-2xl">
              Front end developer
            </h3>
            <p className="my-2 border-b-[1px] border-neutral-900 py-2 font-marcellus text-base text-white/70 md:text-lg lg:text-xl">
              Focuses on creating user-friendly interfaces and enhancing user
              experiences through research, wireframing and visual design.
            </p>
          </div>
          <div
            style={{
              transform: "translateZ(50px)",
            }}
          >
            <div className="mb-3 mt-2 flex h-20 w-20 items-center justify-center rounded-full bg-black pb-2 pt-2 ring-[1px] ring-neutral-800">
              <MdOutlineDesignServices
                size={50}
                className="text-6xl text-emerald-800"
              />
            </div>
            <h3 className="mb-2 pb-2 font-marcellus text-lg md:text-xl lg:text-2xl">
              UI/UX designer
            </h3>
            <p className="my-2 py-2 font-marcellus text-base text-white/70 md:text-lg lg:text-xl">
              Builds the visual and interactive elements of a website or
              application using HTML, CSS and Javascript.
            </p>
          </div>
        </CardTilt>
      </div>
    </section>
  );
};

export default Services;
