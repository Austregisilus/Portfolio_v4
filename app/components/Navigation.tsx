"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import Logo from "../../public/Logo.svg";
import { FaFileDownload } from "react-icons/fa";
import Image from "next/image";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Home", "Services", "Projects", "Contact"];

  const link = "font-Gudea font-bold text-lg";
  const linkMobile =
    "w-full border-b-1 border-neutral-800 py-4 font-Gudea text-3xl";

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      isBordered
      position="sticky"
      className="mt-2"
      shouldHideOnScroll
    >
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      <NavbarBrand>
        <Image
          src={Logo}
          alt="Logo"
          width={50}
          height={50}
          className="object-contain"
        />
      </NavbarBrand>
      <NavbarContent justify="center" className="hidden gap-10 sm:flex">
        <NavbarItem>
          <Link color="foreground" href="#" className={link}>
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="#"
            color="foreground"
            aria-current="page"
            className={link}
          >
            Service
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className={link}>
            Projects
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link color="foreground" className={linkMobile} href="#">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            href="#"
            radius="full"
            variant="shadow"
            color="secondary"
            className="font-Fira flex items-center justify-center px-6 py-3 text-base"
            startContent={<FaFileDownload size={15} />}
          >
            Download CV
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Navigation;
