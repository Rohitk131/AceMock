import React, { ReactNode } from "react";
import Navbar from "@/components/Navbar";

const MainLayout = ({children}:{children: ReactNode}) => {
  return <div className="relative">
 
    <Navbar/>
    {children}
    </div>;
};

export default MainLayout;
