"use client";
import StatsItem from "@/components/StatsItem";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <motion.section 
        initial={{opacity: 0}} 
        animate={{
            opacity: 1,
            transition: {delay: 2} }}
        className="flex items-center min-h-screen overflow-x-hidden">
        <div className="container mx-auto flex items-center pt-48 pb-12 xl:pt-32 xl:pb-0">
            <div className="w-full h-full flex flex-col xl:flex-row justify-between items-center">
              {/* Image */}
              <motion.div 
              initial={{opacity: 0, x: -60}} 
              animate={{
                  opacity: 1,
                  x: 0,
                  transition: {delay: 2, duration: 1, ease:"easeInOut"}
              }} className="relative w-[304px] h-[423px] xl:w-[384px] xl:h-[534px] mb-6 xl:mb-0">
                <Image src="/assets/about/img.jpg" alt="" fill quality="100" priority className="object-contain" />
              </motion.div>
              {/* Text */}
              <motion.div 
              initial={{opacity: 0, x: 60}} 
              animate={{
                  opacity: 1,
                  x: 0,
                  transition: {delay: 2, duration: 1, ease:"easeInOut"}
              }} className="flex flex-col items-start xl:max-w-[650px] text-center xl:text-left mx-auto xl:mx-0">
                <h2 className="h2 mb-6 mx-auto max-w-[540px] xl:max-w-none">Committed to Your Skin's Health and Beauty</h2>
                <p className="lead max-w-[600px] mx-auto xl:mx-0">Tailored skincare solutions for a healthy complexion, offering customized care for radiant skin</p>
                {/* Item */}
                <div className="grid grid-cols-3 gap-[30px] mb-14 mx-auto xl:mx-0">
                  <div>
                    <StatsItem countNum={13} text="Years of market" />
                  </div>
                  <div>
                    <StatsItem  countNum={35} countText="k+" text="Happy Client" />
                  </div>
                  <div>
                  <StatsItem  countNum={40} countText="+" text="Treatments" />
                  </div>
                </div>
                <button className="btn mx-auto xl:mx-0"><Link href="/contact">Contact Us</Link></button>
              </motion.div>
            </div>
        </div>
      </motion.section>
  )
}
