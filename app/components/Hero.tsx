import { Button, Chip, Link } from "@nextui-org/react";
import React from "react";
import Profile from "../../public/DSC_0046.jpg";
import Image from "next/image";
import UnderHero from "./UnderHero";
import CardTilt from "./UI/CardTilt";

const Hero = () => {
  return (
    <section>
      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="flex flex-col justify-center py-10">
          <h1 className="mb-2 w-full pb-2 font-vidaloka text-4xl font-bold capitalize md:text-5xl lg:w-3/4 lg:text-6xl lg:leading-[50px]">
            Creating beautiful design and an eye for beautiful Visuals.
          </h1>
          <p className="my-2 w-3/4 py-2 font-marcellus text-base text-white/70 md:text-lg lg:text-xl">
            Using data analysis and web design to be able to create not only
            report but good looking report that are eye catching and also be
            able to design websites with great user interfaces.{" "}
          </p>

          <div className="mt-10 flex flex-row gap-4 pt-5">
            <Button
              as={Link}
              href="#"
              radius="full"
              color="primary"
              variant="ghost"
              className="w-1/2 px-10 py-6 font-marcellus text-base md:text-lg lg:text-xl"
            >
              Learn more
            </Button>
            <Button
              as={Link}
              href="#"
              radius="full"
              color="secondary"
              variant="ghost"
              className="w-1/2 px-10 py-6 font-marcellus text-base md:text-lg lg:text-xl"
            >
              Service
            </Button>
          </div>
        </div>
        <CardTilt className="rounded-2xl border-[1px] border-neutral-800 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-900 via-black to-neutral-900 px-10">
          <Chip
            color="success"
            className="my-4 py-2 font-marcellus text-base md:text-lg lg:text-xl"
            style={{
              transform: "translateZ(50px)",
            }}
          >
            Introducing
          </Chip>
          <div
            className="flex justify-center"
            style={{
              transform: "translateZ(50px)",
            }}
          >
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
            <h3
              className="my-4 font-vidaloka text-3xl font-bold capitalize text-white md:text-4xl lg:text-5xl"
              style={{
                transform: "translateZ(50px)",
              }}
            >
              A little about myself
            </h3>
            <p
              className="my-2 py-2 font-marcellus text-base text-white/70 md:text-lg lg:text-xl"
              style={{
                transform: "translateZ(50px)",
              }}
            >
              An aspiring graduate looking to break into the corporate world.
              Skills range from Frond-end development, UI/UX design and data
              analysis. Looking to improve my skills in any of these fields and
              an eager learner.
            </p>
          </div>
        </CardTilt>
      </div>
      <UnderHero />
    </section>
  );
};

export default Hero;
