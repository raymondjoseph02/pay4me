import Barge from "../Barge";
import faq_image from "../../../assets/images/faq_image.png";
import FaqAccordion from "./FaqAccordion";
import { useGlobalContext } from "../../../context/GlobalContext";
const Faq = () => {
  const { targetSupportDiv } = useGlobalContext();
  return (
    <section
      ref={targetSupportDiv}
      className="px-5 md:px-20 py-20 flex flex-col gap-[4.8125rem]"
    >
      <div className="flex-col gap-8 flex">
        <Barge bargeText="faqs" />
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold  text-[#2F2F2F] trackin-[-2%] leading-[120%] lg:w-[21ch]">
            Got Questions?
          </h2>
          <p className="text-[#7D7D7D] text-lg md:text-xl lg:text-2xl leading-[24px] tracking-[-1%] ">
            We’ve got answers
          </p>
        </div>
      </div>
      <div className="flex gap-20 flex-col lg:flex-row">
        <div className="rounded-2xl w-full lg:basis-1/2 h-full overflow-hidden ">
          <img src={faq_image} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-3xl border-[#D8D8D8] border-[0.5px] h-full ">
          <FaqAccordion />
        </div>
      </div>
    </section>
  );
};

export default Faq;
