import { Chip, Divider, Input, Textarea } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import contact from "../../public/Group 12.svg";
import CardTilt from "./UI/CardTilt";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="flex flex-col justify-between">
          <div className="relative mt-4 flex flex-col justify-center">
            <Chip className="text-md my-4 py-2 font-marcellus" color="success">
              Contact
            </Chip>
            <h2 className="w-3/4 font-vidaloka text-4xl font-bold capitalize md:text-5xl lg:text-6xl lg:leading-[50px]">
              Want to get in touch?
            </h2>
            <p className="my-2 w-3/4 py-2 font-marcellus text-lg text-white/70">
              I have provided various ways to reach out to me. Just choose one
              of the three.
            </p>
            <Image
              src={contact}
              width={700}
              height={500}
              alt="contact watermark"
              className="absolute left-1/2 top-1/2 -z-50 -translate-x-1/2 -translate-y-1/2 object-contain"
              aria-hidden
            />
          </div>
          <CardTilt className="flex flex-row justify-between gap-4 rounded-2xl border-[1px] border-neutral-800 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-900 via-black to-neutral-900 px-10 py-4">
            <div
              style={{
                transform: "translateZ(50px)",
              }}
              className="w-1/2"
            >
              <div className="mb-3 mt-2 flex h-20 w-20 items-center justify-center rounded-full bg-black pb-2 pt-2 ring-[1px] ring-neutral-800">
                <FaPhoneVolume size={40} className="text-6xl text-indigo-900" />
              </div>
              <h3 className="mb-2 font-marcellus text-base md:text-lg lg:text-xl">
                Please text this number if you have any questions:
              </h3>
              <p className="my-2 font-marcellus text-base text-white/70 md:text-lg lg:text-xl">
                0727 077525
              </p>
            </div>
            <Divider
              orientation="vertical"
              style={{ transform: "translateZ(75px)" }}
            />
            <div
              style={{
                transform: "translateZ(50px)",
              }}
              className="w-1/2"
            >
              <div className="mb-3 mt-2 flex h-20 w-20 items-center justify-center rounded-full bg-black pb-2 pt-2 ring-[1px] ring-neutral-800">
                <MdEmail size={40} className="text-6xl text-green-900" />
              </div>
              <h3 className="mb-2 font-marcellus text-base md:text-lg lg:text-xl">
                Please send an email if you have any questions:
              </h3>
              <p className="my-2 font-marcellus text-base text-white/70 md:text-lg lg:text-xl">
                karsenio13@gmail.com
              </p>
            </div>
          </CardTilt>
        </div>
        <div className="rounded-2xl border-[1px] border-neutral-800 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-900 via-black to-neutral-900 px-10 py-4">
          <h1 className="mb-10 font-vidaloka text-4xl font-bold">
            Let’s get in touch.
          </h1>
          <Input
            isRequired
            type="name"
            label="Name"
            size="lg"
            variant="bordered"
            radius="lg"
            className="my-2 w-full py-2 font-marcellus text-lg"
          />
          <Input
            isRequired
            type="email"
            label="Email"
            size="lg"
            variant="bordered"
            radius="lg"
            className="my-2 w-full py-2 font-marcellus text-lg"
          />
          <Textarea
            variant="bordered"
            label="Description"
            labelPlacement="inside"
            className="my-2 w-full rounded-lg py-2 font-marcellus text-lg"
          />
          <Input
            type="submit"
            value="Submit"
            className="mt-10 cursor-pointer font-marcellus text-lg"
          ></Input>
        </div>
      </div>
    </section>
  );
};

export default Contact;
