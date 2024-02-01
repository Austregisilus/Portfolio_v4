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
          <h1 className="font-Fira mb-2 w-full pb-2 text-4xl font-bold capitalize md:text-5xl lg:text-6xl lg:leading-[50px]">
            Data + Design + Development. <br />
            The Trifecta.
          </h1>
          <p className="font-Gudea my-2 w-3/4 py-2 text-base text-white/60 md:text-lg">
            I bridge the gap between raw data and stunning user experiences. I
            blend{" "}
            <span className="text-white">data analysis, web development,</span>{" "}
            and <span className="text-white">UI/UX design</span> to create
            solutions that are both beautiful and insightful.
          </p>

          <div className="mt-5 flex flex-row gap-4 pt-5">
            <Button
              as={Link}
              href="#"
              radius="full"
              variant="shadow"
              color="secondary"
              className="font-Fira flex items-center justify-center px-6 py-3 text-base tracking-wider"
            >
              Learn more...
            </Button>
          </div>
        </div>
        <CardTilt className="rounded-2xl border-[1px] border-neutral-800 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-900 via-black to-neutral-900 px-10">
          <Chip
            className="font-Gudea my-4 bg-green-900 py-2 text-sm md:text-base"
            style={{
              transform: "translateZ(50px)",
            }}
          >
            Pleased to meet you.
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
              className="font-Roboto my-4 text-2xl font-bold capitalize text-white md:text-3xl"
              style={{
                transform: "translateZ(50px)",
              }}
            >
              About me.
            </h3>
            <p
              className="font-Gudea my-2 py-2 text-base text-white/60 md:text-lg"
              style={{
                transform: "translateZ(50px)",
              }}
            >
              Driven by a passion for building{" "}
              <span className="text-white">user-centric digital solutions</span>
              , I'm an aspiring graduate eager to refine my skills in front-end
              development and data analysis within a forward-thinking
              corporation. While my recent IT support internship at KPLC
              provided valuable technical experience, I'm excited to delve
              deeper into areas like{" "}
              <span className="text-white">"Creative Design"</span>.
            </p>
          </div>
        </CardTilt>
      </div>
      <UnderHero />
    </section>
  );
};

export default Hero;
