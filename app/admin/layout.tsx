'use client'

import { Breadcrumbs, Card } from "@material-tailwind/react";
import SideBar from "@/components/layout/SideBar";
export default function RootLayout(props: { children: React.ReactNode }) {
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
        <Card className="mt-6">{props.children}</Card>
      </div>
    </div>
  );
}
