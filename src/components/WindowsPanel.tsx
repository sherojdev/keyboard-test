import React from "react";
import { Layout } from "antd";
import WindowsNavbar from "./WindowsNavbar";
import WindowsContent from "./WindowsContent";
import WindowsFooter from "./WindowsFooter";

const Navbar: React.FC = () => {

  const currentYear = new Date().getFullYear();

  return (
    <Layout className="design 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:justify-evenly xl:flex xl:flex-col xl:justify-center xl:justify-evenly lg:flex lg:flex-col lg:justify-center lg:justify-evenly md:flex md:flex-col md:justify-center md:justify-evenly sm:flex sm:flex-col sm:justify-center sm:justify-evenly flex flex-col justify-center justify-evenly 2xl:h-full 2xl:w-full xl:h-full xl:w-full lg:h-full lg:w-full md:h-full md:w-full sm:h-full sm:w-full h-full w-full">
      <WindowsNavbar />
      <WindowsContent />
      <WindowsFooter />
      <p className="2xl:text-[18px] xl:text-[16px] lg:text-[14px] md:text-[12px] sm:text-[10px] text-[8px] 2xl:text-center xl:text-center lg:text-center md:text-center sm:text-center text-center 2xl:text-[#10100f] xl:text-[#10100f] lg:text-[#10100f] md:text-[#10100f] sm:text-[#10100f] text-[#10100f] 2xl:m-2 xl:m-2 lg:m-1 md:m-1 sm:m-1 m-1 2xl:p-1 xl:p-1 lg:p-1 md:p-1 sm:p-1 p-1 2xl:subpixel-antialiased xl:subpixel-antialiased lg:subpixel-antialiased md:subpixel-antialiased sm:subpixel-antialiased antialiased 2xl:cursor-default xl:cursor-default 2xl:cursor-default xl:cursor-default lg:cursor-default md-cursor-default sm:cursor-default cursor-default">Keyboard-Test ©{currentYear} Presented and crafted by <b>Rohit</b> with &#x2764;</p>
    </Layout>
  );
};

export default Navbar;
