import { FC } from "react";
import Btn from "../buttons/Btn";
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
    <div className="p-8 flex-col flex gap-12 rounded-3xl bg-[#FFFFFF]">
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
    </div>
  );
};
