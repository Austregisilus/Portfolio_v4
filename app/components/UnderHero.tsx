import React from "react";
import CardTilt from "./UI/CardTilt";
import { Chip } from "@nextui-org/react";

const UnderHero = () => {
  const heading =
    "font-Roboto my-4 text-center text-2xl font-bold capitalize text-white md:text-3xl";
  const content =
    "font-Gudea my-2 text-center text-base text-white/70 md:text-lg";
  const number = "font-Roboto mb-4 text-center text-5xl font-bold md:text-6xl";
  const main = "font-Gudea my-2 text-base text-white/70 md:text-lg";
  const head =
    "font-Roboto my-4 text-2xl font-bold capitalize text-white md:text-3xl";

  return (
    <section className="h-auto">
      <div className="mt-4 grid grid-cols-12 gap-4 lg:mt-6 lg:gap-6">
        <CardTilt className="col-span-12 rounded-2xl border-[1px] border-neutral-800 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900 via-black to-neutral-900 px-4 py-4 sm:col-span-6 lg:col-span-3">
          <div
            style={{
              transform: "translateZ(50px)",
            }}
          >
            <h1
              className={number}
              style={{
                transform: "translateZ(50px)",
              }}
            >
              10+
            </h1>
          </div>
          <div>
            <h3
              className={heading}
              style={{
                transform: "translateZ(50px)",
              }}
            >
              Courses.
            </h3>
            <p
              className={content}
              style={{
                transform: "translateZ(50px)",
              }}
            >
              An eager learner who has completed various courses and acquired
              skills in different domains.
            </p>
          </div>
        </CardTilt>
        <CardTilt className="col-span-12 rounded-2xl border-[1px] border-neutral-800 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-rose-900 via-black to-neutral-900 px-4 py-4 sm:col-span-6 lg:col-span-3">
          <div
            style={{
              transform: "translateZ(50px)",
            }}
          >
            <h1
              className={number}
              style={{
                transform: "translateZ(50px)",
              }}
            >
              5+
            </h1>
          </div>
          <div>
            <h6
              className={heading}
              style={{
                transform: "translateZ(50px)",
              }}
            >
              Projects.
            </h6>
            <p
              className={content}
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
            className="my-4 bg-gray-900 py-2 font-Gudea text-sm md:text-base"
            style={{
              transform: "translateZ(50px)",
            }}
          >
            What am I all about.
          </Chip>
          <h3
            className={head}
            style={{
              transform: "translateZ(50px)",
            }}
          >
            The objective.
          </h3>
          <p
            className={main}
            style={{
              transform: "translateZ(50px)",
            }}
          >
            As one who is passionate about creating user centric experiences, I
            would like to enter and contribute my skillset to a company where
            our goals align. Even though I am a novice, I am eager and excited
            to put my learning experience to the test.
          </p>
        </CardTilt>
      </div>
    </section>
  );
};

export default UnderHero;
