import React from "react";
import Logo from "../../public/Logo.svg";
import Image from "next/image";
import { Link } from "@nextui-org/react";
import Container from "./Container";

const Footer = () => {
  return (
    <section className="mt-4 border-t-1 border-neutral-800">
      <Container>
        <div className="mt-4 grid grid-cols-1 place-content-between">
          <div>
            <Image
              src={Logo}
              alt="Logo"
              width={50}
              height={50}
              className="object-contain"
            />
            <p className="mt-1 pt-1 font-Gudea text-base text-white/60 md:text-lg">
              Thank you for viewing my portfolio. I hope you enjoyed it.
            </p>
            <p className="mb-3 pb-1 font-Gudea text-base text-white/60 md:text-lg">
              Looking forward to working with you.
            </p>
          </div>
        </div>
        <div className="grid place-content-center place-items-center border-t-1 border-neutral-800">
          {" "}
          <p className="py-2 font-Gudea text-base text-white/60 md:text-lg">
            Template created by{" "}
            <span className="font-bold text-white">Arsenio Kimani</span>. All
            Rights Reserved 2024.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
