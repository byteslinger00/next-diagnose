'use client'

import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
  } from "@material-tailwind/react";
   
  export default function LandingImg() {
    return (
      <Card
        shadow={false}
        className="relative grid h-[40rem] w-full items-end justify-center overflow-hidden text-center rounded-none"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 w-full rounded-none bg-[url('/images/wallpaper/slider-1.jpg')] bg-cover bg-center"
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12">
          <Typography
            variant="h2"
            color="white"
            className="mb-6 font-medium leading-[1.5]"
          >
            How we design and code open-source projects?
          </Typography>
          <Typography variant="h5" className="mb-4 text-gray-400">
            Candice Wu
          </Typography>
          <Avatar
            size="xl"
            variant="circular"
            alt="candice wu"
            className="border-2 border-white"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
        </CardBody>
      </Card>
    );
  }