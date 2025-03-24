import React, { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import NeatBackground from "@/components/NeatBackground";
const MainLayout = ({children}:{children: ReactNode}) => {
  return <div className="relative">
      <NeatBackground />
    <Navbar/>
    {children}
    </div>;
};

export default MainLayout;
