import React from "react";
import Logo from "../../public/Logo.svg";
import Image from "next/image";
import { Link } from "@nextui-org/react";
import Container from "./Container";

const Footer = () => {
  return (
    <section className="mt-4 border-t-1 border-neutral-800">
      <Container>
        <div className="mt-4 grid grid-cols-2 place-content-between space-x-4">
          <div>
            <Image
              src={Logo}
              alt="Logo"
              width={50}
              height={50}
              className="object-contain"
            />
            <p className="my-2 w-3/4 py-2 font-marcellus text-sm text-white/70">
              Thank you for viewing my portfolio even though I am still planning
              to improve some part of it later and add more sections and pages
              to it. If you have any recomendations, I'd be happy to hear from
              you.
            </p>
          </div>
          <div className="grid place-content-end">
            <h6 className="py-3 font-marcellus text-lg">Navigation</h6>
            <Link
              href="#"
              className="py-2 font-marcellus text-sm text-white/70"
            >
              Home
            </Link>
            <Link
              href="#"
              className="py-2 font-marcellus text-sm text-white/70"
            >
              About
            </Link>
            <Link
              href="#"
              className="py-2 font-marcellus text-sm text-white/70"
            >
              Services
            </Link>
            <Link
              href="#"
              className="py-2 font-marcellus text-sm text-white/70"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="my-6 grid place-content-center place-items-center border-t-1 border-neutral-800">
          {" "}
          <p className="text-md py-2 font-marcellus">
            © Created by Arsenio Kimani.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
