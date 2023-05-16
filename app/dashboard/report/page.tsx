'use client'

import {
  Breadcrumbs,
  Card,
} from "@material-tailwind/react";

import SideBar from "@/components/layout/SideBar";
import CheckUp from "@/components/landing/Checkup";
import checkups from '@/resource/CheckUps';
import Pagination from "@/components/common/Pagination";


export default function Dashboard() {
  return (
    <div className="flex flex-row">
      <SideBar />
      <div className="main grow">
        <Breadcrumbs>
          <a href="#" className="opacity-60">
            Docs
          </a>
          <a href="#" className="opacity-60">
            Components
          </a>
          <a href="#">Breadcrumbs</a>
        </Breadcrumbs>
        <Card className="mt-6">
          <h1>CheckUps!</h1>
          <div className="mx-auto">
        <div className="mx-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3 mt-3 px-3">
          {checkups.map((item, index) => (
            <CheckUp checkup={item} key={index} />
          ))}
          {checkups.map((item, index) => (
            <CheckUp checkup={item} key={index} />
          ))}
        </div>
        <Pagination />        
      </div>
        </Card>
      </div>
    </div>
  );
}
