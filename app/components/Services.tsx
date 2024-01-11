import React from "react";
import Image from "next/image";
import initials from "../../public/Group 13.svg";
import { IoAnalyticsOutline } from "react-icons/io5";
import { MdOutlineDesignServices, MdDeveloperMode } from "react-icons/md";
import { Chip } from "@nextui-org/react";

const Services = () => {
  return (
    <section className="my-4">
      <div className="grid grid-cols-2 space-x-4">
        <div className="relative flex flex-col justify-center">
          <Chip className="text-md my-4 py-2 font-marcellus">Services</Chip>
          <h2 className="font-vidaloka text-4xl">What is it that I do?</h2>
          <p className="my-2 w-3/4 py-2 font-marcellus text-lg text-white/70">
            I provide services form data analysis to design and development of
            websites. I would like to improve these skill and to be competitive
            in the job market.
          </p>
          <Image
            src={initials}
            alt="service watermark"
            className="absolute left-1/2 top-1/2 -z-50 -translate-x-1/2 -translate-y-1/2"
            aria-hidden
          />
        </div>
        <div className="rounded-2xl border-[1px] border-neutral-800 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900 via-black to-neutral-900 px-10 py-4">
          <div>
            <div className="mb-3 mt-2 flex h-20 w-20 items-center justify-center rounded-full bg-black pb-2 pt-2 ring-[1px] ring-neutral-800">
              <IoAnalyticsOutline className="text-6xl text-purple-800" />
            </div>
            <h3 className="mb-2 pb-2 font-vidaloka text-3xl">Data analysis</h3>
            <p className="my-2 border-b-[1px] border-neutral-900 py-2 font-marcellus text-lg text-white/70">
              Analyzes data to uncover insights and trends providing valuable
              information for decision making and business strategies.
            </p>
          </div>
          <div>
            <div className="mb-3 mt-2 flex h-20 w-20 items-center justify-center rounded-full bg-black pb-2 pt-2 ring-[1px] ring-neutral-800">
              <MdDeveloperMode className="text-6xl text-blue-800" />
            </div>
            <h3 className="mb-2 pb-2 font-vidaloka text-3xl">
              Front end developer
            </h3>
            <p className="my-2 border-b-[1px] border-neutral-900 py-2 font-marcellus text-lg text-white/70">
              Focuses on creating user-friendly interfaces and enhancing user
              experiences through research, wireframing and visual design.
            </p>
          </div>
          <div>
            <div className="mb-3 mt-2 flex h-20 w-20 items-center justify-center rounded-full bg-black pb-2 pt-2 ring-[1px] ring-neutral-800">
              <MdOutlineDesignServices className="text-6xl text-emerald-800" />
            </div>
            <h3 className="mb-2 pb-2 font-vidaloka text-3xl">UI/UX designer</h3>
            <p className="my-2 py-2 font-marcellus text-lg text-white/70">
              Builds the visual and interactive elements of a website or
              application using HTML, CSS and Javascript.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
