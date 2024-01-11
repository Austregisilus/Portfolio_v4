import { Button, Chip, Link } from "@nextui-org/react";
import React from "react";
import Profile from "../../public/DSC_0046.jpg";
import Image from "next/image";
import UnderHero from "./UnderHero";

const Hero = () => {
  return (
    <section>
      <div className="mt-4 grid grid-cols-2 space-x-4 space-y-4">
        <div className="flex flex-col justify-center py-10">
          <h1 className="mb-2 pb-2 font-vidaloka text-5xl font-bold capitalize leading-[50px]">
            Creating beautiful design and an <br /> eye for beautiful Visuals.
          </h1>
          <p className="my-2 w-3/4 py-2 font-marcellus text-xl text-white/70">
            Using data analysis and web design to be able to create not only
            report but good looking report that are eye catching and also be
            able to design websites with great user interfaces.{" "}
          </p>

          <div className="mt-10 flex flex-row space-x-5 pt-5">
            <Button
              as={Link}
              href="#"
              radius="full"
              variant="bordered"
              className="w-1/4 px-10 py-6 font-marcellus text-lg"
            >
              Learn more
            </Button>
            <Button
              as={Link}
              href="#"
              radius="full"
              variant="bordered"
              className="w-1/4 px-10 py-6 font-marcellus text-lg"
            >
              Service
            </Button>
          </div>
        </div>
        <div className="rounded-2xl border-[1px] border-neutral-800 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-900 via-black to-neutral-900 px-10">
          <Chip className="text-md my-4 py-2 font-marcellus">Introducing</Chip>
          <div className="flex justify-center">
            <Image
              src={Profile}
              alt="profile"
              height={75}
              width={125}
              loading="eager"
              className="rounded-full object-cover"
            />
          </div>
          <div>
            <h3 className="mb-2 pb-2 font-vidaloka text-3xl">
              A little about myself
            </h3>
            <p className="my-2 py-2 font-marcellus text-lg text-white/70">
              An aspiring graduate looking to break into the corporate world.
              Skills range from Frond-end development, UI/UX design and data
              analysis. Looking to improve my skills in any of these fields and
              an eager learner.
            </p>
          </div>
        </div>
      </div>
      <UnderHero />
    </section>
  );
};

export default Hero;
