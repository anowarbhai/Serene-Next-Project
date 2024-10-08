"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function page() {
  return (
    <motion.section 
        initial={{opacity: 0}} 
        animate={{
            opacity: 1,
            transition: {delay: 2} }}
        className="flex items-center min-h-screen overflow-x-hidden">
          <div className="container mx-auto flex items-center pt-48 pb-12 xl:pt-32 xl:pb-0">
            <div className="flex items-center justify-between w-full h-full">
              {/* text */}
              <motion.div initial={{opacity: 0, x: -60}} 
              animate={{
                  opacity: 1,
                  x: 0,
                  transition: {delay: 2, duration: 1, ease:"easeInOut"}
              }} className="flex flex-col items-start xl:max-w-[650px] text-center xl:text-left">
                <h2 className="h2 mb-6 mx-auto max-w-[540px] xl:max-w-none">Indulge in  our Luxurious Treatments</h2>
                <p className="lead max-w-xl mx-auto xl:mx-0">Tailored skincare solutions for a healthy complexion, offering customized care for radiant skin</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] mb-6">
                  {/* Item */}
                  <div className="flex-1 flex flex-col justify-center items-center xl:items-start">
                    <div className="flex items-center gap-[12px] mb-2">
                      <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px]  rounded-bl-[28px]  rounded-br-[22px]  rounded-tr-[4px]"></div>
                      <h3 className="text-[22px]">Classic Facial</h3>
                    </div>
                    <p className="pl-6 text-[15px]">Deep cleansing, exfoliation and hydration for a refreshed complexion</p>
                  </div>
                  {/* End Item */}
                  {/* Item */}
                  <div className="flex-1 flex flex-col justify-center items-center xl:items-start">
                    <div className="flex items-center gap-[12px] mb-2">
                      <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px]  rounded-bl-[28px]  rounded-br-[22px]  rounded-tr-[4px]"></div>
                      <h3 className="text-[22px]">Chemical Peel</h3>
                    </div>
                    <p className="pl-6 text-[15px]">Deep cleansing, exfoliation and hydration for a refreshed complexion</p>
                  </div>
                  {/* End Item */}
                  {/* Item */}
                  <div className="flex-1 flex flex-col justify-center items-center xl:items-start">
                    <div className="flex items-center gap-[12px] mb-2">
                      <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px]  rounded-bl-[28px]  rounded-br-[22px]  rounded-tr-[4px]"></div>
                      <h3 className="text-[22px]">Eyebrow Waxing/Shaping</h3>
                    </div>
                    <p className="pl-6 text-[15px]">Deep cleansing, exfoliation and hydration for a refreshed complexion</p>
                  </div>
                  {/* End Item */}
                  {/* Item */}
                  <div className="flex-1 flex flex-col justify-center items-center xl:items-start">
                    <div className="flex items-center gap-[12px] mb-2">
                      <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px]  rounded-bl-[28px]  rounded-br-[22px]  rounded-tr-[4px]"></div>
                      <h3 className="text-[22px]">HydraFacial</h3>
                    </div>
                    <p className="pl-6 text-[15px]">Deep cleansing, exfoliation and hydration for a refreshed complexion</p>
                  </div>
                  {/* End Item */}
                </div>
                <button className="btn mx-auto xl:mx-0">Discover More</button>
              </motion.div>
              {/* image */}
              <motion.div 
              initial={{opacity: 0, x: 60}} 
              animate={{
                  opacity: 1,
                  x: 0,
                  transition: {delay: 2, duration: 1, ease:"easeInOut"}
              }} className="hidden xl:flex w-[384px] h-[534px] relative">
                <Image src="/assets/treatments/img.jpg" alt="" fill quality="100" priority className="object-contain" />
              </motion.div>
            </div>
          </div>
      </motion.section>
  )
}
