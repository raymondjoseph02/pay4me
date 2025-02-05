import { useState } from "react";
import pay_4_me_logo_text from "../../../assets/images/pay4me_logo.png";
import pay_4_me_logo from "../../../assets/images/logo.png";
import Btn from "../buttons/Btn";
import { motion } from "framer-motion";
// import Headroom from "react-headroom";
import { useGlobalContext } from "../../../context/GlobalContext";

const NavBar = () => {
  const [isActive, setIsActive] = useState("home");
  const {
    setIsMobileNavOpen,
    isMobileNavOpen,
    targetBlogDiv,
    targetAboutDiv,
    targetSupportDiv,
  } = useGlobalContext();

  const links = [
    {
      name: "home",
      link: "/",
      action: () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      },
    },
    {
      name: "about",
      link: "/about",
      action: () => {
        if (targetAboutDiv.current) {
          targetAboutDiv.current.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      },
    },
    {
      name: "blog",
      link: "/blog",
      action: () => {
        if (targetBlogDiv.current) {
          targetBlogDiv.current.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      },
    },
    {
      name: "support",
      link: "/support",
      action: () => {
        if (targetSupportDiv.current) {
          targetSupportDiv.current.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      },
    },
  ];

  return (
    <nav className="min-h-[55px] rounded-[2.75rem] justify-between flex bg-[#242323] pl-4 pr-2 py-2 items-center w-[70%] mx-auto max-w-[60.375rem]  fixed right-1/2 translate-1/2  z-100">
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
                onClick={() => {
                  link.action();
                  setIsActive(link.name);
                }}
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
      <div
        onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
        className="items-center mr-4   size-[24px] gap-1   flex justify-center  flex-col  lg:hidden  cursor-pointer relative z-50 "
      >
        <motion.div
          initial={{
            rotate: 0,
          }}
          animate={isMobileNavOpen ? { rotate: "45deg" } : { rotate: 0 }}
          className="w-full h-0.5 bg-[#80b639] inline-block"
        ></motion.div>
        <div
          className={`w-full h-0.5 bg-[#80b639]   ${
            isMobileNavOpen ? "hidden" : "inline-block"
          }`}
        ></div>
        <motion.div
          initial={{
            rotate: 0,
            y: 0,
          }}
          animate={isMobileNavOpen ? { rotate: "-45deg" } : { rotate: 0 }}
          className={`${
            isMobileNavOpen ? "absolute" : "static"
          } w-full h-0.5 bg-[#80b639] inline-block`}
        ></motion.div>
      </div>
    </nav>
  );
};

export default NavBar;
