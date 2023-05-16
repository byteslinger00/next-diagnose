"use client";

import React, { useContext } from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
  Input,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { BellIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";

import ProfileMenu from "./ProfileMenu";
import NavList from "./NavList";
import { useMainContext } from "@/context";

export default function MyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
  const { signInOpen, setSignInOpen, currentUser } = useMainContext();

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
      <div className="flex flex-wrap items-center justify-between gap-y-4 text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          Diagnosiaziendale
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="ml-auto flex gap-1 md:mr-4">
          <IconButton variant="text" color="blue-gray">
            <Cog6ToothIcon className="h-4 w-4" />
          </IconButton>
          <IconButton variant="text" color="blue-gray">
            <BellIcon className="h-4 w-4" />
          </IconButton>
        </div>
        <div className="relative flex w-full gap-2 md:w-max">
          <Input
            type="search"
            label="Type here..."
            className="pr-20"
            containerProps={{
              className: "min-w-[288px]",
            }}
          />
          <Button size="sm" className="!absolute right-1 top-1 rounded">
            Search
          </Button>
        </div>
        {currentUser === null ? (
          <div className="hidden gap-1 lg:flex ml-2">
            <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block"
            >
              <span>SignUp</span>
            </Button>
            <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block"
              onClick={() => setSignInOpen(!signInOpen)}
            >
              <span>Login</span>
            </Button>
          </div>
        ) : (
          <ProfileMenu />
        )}
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <Button variant="gradient" size="sm" fullWidth className="mb-2">
          <span>SignUp</span>
        </Button>
        <Button variant="gradient" size="sm" fullWidth className="mb-2">
          <span>Login</span>
        </Button>
      </Collapse>
    </Navbar>
  );
}
