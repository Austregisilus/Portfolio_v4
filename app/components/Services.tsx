import React from "react";
import Image from "next/image";
import initials from "../../public/Group 13.svg";
import { IoAnalyticsOutline } from "react-icons/io5";
import analytics from "../../public/google-data-analytics-certificate.png";
import developer from "../../public/meta-front-end-developer-certificate.png";
import { MdOutlineDesignServices, MdDeveloperMode } from "react-icons/md";
import { Chip, Divider } from "@nextui-org/react";
import CardTilt from "./UI/CardTilt";
import { twMerge } from "tailwind-merge";

const Services = () => {
  const heading =
    "font-Roboto my-4 text-center text-2xl font-bold capitalize text-white md:text-3xl";
  const content =
    "font-Gudea my-2 text-center text-base text-white/60 md:text-lg";
  const main = "font-Gudea my-2 text-base text-white/60 md:text-lg";
  const mainCard = "font-Gudea my-1 py-1 text-base text-white/60 md:text-lg";
  const head =
    "font-Roboto my-4 text-2xl font-bold capitalize text-white md:text-3xl";
  const chip = "font-Gudea my-2 mr-1 bg-purple-900 text-sm md:text-base";

  return (
    <section className="my-4">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="grid place-content-between">
          <div className="relative mt-4 flex flex-col justify-center py-10">
            <h1 className="font-Fira mb-2 w-full pb-2 text-4xl font-bold capitalize md:text-5xl lg:text-6xl lg:leading-[50px]">
              Skills ranging from data <br /> analysis to web <br />{" "}
              development.
            </h1>
            <p className={main}>
              During my studies, I developed skills in front-end development,
              data analysis, and UI/UX design. This included courses offered by
              top institutions such as Google and Meta. I'm confident in my
              ability and here are some of my accolades.
            </p>
            <Image
              src={initials}
              width={700}
              height={500}
              alt="service watermark"
              className="absolute bottom-0 left-0 -z-50 translate-y-1/2 object-contain"
              aria-hidden
            />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <CardTilt className="rounded-2xl border-[1px] border-neutral-800 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-500 via-black to-neutral-900 px-4 py-6">
              <div
                style={{
                  transform: "translateZ(50px)",
                }}
              >
                <Image
                  src={analytics}
                  alt="Data analysis badge"
                  width={125}
                  height={125}
                  loading="lazy"
                  className="mx-auto"
                />
              </div>
              <div>
                <h6
                  className={heading}
                  style={{
                    transform: "translateZ(50px)",
                  }}
                >
                  Data analytics badge
                </h6>
                <p
                  className={content}
                  style={{
                    transform: "translateZ(50px)",
                  }}
                >
                  This badge was awarded by completing the data analytics
                  certificate by Google on Coursera.
                </p>
              </div>
            </CardTilt>
            <CardTilt className="rounded-2xl border-[1px] border-neutral-800 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900 via-black to-neutral-900 px-4 py-6">
              <div
                style={{
                  transform: "translateZ(50px)",
                }}
              >
                <Image
                  src={developer}
                  alt="Developer badge"
                  width={125}
                  height={125}
                  className="mx-auto"
                />
              </div>
              <div>
                <h6
                  className={heading}
                  style={{
                    transform: "translateZ(50px)",
                  }}
                >
                  Front-end developer badge
                </h6>
                <p
                  className={content}
                  style={{
                    transform: "translateZ(50px)",
                  }}
                >
                  This badge was awarded by completing the front-end developer
                  certificate by Meta on Coursera.
                </p>
              </div>
            </CardTilt>
          </div>
        </div>
        <CardTilt className="rounded-2xl border-[1px] border-neutral-800 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-900 via-black to-neutral-900 px-10 py-4">
          <Chip
            className="font-Gudea my-4 bg-stone-900 py-2 text-sm md:text-base"
            style={{
              transform: "translateZ(50px)",
            }}
          >
            Skills including but not limited to.
          </Chip>
          <div
            style={{
              transform: "translateZ(50px)",
            }}
          >
            <div className="mb-3 mt-2 flex h-20 w-20 items-center justify-center rounded-full bg-black pb-2 pt-2 ring-[1px] ring-neutral-800">
              <IoAnalyticsOutline
                size={50}
                className="text-6xl text-purple-800"
              />
            </div>
            <h3 className={head}>Data analysis</h3>
            <p className={mainCard}>
              Analyzes data to uncover insights and trends providing valuable
              information for decision making and business strategies. Able to
              use tools such as:
            </p>
            <Chip
              className={chip}
              style={{
                transform: "translateZ(50px)",
              }}
            >
              Python
            </Chip>
            <Chip
              className={chip}
              style={{
                transform: "translateZ(50px)",
              }}
            >
              Microsoft Excel
            </Chip>
            <Chip
              className={chip}
              style={{
                transform: "translateZ(50px)",
              }}
            >
              R language
            </Chip>
            <Chip
              className={chip}
              style={{
                transform: "translateZ(50px)",
              }}
            >
              Power BI
            </Chip>
          </div>
          <Divider
            style={{
              transform: "translateZ(50px)",
            }}
            orientation="horizontal"
            className="my-2 bg-neutral-800"
          />
          <div
            style={{
              transform: "translateZ(50px)",
            }}
          >
            <div className="mb-3 mt-2 flex h-20 w-20 items-center justify-center rounded-full bg-black pb-2 pt-2 ring-[1px] ring-neutral-800">
              <MdDeveloperMode size={50} className="text-6xl text-blue-800" />
            </div>
            <h3 className={head}>Front-end developer</h3>
            <p className={mainCard}>
              Builds the visual and interactive elements of a website or
              application using HTML, CSS and Javascript. Able to use tools such
              as:
            </p>
            <Chip
              className={twMerge(chip, "bg-blue-800")}
              style={{
                transform: "translateZ(50px)",
              }}
            >
              HTML
            </Chip>
            <Chip
              className={twMerge(chip, "bg-blue-800")}
              style={{
                transform: "translateZ(50px)",
              }}
            >
              CSS
            </Chip>
            <Chip
              className={twMerge(chip, "bg-blue-800")}
              style={{
                transform: "translateZ(50px)",
              }}
            >
              JavaScript
            </Chip>
            <Chip
              className={twMerge(chip, "bg-blue-800")}
              style={{
                transform: "translateZ(50px)",
              }}
            >
              React
            </Chip>
          </div>
          <Divider
            style={{
              transform: "translateZ(50px)",
            }}
            orientation="horizontal"
            className="my-2 bg-neutral-800"
          />
          <div
            style={{
              transform: "translateZ(50px)",
            }}
          >
            <div className="mb-3 mt-2 flex h-20 w-20 items-center justify-center rounded-full bg-black pb-2 pt-2 ring-[1px] ring-neutral-800">
              <MdOutlineDesignServices
                size={50}
                className="text-6xl text-emerald-800"
              />
            </div>
            <h3 className={head}>UI/UX designer</h3>
            <p className={mainCard}>
              Focuses on creating user-friendly interfaces and enhancing user
              experiences through research, wireframing and visual design. Able
              to use tools such as:
            </p>
            <Chip
              className={twMerge(chip, "bg-emerald-800")}
              style={{
                transform: "translateZ(50px)",
              }}
            >
              Figma
            </Chip>
            <Chip
              className={twMerge(chip, "bg-emerald-800")}
              style={{
                transform: "translateZ(50px)",
              }}
            >
              WebFlow
            </Chip>
          </div>
        </CardTilt>
      </div>
    </section>
  );
};

export default Services;
