import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import Logo from "../../public/Logo.svg";
import Image from "next/image";

const Navigation = () => {
  return (
    <Navbar
      maxWidth="full"
      isBordered
      position="sticky"
      className="mt-2"
      shouldHideOnScroll
    >
      <NavbarBrand>
        <Image
          src={Logo}
          alt="Logo"
          width={50}
          height={50}
          className="object-contain"
        />
      </NavbarBrand>
      <NavbarContent justify="center" className="space-x-10">
        <NavbarItem>
          <Link color="foreground" href="#" className="font-marcellus text-lg">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="#"
            color="foreground"
            aria-current="page"
            className="font-marcellus text-lg"
          >
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="font-marcellus text-lg">
            About me
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            href="#"
            radius="full"
            variant="bordered"
            className="px-10 py-6 font-marcellus text-lg"
          >
            Download CV
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Navigation;
