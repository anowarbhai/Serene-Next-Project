
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoCloseOutline } from "react-icons/io5";
import Social from "./Social";

const links = [
  {
      href: "/",
      name: "Home"
  },
  {
      href: "/about",
      name: "About"
  },
  {
      href: "/treatments",
      name: "Treatments"
  },
  {
      href: "/contact",
      name: "Contact"
  },
]

export default function MobileNav({setMobileNav}) {
  const pathname = usePathname();
  return (
    <div className="flex flex-col justify-between h-full p-8">
        <div className="cursor-pointer text-white" onClick={()=> setMobileNav(false)}>
            <IoCloseOutline className="text-4xl" />
        </div>
        <div className="flex flex-col gap-10 text-white text-xl">
            {links.map((link, index) =>{
                return <Link href={link.href} key={index} className={`${pathname === link.href && "border-b-2 border-accent" } uppercase max-w-max mx-auto`}>{link.name}</Link>
            })}
        </div>
        <Social containerStyles="flex gap-4 justify-center items-center" IconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-white text-base transition-all hover:bg-accent hover:text-primary hover:transition-all duration-500" />
    </div>
  )
}
