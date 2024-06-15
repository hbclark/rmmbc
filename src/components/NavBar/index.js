
"use client"
import { useState } from "react";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { twMerge } from "tailwind-merge";
import {animate, motion } from "framer-motion";
import { CiHome } from "react-icons/ci";
import { SiTransmission } from "react-icons/si";
import { IoIosContact } from "react-icons/io";
import { MdOutlineRoundaboutLeft } from "react-icons/md";
import Link from "next/link";



import clsx from "clsx";

// type Props = {};

export default function NavBar() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  

  const navLinks = [
    { id:1,label: "Home", href: "/",icon: <CiHome /> },
    { id:2,label: "Events", href: "/#events",icon: <SiTransmission />},
    { id:3,label: "About Us", href: "/#about",icon: <MdOutlineRoundaboutLeft />},
    { id:4,label: "Contact", href: "/#contact",icon: <IoIosContact />},
  ];
 
  const fadeInAnimationVariants = {
    initial: { opacity: 0 },
    animate: (index)=>(
      { opacity: 1,
        transition:{
          duration: 0.5,
          delay:  index*0.05,
          ease: "easeInOut"
        }
       })
    }
    
  


  return (
    <header className="fixed w-full top-0 lg:px-40 text-black bg-gray-100 z-20">
      <nav className="flex  sm:px-0 px-8 justify-between pb-2 pt-4 mt-2 ">
       
          <section className=" flex items-center gap-4 ">
            {/* Menu */}
            <FiMenu
              className="fixed top-6 right-6 text-3xl cursor-pointer lg:hidden z-70"
              onClick={() => {
                setIsSideMenuOpen(true);
              }}
            />
            {/* Logo */}
            <h1 className="flex sm:px-5">
              <Link href="/"
                className="w-10 h-10">
                 
                <Image src="/images/shots/icon.jpg" alt="A2Z Logo" width={30} height={30} 
              /></Link> 
            </h1>
            
          </section>
          <div className="flex  justify-between  gap-4">
          {navLinks.map((link) => (
            <Link
              href={link.href}
              key={link.id}
              className="hidden lg:block pb-[2px] text-black font-bold
              hover:text-gray-800 hover:-translate-y-[2px]
              hover:underline
              transition-colors duration-300 ease-in-out"
              
            >
              {link.label}
            </Link>
          ))}
        </div>
        </nav>
        {/* Sidebar Mobile Menu */}
        <div
          className={twMerge(clsx(
            "fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0  translate-x-full transition-transform duration-300 ease-in-out z-40",
            isSideMenuOpen && "translate-x-0"
          ))}
        >
          <section className="text-black bg-white flex-col absolute right-0 top-0 h-screen w-56 p-8 gap-8 z-50 flex">
            <IoCloseOutline
              className="absolute top-4 right-6 text-3xl cursor-pointer h-10 w-10"
              onClick={() => {
                setIsSideMenuOpen(false);
              }}
            />
            
            <Link href="/"
                className="absolute left-6 top-5 w-9 h-9">
                 
                <Image src="/images/shots/icon.jpg" alt="A2Z Logo" width={30} height={30} className="mt-1"
              /></Link> 
            <ul className="mt-14 flex flex-col gap-2 ">
            
            {navLinks.map((link,index) => (
              <motion.li key={link.id} className = "flex py-2 text-black"
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              custom={index}
              
              >
                <span className="w-3 h-3 mr-2 mt-1">{link.icon}</span>
                <a href={link.href} className="text-xl">{link.label}</a>
                
              </motion.li>
            ))}</ul>
          </section>
        </div>
        
      
      <hr className="lg:mx-24" />
    </header>
  );
}
