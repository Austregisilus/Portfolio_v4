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
import Image from "next/image";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Home", "Projects", "About me", "Contact"];

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
      <NavbarContent justify="center" className="hidden gap-4 sm:flex">
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
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color="foreground"
              className="w-full border-b-1 border-neutral-800 py-4 font-marcellus text-3xl"
              href="#"
            >
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
            color="primary"
            variant="ghost"
            className="px-5 py-3 font-marcellus text-base md:px-10 md:py-6 md:text-lg lg:text-xl"
          >
            Download CV
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Navigation;
