import { FC } from "react";
import Btn from "../buttons/Btn";
import { motion } from "framer-motion";
interface FeatureCardProps {
  image: string;
  title: string;
  content: string;
}
export const FeatureCard: FC<FeatureCardProps> = ({
  image,
  title,
  content,
}) => {
  return (
    <motion.div
      initial={{
        y: 40,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      viewport={{
        once: true,
        amount: 0.4,
      }}
      transition={{
        ease: "easeInOut",
        duration: 0.43,
      }}
      className="p-8 flex-col flex gap-12 rounded-3xl bg-[#FFFFFF]"
    >
      <div>
        <img src={image} alt="" />
      </div>
      <div className="flex-col flex gap-8 lg:w-[291px]">
        <h4 className="text-[#2F2F2F] text-[1.37rem] font-bold capitalize">
          {title}
        </h4>
        <p className="text-sm text-[#7D7D7D] leading-[24px]">{content}</p>
      </div>
      <div>
        <Btn button_type="default" />
      </div>
    </motion.div>
  );
};
