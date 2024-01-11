import { Button, Chip, Input, Textarea } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import contact from "../../public/Group 12.svg";
import ContactDetails from "./ContactDetails";

const Contact = () => {
  return (
    <section>
      <div className="grid grid-cols-2 space-x-4">
        <div className="relative flex flex-col justify-center">
          <Chip className="text-md my-4 py-2 font-marcellus">Contact</Chip>
          <h2 className="font-vidaloka text-4xl">Want to contact me?</h2>
          <p className="my-2 w-3/4 py-2 font-marcellus text-lg text-white/70">
            If interested to get in touch with me you can either fill the form
            below or contact me directly..
          </p>
          <Image
            src={contact}
            alt="contact watermark"
            className="absolute left-1/2 top-1/2 -z-50 -translate-x-1/2 -translate-y-1/2"
            aria-hidden
          />
        </div>
        <div className="rounded-2xl border-[1px] border-neutral-800 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-fuchsia-900 via-black to-neutral-900 px-10 py-4">
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
            className="mt-10 font-marcellus text-lg"
          ></Input>
        </div>
      </div>
      <ContactDetails />
    </section>
  );
};

export default Contact;
