"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Button, Input } from "@nextui-org/react";

const Form = () => {
  const head =
    "font-Roboto my-4 text-2xl font-bold capitalize text-white md:text-3xl";
  const mainCard = "font-Gudea my-1 py-1 text-base text-white/60 md:text-lg";

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const [state, handleSubmit] = useForm("mrgnpabr");
  if (state.succeeded) {
    return (
      <div className="flex flex-col justify-center px-4 py-10">
        <h1 className="my-4 font-Roboto text-2xl font-bold capitalize text-white md:text-3xl">
          Thanks for your message!
        </h1>
        <p className="my-1 py-1 font-Gudea text-base text-white/60 md:text-lg">
          I'll get back to you as soon as I can.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center px-4 py-10">
      <h6 className={head}>Get in touch</h6>
      <form
        onSubmit={handleSubmit}
        action={"https://formspree.io/f/mrgnpabr"}
        method="POST"
        className="flex flex-col gap-4"
      >
        <Input
          isRequired
          variant="underlined"
          color="default"
          size="lg"
          name="name"
          label="Full Name"
          autoComplete="off"
          value={name}
          onValueChange={setName}
          className="font-Gudea"
        />
        <Input
          isRequired
          variant="underlined"
          color="default"
          type="email"
          name="email"
          className="font-Gudea"
          autoComplete="off"
          value={email}
          onValueChange={setEmail}
          size="lg"
          label="Email"
        />
        <Input
          isRequired
          variant="underlined"
          className="font-Gudea"
          size="lg"
          color="default"
          name="message"
          autoComplete="off"
          value={message}
          onValueChange={setMessage}
          label="Message"
        />

        <Button
          type="submit"
          radius="full"
          variant="shadow"
          color="secondary"
          disabled={state.submitting}
          className="mt-10 w-1/4 px-6 py-3 font-Fira text-base"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Form;
