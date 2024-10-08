"use client";

import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";

// import { CursorContext } from '@/components/CursorContext';
import { motion } from 'framer-motion';
import { useState } from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import Social from "./Social";


function Header() {
    // const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext);
    const [mobileNav, setMobileNav] = useState(false);
  return (
    <header className="pb-6 xl:pb-[50px] fixed z-40 w-full  bg-accent-100 xl:bg-transparent">
      <div className="bg-secondary-100 mb-6 xl:mb-[50px] xl:h-[50px] py-4 xl:py-0">
        <div className="container mx-auto h-full">
          <div className="flex items-center justify-between h-full">
            <motion.div className="flex flex-col lg:flex-row h-full items-center gap-2 xl:gap-6 w-full xl:w-auto xl:justify-normal">
              <div className="flex justify-center items-center gap- text-white">
                <FaPhoneAlt />
                <span>+88 0172 9312 186</span>
              </div>
              <div className="flex justify-center items-center gap-2 text-white">
                <FaEnvelope />
                <span>m.anowarbhai@gmail.com</span>
              </div>
            </motion.div>
            <div className="hidden xl:block">
              <Social containerStyles="flex gap-3 justify-center items-center" IconStyles="w-9 h-9 border border-white hover:border-accent rounded-full flex justify-center items-center text-white text-base transition-all hover:bg-accent hover:text-primary hover:transition-all duration-500" />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex items-center justify-between px-6">
        <div>
          <Link href="/">
            <Image src="/assets/logo.svg" width="120" height="44" priority alt=""></Image>
          </Link>
        </div>
        <div className="xl:hidden cursor-pointer" onClick={()=> setMobileNav(!mobileNav)}>
          <AiOutlineMenu className="text-3xl text-primary" />
        </div>
        <motion.div className="fixed top-0 right-0 bg-primary w-[300px] z-40 bottom-0 xl:hidden" 
        initial={{right:"-100%"}}
        animate={{right: mobileNav ? 0 : "-100%"}}
        >
          <MobileNav setMobileNav={setMobileNav} />
        </motion.div>
        <div className="hidden xl:block">
          <Nav />
        </div>
      </div>
    </header>
  )
}

export default Header