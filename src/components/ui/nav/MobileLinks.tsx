import SplitText from "../../../utils/SplitText";
import { motion } from "framer-motion";
import { useGlobalContext } from "../../../context/GlobalContext";
import Btn from "../buttons/Btn";

const MobileLinks = () => {
  const {
    isMobileNavOpen,
    setIsMobileNavOpen,
    targetSupportDiv,
    targetAboutDiv,
    targetBlogDiv,
  } = useGlobalContext();

  const links = [
    {
      name: "Home",
      link: "/",
      action: () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      },
    },
    {
      name: "About",
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
      name: "Blog",
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
      name: "Support",
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
    <motion.div
      initial={{
        x: "-100vw",
      }}
      animate={isMobileNavOpen ? { x: 0 } : { x: "-100vw" }}
      transition={{
        duration: 0.083,
        ease: "easeInOut",
        type: "tween",
      }}
      className={`fixed z-[9998] inset-0 w-screen h-screen flex items-center justify-center`}
    >
      <div className="w-full h-full flex items-center justify-center gap-8 bg-white/50 backdrop-blur-2xl flex-col ">
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.075, duration: 0.35 },
            },
          }}
          className="space-y-4 text-center "
        >
          {links.map((link, i) => (
            <motion.li
              key={i}
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              className="text-center cursor-pointer "
              onClick={() => {
                link.action();
                setIsMobileNavOpen(!isMobileNavOpen);
              }}
            >
              <SplitText text={link.name} />
            </motion.li>
          ))}
        </motion.ul>
        <Btn button_type="default" />
      </div>
    </motion.div>
  );
};

export default MobileLinks;
