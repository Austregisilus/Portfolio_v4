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

  const menuItems = [
    {
      index: 1,
      name: "Home",
      link: "#home",
    },
    {
      index: 2,
      name: "Services",
      link: "#service",
    },
    {
      index: 3,
      name: "Projects",
      link: "#project",
    },
    {
      index: 4,
      name: "Contact",
      link: "#contact",
    },
  ];

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
      <NavbarContent justify="center" className="hidden gap-8 sm:flex">
        <NavbarItem>
          <Link color="foreground" href="#home" className={link}>
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="#service"
            color="foreground"
            aria-current="page"
            className={link}
          >
            Service
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#contact" className={link}>
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.index}>
            <Link color="foreground" className={linkMobile} href={item.link}>
              {item.name}
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
            className="flex items-center justify-center px-6 py-3 font-Fira text-base"
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
