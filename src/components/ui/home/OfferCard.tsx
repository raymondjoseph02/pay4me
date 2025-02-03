import supper_fast_icon from "../../../assets/images/super_fast.png";
import dollar_icon from "../../../assets/images/dollars.png";
import yellow_wings from "../../../assets/images/yellow_wings.png";
import blue_wings from "../../../assets/images/blue_wing.png";
import uni_lag from "../../../assets/images/uni_lag.png";
import uni_ghana from "../../../assets/images/uin_ghana.png";
import byu from "../../../assets/images/byu.png";
import stanford from "../../../assets/images/stanford_uni.png";

interface OfferCardProps {
  card_type: "yellow" | "blue";
}
const cards_type = {
  yellow: {
    title: "Super fast tuition and school fees payments",
    sub_text:
      "Seamlessly pay local and international educational expenses using our fast and convenient online payments platform from the comfort of your home.",
  },
  blue: {
    title: "Pay for SEVIS, WES, Visa Applications & More",
    sub_text:
      "We help you get closer to your study abroad and relocation goals faster by promptly completing your payment orders for credential evaluation, immigration, and visa purposes.",
  },
};
const OfferCard: React.FC<OfferCardProps> = ({ card_type }) => {
  const { title, sub_text } = cards_type[card_type];
  return (
    <div
      className={` p-5 md:p-10 flex-col flex gap-20 rounded-3xl border-[#EFEFF9] border ${
        card_type === "yellow" ? "bg-[#FFFBE4]" : " bg-[#E7F8FF]"
      } w-fit relative`}
    >
      <div className="flex flex-col gap-8  max-w-[23.16rem]">
        <div>
          {card_type === "yellow" ? (
            <img src={supper_fast_icon} alt="" />
          ) : (
            <img src={dollar_icon} alt="" />
          )}
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="font-bold text-xl md:text-[2rem] text-[#2F2F2F]">
            {title}
          </h3>
          <p className="text-base font-normal leading-[24px] text-[#7D7D7D]">
            {sub_text}
          </p>
        </div>
      </div>
      <div className="flex-col flex gap-10">
        <div className="flex gap-12 items-center">
          <img src={stanford} alt="" />
          <img src={uni_ghana} alt="" />
        </div>
        <div className="flex gap-12 items-center ">
          <img src={byu} alt="" />
          <img src={uni_lag} alt="" />
        </div>
      </div>
      <div className="absolute bottom-0 right-0">
        {card_type === "yellow" ? (
          <img src={yellow_wings} alt="" />
        ) : (
          <img src={blue_wings} alt="" />
        )}
      </div>
    </div>
  );
};

export default OfferCard;
