import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ContactDetails = () => {
  return (
    <div className="my-4 grid grid-cols-2 space-x-4">
      <div className="rounded-2xl border-[1px] border-l-4 border-neutral-800 border-l-purple-800 bg-neutral-900 px-10 py-3">
        <div className="mb-3 mt-2 flex h-32 w-32 items-center justify-center rounded-full bg-black pb-2 pt-2 ring-[1px] ring-neutral-800">
          <FaPhoneVolume className="text-7xl text-purple-800" />
        </div>
      </div>
      <div className="rounded-2xl border-[1px] border-l-4 border-neutral-800 border-l-emerald-800 bg-neutral-900 px-10 py-3">
        <div className="mb-3 mt-2 flex h-32 w-32 items-center justify-center rounded-full bg-black pb-2 pt-2 ring-[1px] ring-neutral-800">
          <MdEmail className="text-7xl text-emerald-800" />
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
