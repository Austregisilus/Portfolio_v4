import { Button, Chip, Divider, Input } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import contact from "../../public/Group 12.svg";
import CardTilt from "./UI/CardTilt";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const head =
    "font-Roboto my-4 text-2xl font-bold capitalize text-white md:text-3xl";

  return (
    <section>
      <div className="grid grid-cols-1 gap-4 overflow-clip rounded-2xl border-1 border-neutral-800 lg:grid-cols-2">
        <div className="flex flex-col justify-center bg-stone-900 px-4 py-10">
          <h1 className="mb-2 w-full pb-2 font-Fira text-4xl font-bold capitalize md:text-5xl lg:text-6xl">
            Let's work together.
          </h1>
        </div>
        <div className="flex flex-col justify-center px-4 py-10">
          <h6 className={head}>Get in touch</h6>
          <div className="flex flex-col gap-4">
            <Input
              variant="underlined"
              color="default"
              size="lg"
              label="Full Name"
              className="font-Gudea"
            />
            <Input
              variant="underlined"
              color="default"
              className="font-Gudea"
              size="lg"
              label="Email"
            />
            <Input
              variant="underlined"
              className="font-Gudea"
              size="lg"
              color="default"
              label="Message"
            />
            <Button
              type="submit"
              radius="full"
              variant="shadow"
              color="secondary"
              className="mt-10 w-1/4 px-6 py-3  font-Fira text-base"
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
