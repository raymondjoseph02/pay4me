import offers_bg from "../../../assets/images/Offers_bg.png";
import Barge from "../Barge";
import Btn from "../buttons/Btn";
import OfferCard from "./OfferCard";
function WhatWeOffer() {
  return (
    <section
      style={{
        backgroundImage: `url(${offers_bg})`,
      }}
      className="bg-cover bg-no-repeat bg-top lg:px-[13.93rem]  py-[6.68rem] flex-col flex gap-20"
    >
      <div className="flex flex-col justify-center items-center gap-8">
        <Barge bargeText="what we offer" />
        <h2 className="font-bold md:text-4xl md:px-8 text-2xl lg:text-5xl leading-[120%] text-[#FDFDFD] text-center lg:w-[27ch]">
          Simplified Payments for Your Relocation Dreams
        </h2>
      </div>
      <div className="flex-col flex  gap-20">
        <div className="flex gap-16 justify-center flex-wrap px-4 sm:px-2">
          <OfferCard card_type="yellow" />
          <OfferCard card_type="blue" />
        </div>
        <div className="flex justify-center">
          <Btn button_type="primary_button" />
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;
