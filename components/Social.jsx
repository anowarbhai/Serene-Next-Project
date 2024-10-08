import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const socials = [
  {icon: <FaFacebookF /> , path: ""},
  {icon: <FaLinkedinIn />, path: ""},
  {icon: <FaInstagram />, path: ""},
  {icon: <FaTwitter />, path: ""},
];

export default function Social({containerStyles, IconStyles}) {
  return (
      <div className={containerStyles}>
        {socials.map((item, index) => {
          return (
            <Link key={index} href={item.path} className={IconStyles}>
            {item.icon}
            </Link>
          );
        })}
      </div>
  )
}
