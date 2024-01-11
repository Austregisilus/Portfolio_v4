import React from "react";

const UnderHero = () => {
  return (
    <section className="h-auto">
      <div className="mt-4 grid grid-cols-12 space-x-4">
        <div className="col-span-3 rounded-2xl border-[1px] border-neutral-800 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-900 via-black to-neutral-900 px-4 py-4">
          <div>
            <h1 className="mb-4 text-center text-9xl font-bold oldstyle-nums">
              10+
            </h1>
          </div>
          <div>
            <h6 className="my-2 text-center font-marcellus text-xl">
              Projects completed
            </h6>
            <p className="my-2 text-center font-marcellus text-lg text-white/70">
              Various project in domains in data analysis and web design have
              been done.
            </p>
          </div>
        </div>
        <div className="col-span-3 rounded-2xl border-[1px] border-neutral-800 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-900 via-black to-neutral-900 px-4 py-4">
          <div>
            <h1 className="mb-4 text-center text-9xl font-bold oldstyle-nums">
              15+
            </h1>
          </div>
          <div>
            <h6 className="my-2 text-center font-marcellus text-xl">
              Courses accomplished
            </h6>
            <p className="my-2 text-center font-marcellus text-lg text-white/70">
              An eager learner who has completed various courses personally.
            </p>
          </div>
        </div>
        <div className="col-span-6 flex flex-col justify-center rounded-2xl border-[1px] border-neutral-800 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-900 via-black to-neutral-900 px-10 py-4">
          <h3 className="mb-2 pb-2 font-vidaloka text-3xl">The objective</h3>
          <p className="my-2 font-marcellus text-lg text-white/70">
            My goal is to be a data analyst and make attractive reports. I love
            finding and showing data insights. I want to learn more about data
            visualization and storytelling tools. I think data analysis and
            visualization are key for smart decisions in any field. I want to
            follow this career and help data-driven organizations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UnderHero;
