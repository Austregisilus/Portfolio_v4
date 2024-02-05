import React from "react";
import Form from "./UI/Form";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const head =
    "font-Roboto my-4 text-2xl font-bold capitalize text-white md:text-3xl";

  return (
    <section id="contact">
      <div className="grid grid-cols-1 gap-4 overflow-clip rounded-2xl border-1 border-neutral-800 lg:grid-cols-2">
        <div className="flex flex-col justify-center bg-neutral-900 px-4 py-10">
          <h1 className="mb-2 w-full pb-2 font-Fira text-4xl font-bold capitalize md:text-5xl lg:text-6xl">
            Let's work together.
          </h1>
          <p className="my-1 py-1 font-Gudea text-base text-white/60 md:text-lg">
            If you like what you see, feel free to get in touch. You can either
            fill in the form or contact me directly using the following:
          </p>
          <div className="flex flex-col justify-center">
            <h6 className={head}>Contact details.</h6>
            <p className="my-1 flex items-center py-1 font-Gudea text-base text-white/60 md:text-lg">
              <MdEmail size={30} className="mr-4 text-white" />{" "}
              arsenio.kimani@strathmore.edu
            </p>
            <p className="my-1 flex items-center py-1 font-Gudea text-base text-white/60 md:text-lg">
              <FaPhoneVolume size={25} className="mr-5 text-white" /> 0727 077
              525
            </p>
            <p className="my-1 flex items-center py-1 font-Gudea text-base text-white/60 md:text-lg">
              I will be in touch as soon as possible.
            </p>
          </div>
        </div>
        <Form />
      </div>
    </section>
  );
};

export default Contact;
