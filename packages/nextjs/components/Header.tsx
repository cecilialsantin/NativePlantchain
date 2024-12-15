/* eslint-disable prettier/prettier */

"use client";

import React, { useCallback, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";
import { useOutsideClick } from "~~/hooks/scaffold-eth";
import { useDisconnect } from "wagmi";

type HeaderMenuLink = {
  label: string;
  href: string;
  icon?: React.ReactNode;
};

// Menu links updated to include only Home
export const menuLinks: HeaderMenuLink[] = [
  {
    label: "Home",
    href: "/",
  },
];

export const HeaderMenuLinks = () => {
  const router = useRouter();
  const { disconnect } = useDisconnect();

  const handleHomeClick = (href: string) => {
    disconnect(); // Desconecta al usuario si está conectado
    router.push(href); // Redirige a la página inicial
  };

  return (
    <>
      {menuLinks.map(({ label, href, icon }) => (
        <li key={href}>
          <button
            type="button"
            onClick={() => handleHomeClick(href)}
            className="hover:bg-pink-700 hover:shadow-md focus:!bg-pink-800 active:!text-neutral py-1.5 px-3 text-sm rounded-full gap-2 grid grid-flow-col bg-pink-800 text-white shadow-md"
          >
            {icon}
            <span>{label}</span>
          </button>
        </li>
      ))}
    </>
  );
};

/*
 * Site header
*/

export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const burgerMenuRef = useRef<HTMLDivElement>(null);
  useOutsideClick(
    burgerMenuRef,
    useCallback(() => setIsDrawerOpen(false), []),
  );

  return (
    <div className="sticky lg:static top-0 navbar bg-green-800 text-black min-h-0 flex-shrink-0 justify-between z-20 shadow-md px-0 sm:px-2">
      <div className="navbar-start w-auto lg:w-1/2">
        <div className="lg:hidden dropdown" ref={burgerMenuRef}>
          <button
            type="button"
            tabIndex={0}
            className={`ml-1 btn btn-ghost ${isDrawerOpen ? "hover:bg-pink-800" : "hover:bg-green-200"}`}
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          {isDrawerOpen && (
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-blue-500 rounded-box w-52"
              onClick={() => setIsDrawerOpen(false)}
            >
              <HeaderMenuLinks />
            </ul>
          )}
        </div>
        <Link href="/" passHref className="hidden lg:flex items-center gap-2 ml-4 mr-6 shrink-0">
          <div className="flex relative w-10 h-10">
            <Image alt="PNT Logo" className="cursor-pointer rounded-full object-cover" fill src="/icononly.png" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold leading-tight"></span>
          </div>
        </Link>
        <ul className="hidden lg:flex lg:flex-nowrap menu menu-horizontal px-1 gap-2">
          <HeaderMenuLinks />
        </ul>
      </div>
      <div className="navbar-end flex-grow mr-4">
        <RainbowKitCustomConnectButton />
      </div>
    </div>
  );
};