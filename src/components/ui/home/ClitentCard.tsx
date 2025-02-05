import { FC } from "react";
interface ClitentCardProps {
  name: string;
  image: string;
  occupation: string;
}
const ClitentCard: FC<ClitentCardProps> = ({ name, image, occupation }) => {
  return (
    <div className="rounded-2xl mx-2  h-[23.439rem] overflow-hidden relative ">
      <img src={image} alt={name} className="w-full h-full object-cover" />
      <div className="absolute bottom-5 mx-5">
        <p className="text-[#FFFFFF] text-2xl font-normal">{name}</p>
        <p className="text-sm leading-[22px] text-[#EBEBEB] ">{occupation}</p>
      </div>
    </div>
  );
};

export default ClitentCard;
