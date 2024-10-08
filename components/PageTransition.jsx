"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";


export default function PageTransition({ children }) {
    const pathname = usePathname();
  return (
    <AnimatePresence>
        <motion.div 
        key={pathname} 
        initial={{opacity: 1}} 
        animate={{
            opacity: 0,
            transition: {delay: 1, duration: 1, ease:"easeIn"}
        }} 
        className="h-full w-full fixed top-0 pointer-events-none bg-white z-30 xl:z-40"
        />
            { children }
    </AnimatePresence>
    
  )
}
