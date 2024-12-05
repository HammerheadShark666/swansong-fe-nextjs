"use client";
import { useState } from "react";
//import Navbar from "./navbar";
import NavigationBar from "./nav-bar"
import Sidebar from "./sidebar";

export default function Navigation() { 
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavigationBar toggle={toggle} />
    </>
  );
}; 