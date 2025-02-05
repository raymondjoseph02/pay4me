import Barge from "../Barge";
import Btn from "../buttons/Btn";
import Students from "./Students";
import hero_square from "../../../assets/images/Hero_square.png";
import girl_with_phone from "../../../assets/images/girl_operating_phone.png";
import techstar_card from "../../../assets/images/techstar_card.png";
import rating_card from "../../../assets/images/rating_card.png";
import wallet_card from "../../../assets/images/wallet_card.png";
import across_logo from "../../../assets/images/across.png";
import power_logo from "../../../assets/images/power.png";
import prodigy_logo from "../../../assets/images/prodigy.png";
import techstars_logo from "../../../assets/images/techstars.png";
import stirpe_logo from "../../../assets/images/stripe.png";
import paystack_logo from "../../../assets/images/paystack.png";
import { motion } from "framer-motion";
const partners = [
  {
    logo: across_logo,
  },
  {
    logo: power_logo,
  },
  {
    logo: prodigy_logo,
  },
  {
    logo: techstars_logo,
  },
  {
    logo: stirpe_logo,
  },
  {
    logo: paystack_logo,
  },
];
const HeroSection = () => {
  return (
    <section
      style={{ backgroundImage: `url(${hero_square})` }}
      className="bg-no-repeat bg-center bg-cover mx-auto flex items-center  lg:pt-[14.9rem] pt-[10rem] flex-col gap-17 md:gap-20"
    >
      <div className="flex flex-col gap-[27px] items-center md:w-[70%] px-5">
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.085 + 0.99,
            ease: "easeIn",
            duration: 0.6,
          }}
        >
          <Barge />
        </motion.div>
        <div className="flex flex-col gap-6 items-center">
          <div className="flex flex-col gap-4">
            <motion.h1
              initial={{ opacity: 0, y: 90 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.64,
                ease: "easeIn",
                delay: 0.085,
              }}
              className="cabiet_font font-bold text-[1.8rem] md:text-[3rem] lg:text-[4rem]  leading-[120%] text-[#2F2F2F] text-center"
            >
              Reliable Payment Solutions for International Education
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.085 + 0.84,
                ease: "easeIn",
                duration: 0.6,
              }}
              className="text-[#666565] text-center text-base  leading-[28px] md:w-[66ch] mx-auto"
            >
              The easiest and fastest way to pay tuition and fees to educational
              institutions, businesses, and government agencies worldwide.
            </motion.p>
          </div>
          <div className="flex gap-2 md:gap-6">
            <Btn button_type="primary_button" />
            <Btn button_type="watch_demo_button" />
          </div>
        </div>
      </div>
      <div className=" items-center flex gap-4 flex-col md:flex-row">
        <Students />
        <p className="text-lg  leading-[26px] text-[#666565] font-normal">
          Trusted by 3k+ Students Globally
        </p>
      </div>
      <motion.div
        animate={{ y: [-5, 5] }} // Creates the oscillation effect
        transition={{
          duration: 1.9, // Smooth, slow movement
          ease: "easeInOut", // Eases in and out smoothly
          repeat: Infinity, // Runs forever
          repeatType: "reverse", // Makes it move back and forth
        }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          // animate={{}}
          viewport={{ amount: 0.25, once: true }}
          transition={{
            delay: 0.85,
            ease: "easeIn",
            duration: 0.9,
          }}
          className=" relative"
        >
          <img src={girl_with_phone} alt="" className="md:w-[70rem] w-full" />
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.34,
              ease: "easeInOut",
              duration: 0.63,
            }}
            viewport={{ once: true, amount: 0.2 }}
            className="  top-6 lg:top-[9.03rem] left-5 sm:left-10 md:left-[9.3rem]  absolute"
          >
            <img
              src={techstar_card}
              alt="techstar logo"
              className="w-[130px] md:w-full"
            />
          </motion.div>
          <motion.div
            initial={{ y: 68, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.64,
              ease: "easeInOut",
              duration: 0.63,
            }}
            viewport={{ once: true, amount: 0.2 }}
            className=" bottom-[6rem] left-[2rem] md:bottom-[12.03rem] md:left-[3.5rem] lg:left-[6.3rem] lg:bottom-[14rem]  absolute"
          >
            <img src={rating_card} alt="" className="w-[130px] md:w-full" />
          </motion.div>
          <motion.div
            initial={{ y: 68, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.64,
              ease: "easeInOut",
              duration: 0.63,
            }}
            viewport={{ once: true, amount: 0.2 }}
            className=" absolute right-1 top-[calc(50%-40px)] md:top-[calc(50%-120px)]"
          >
            <img src={wallet_card} alt="" className="w-[130px] md:w-full" />
          </motion.div>
        </motion.div>
      </motion.div>
      <div className=" w-full md:px-30 flex-col flex gap-4">
        <p className=" w-full text-center text-base font-normal uppercase text-[#848484] leading-[28px]">
          Leading Brands Partner with us
        </p>
        <div className="flex  justify-center md:justify-center  w-full flex-wrap items-center">
          {partners.map((partner, index) => (
            <img
              src={partner.logo}
              alt=""
              key={index}
              className="w-[90px] md:w-[110px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
