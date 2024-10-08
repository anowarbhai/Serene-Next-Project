"use client";
import Form from "@/components/Form";
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
          <div className="flex flex-col gap-12 xl:flex-row w-full h-full">
            {/* text */}
            <motion.div initial={{opacity: 0, x: -60}} 
              animate={{
                  opacity: 1,
                  x: 0,
                  transition: {delay: 2, duration: 1, ease:"easeInOut"}
              }} className="flex-1 flex flex-col justify-center">
              <h3 className="h3 mb-8 text-center xl:text-left">Contact info</h3>
              {/* Item */}
              <div className="flex flex-col items-center xl:items-start gap-12">
                {/* Items */}
                <div className="flex items-start gap-4">
                  <div className="relative h-[36px] w-[36px]">
                    <Image src="/assets/contact/pin.svg" fill alt=""/>
                  </div>
                  <div className="pt-1 flex-1">
                    <h4 className="h4 mb-2">Address</h4>
                    <p className="leading-relaxed">123/23 Elm St, Suite 56445 <br /> Los Angels CI 545552</p>
                  </div>
                </div>
                {/* End Item */}
                {/* Items */}
                <div className="flex items-start gap-4">
                  <div className="relative h-[36px] w-[36px]">
                    <Image src="/assets/contact/phone.svg" fill alt=""/>
                  </div>
                  <div className="pt-1 flex-1">
                    <h4 className="h4 mb-2">Phone</h4>
                    <div className="pt-1 flex-1">
                      <p>Phone: +88 0172 931 2186</p>
                      <p>Fax: +88 0172 931 2186</p>
                    </div>
                  </div>
                </div>
                {/* End Item */}
                {/* Items */}
                <div className="flex items-start gap-4">
                  <div className="relative h-[36px] w-[36px]">
                    <Image src="/assets/contact/email.svg" fill alt=""/>
                  </div>
                  <div className="pt-1 flex-1">
                    <h4 className="h4 mb-2">Email Address</h4>
                    <p className="pt-1 flex-1">m.anowarbhai@gmail.com</p>
                  </div>
                </div>
                {/* End Item */}
              </div>
            </motion.div>
            {/* form */}
            <motion.div initial={{opacity: 0, x: 60}} 
              animate={{
                  opacity: 1,
                  x: 0,
                  transition: {delay: 2, duration: 1, ease:"easeInOut"}
              }} className="flex-1">
              <div className="bg-[#f0cfbc] w-full max-w-[580px] p-10 gap-4 mx-auto xl:mx-0">
                <h3 className="h3 text-center mb-8">Get in Tuch</h3>
                <Form />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
  )
}
