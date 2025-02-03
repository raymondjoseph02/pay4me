import { useState } from "react";
import pay_4_me_logo_text from "../../../assets/images/pay4me_logo.png";
import pay_4_me_logo from "../../../assets/images/logo.png";
import Btn from "../buttons/Btn";
import { motion } from "framer-motion";
// import Headroom from "react-headroom";
const links = [
  {
    name: "home",
    link: "/",
  },
  {
    name: "about",
    link: "/about",
  },
  {
    name: "blog",
    link: "/blog",
  },
  {
    name: "support",
    link: "/support",
  },
];
const NavBar = () => {
  const [isActive, setIsActive] = useState("home");
  return (
    <nav className="rounded-[2.75rem] justify-between flex bg-[#242323] pl-4 pr-2 py-2 items-center w-[70%] mx-auto max-w-[60.375rem]  fixed right-1/2 translate-1/2  z-30">
      <div className="">
        <img
          src={pay_4_me_logo_text}
          alt="pay4me logo"
          className="w-[8rem] hidden xl:flex"
        />
        <img src={pay_4_me_logo} alt="" className=" flex xl:hidden" />
      </div>
      <div>
        <ul className="  text-white gap-8 capitalize hidden lg:flex">
          {links.map((link, i) => {
            return (
              <div
                onClick={() => setIsActive(link.name)}
                className="relative cursor-pointer"
                key={i}
              >
                <li className="font-roboto">{link.name}</li>
                {isActive === link.name && (
                  <motion.div
                    id="underline"
                    layoutId="underline"
                    className="w-[80%] absolute mx-auto bg-[#80b639] right-1/2 transform translate-x-1/2 h-0.5"
                  ></motion.div>
                )}
              </div>
            );
          })}
        </ul>
      </div>
      <div className="hidden lg:flex">
        <Btn button_type="primary_button" />
      </div>
      <div className="flex gap-2  flex-col pr-4 lg:hidden">
        <div className="w-6 h-1 bg-[#80b639] inline-block"></div>
        <div className="w-6 h-1 bg-[#80b639] inline-block"></div>
        <div className="w-6 h-1 bg-[#80b639] inline-block"></div>
      </div>
    </nav>
  );
};

export default NavBar;
