import React from "react";
import CardTilt from "./UI/CardTilt";
import { Chip } from "@nextui-org/react";

const UnderHero = () => {
  return (
    <section className="h-auto">
      <div className="mt-4 grid grid-cols-12 gap-4">
        <CardTilt className="col-span-12 rounded-2xl border-[1px] border-neutral-800 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900 via-black to-neutral-900 px-4 py-4 sm:col-span-6 lg:col-span-3">
          <div
            style={{
              transform: "translateZ(50px)",
            }}
          >
            <h1
              className="mb-4 text-center font-vidaloka text-5xl font-bold md:text-6xl lg:text-8xl"
              style={{
                transform: "translateZ(50px)",
              }}
            >
              10+
            </h1>
          </div>
          <div>
            <h6
              className="my-2 text-center font-marcellus text-lg  md:text-xl lg:text-2xl"
              style={{
                transform: "translateZ(50px)",
              }}
            >
              Courses accomplished
            </h6>
            <p
              className="my-2 text-center font-marcellus text-base text-white/70 md:text-lg lg:text-xl"
              style={{
                transform: "translateZ(50px)",
              }}
            >
              An eager learner who has completed various courses and acquired
              skills in different domains.
            </p>
          </div>
        </CardTilt>
        <CardTilt className="col-span-12 rounded-2xl border-[1px] border-neutral-800 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-900 via-black to-neutral-900 px-4 py-4 sm:col-span-6 lg:col-span-3">
          <div
            style={{
              transform: "translateZ(50px)",
            }}
          >
            <h1
              className="mb-4 text-center font-vidaloka text-5xl font-bold md:text-6xl lg:text-8xl"
              style={{
                transform: "translateZ(50px)",
              }}
            >
              5+
            </h1>
          </div>
          <div>
            <h6
              className="my-2 text-center font-marcellus text-lg md:text-xl lg:text-2xl"
              style={{
                transform: "translateZ(50px)",
              }}
            >
              Projects completed
            </h6>
            <p
              className="my-2 text-center font-marcellus text-base text-white/70 md:text-lg lg:text-xl"
              style={{
                transform: "translateZ(50px)",
              }}
            >
              A self-motivated learn always seeking to improve his skills
              through various exercises and projects.
            </p>
          </div>
        </CardTilt>
        <CardTilt className="col-span-12 flex flex-col justify-center rounded-2xl border-[1px] border-neutral-800 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-900 via-black to-neutral-900 px-10 py-4 lg:col-span-6">
          <Chip
            color="success"
            className="my-4 py-2 font-marcellus text-base md:text-lg lg:text-xl"
            style={{
              transform: "translateZ(50px)",
            }}
          >
            The Goal
          </Chip>
          <h3
            className="mb-2 pb-2 font-vidaloka text-3xl font-bold capitalize md:text-4xl lg:text-5xl"
            style={{
              transform: "translateZ(50px)",
            }}
          >
            The objective
          </h3>
          <p
            className="my-2 font-marcellus text-base text-white/70 md:text-lg lg:text-xl"
            style={{
              transform: "translateZ(50px)",
            }}
          >
            My goal is to be a data analyst and make attractive reports. I love
            finding and showing data insights. I want to learn more about data
            visualization and storytelling tools. I think data analysis and
            visualization are key for smart decisions in any field. I want to
            follow this career and help data-driven organizations.
          </p>
        </CardTilt>
      </div>
    </section>
  );
};

export default UnderHero;
