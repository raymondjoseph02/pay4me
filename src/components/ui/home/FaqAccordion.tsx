import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa";

const FaqAccordion = () => {
  const [isActive, setIsActive] = useState<number | null>(1);

  const openAccordion = (index: number) => {
    setIsActive(index);
  };

  return (
    <div className="h-full space-y-4 md:p-10 p-4 ">
      {/* FAQ Item */}
      <div className="border-b-[0.7px] border-b-[#000000] pb-4 flex gap-4 flex-col">
        <div
          className="cursor-pointer pt-4 px-4  flex justify-between items-center"
          onClick={() => openAccordion(1)}
        >
          <p className="text-base md:text-xl font-bold">
            What is the Pay4Me App?
          </p>
          <motion.span
            initial={{ rotate: 0 }}
            animate={isActive === 1 ? { rotate: 45 } : { rotate: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <FaPlus className="text-sm md:text-lg" />
          </motion.span>
        </div>

        {/* Animated Content */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={
            isActive === 1
              ? { height: "auto", opacity: 1 }
              : { height: 0, opacity: 0 }
          }
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden px-4 "
        >
          <p className="  px-2 text-[#3a3838ce] text-base ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
            aspernatur obcaecati veniam? Fugit a minus itaque illum eligendi
            praesentium alias autem nostrum.
          </p>
        </motion.div>
      </div>
      <div className="border-b-[0.7px] border-b-[#000000] pb-4 flex gap-4 flex-col">
        <div
          className="cursor-pointer pt-4 px-4  flex justify-between items-center"
          onClick={() => openAccordion(2)}
        >
          <p className="text-base md:text-xl font-bold">
            What is the Pay4Me App?
          </p>
          <motion.span
            initial={{ rotate: 0 }}
            animate={isActive === 2 ? { rotate: 45 } : { rotate: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {" "}
            <FaPlus className="text-sm md:text-lg" />
          </motion.span>{" "}
        </div>

        {/* Animated Content */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={
            isActive === 2
              ? { height: "auto", opacity: 1 }
              : { height: 0, opacity: 0 }
          }
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden px-4 "
        >
          <p className="  px-2 text-[#3a3838ce] text-base ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
            aspernatur obcaecati veniam? Fugit a minus itaque illum eligendi
            praesentium alias autem nostrum.
          </p>
        </motion.div>
      </div>
      <div className="border-b-[0.7px] border-b-[#000000] pb-4 flex gap-4 flex-col">
        <div
          className="cursor-pointer pt-4 px-4  flex justify-between items-center"
          onClick={() => openAccordion(3)}
        >
          <p className="text-base md:text-xl font-bold">
            What is the Pay4Me App?
          </p>
          <motion.span
            initial={{ rotate: 0 }}
            animate={isActive === 3 ? { rotate: 45 } : { rotate: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {" "}
            <FaPlus className="text-sm md:text-lg" />
          </motion.span>
        </div>

        {/* Animated Content */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={
            isActive === 3
              ? { height: "auto", opacity: 1 }
              : { height: 0, opacity: 0 }
          }
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden px-4 "
        >
          <p className="  px-2 text-[#3a3838ce] text-base ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
            aspernatur obcaecati veniam? Fugit a minus itaque illum eligendi
            praesentium alias autem nostrum.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default FaqAccordion;
