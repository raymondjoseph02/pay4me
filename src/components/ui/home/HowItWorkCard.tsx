import { motion } from "framer-motion";
interface HowItWorkCardProps {
  step: number;
  step_title: string;
  step_content: string;
  step_image: string;
}
const HowItWorkCard: React.FC<HowItWorkCardProps> = ({
  step,
  step_title,
  step_content,
  step_image,
}) => {
  return (
    <motion.div
      initial={{}}
      viewport={{}}
      className="p-8 gap-12 rounded-3xl flex flex-col bg-[#FFFFFF] border-[#E0E0E0] border-[0.5px]"
    >
      <div className="flex-col flex gap-12">
        <p className="text-xl font-medium  eading-[28px]">{step}</p>
        <div className="flex flex-col gap-8">
          <h5 className="leading-[28px] font-bold text-lg lg:text-2xl text-[#242323]">
            {step_title}
          </h5>
          <p className="text-base  leading-[24px] font-normal text-[#7D7D7D] lg:w-[36ch]">
            {step_content}
          </p>
        </div>
      </div>
      <div className="flex items-center  justify-center">
        <img src={step_image} alt={step_title} loading="lazy" />
      </div>
    </motion.div>
  );
};

export default HowItWorkCard;
