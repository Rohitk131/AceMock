import React, { ReactNode } from "react";
import Navbar from "@/components/Navbar";
const MainLayout = ({children}:{children: ReactNode}) => {
  return <div>
    <Navbar/>
    {children}
    </div>;
};

export default MainLayout;
