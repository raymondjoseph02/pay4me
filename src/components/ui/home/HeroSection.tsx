import Barge from "../Barge";
import Btn from "../buttons/Btn";
import Students from "./Students";
import hero_square from "../../../assets/images/Hero_square.png";
import girl_with_phone from "../../../assets/images/girl_operating_phone.png";
import techstar_logo from "../../../assets/images/techstar.png";
import google_G from "../../../assets/images/google_g.png";
import rating_star from "../../../assets/images/iconoir_star-solid.png";
import eye_icon from "../../../assets/images/eye_icon.png";
import { FaPlus } from "react-icons/fa";
import across_logo from "../../../assets/images/across.png";
import power_logo from "../../../assets/images/power.png";
import prodigy_logo from "../../../assets/images/prodigy.png";
import techstars_logo from "../../../assets/images/techstars.png";
import stirpe_logo from "../../../assets/images/stripe.png";
import paystack_logo from "../../../assets/images/paystack.png";
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
        <div>
          <Barge />
        </div>
        <div className="flex flex-col gap-6 items-center">
          <div className="flex flex-col gap-4">
            <h1 className="cabiet_font font-bold text-[1.8rem] md:text-[3rem] lg:text-[4rem]  leading-[120%] text-[#2F2F2F] text-center">
              Reliable Payment Solutions for International Education
            </h1>
            <p className="text-[#666565] text-center text-base  leading-[28px] md:w-[66ch] mx-auto">
              The easiest and fastest way to pay tuition and fees to educational
              institutions, businesses, and government agencies worldwide.
            </p>
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
      <div className=" md:relative">
        <img src={girl_with_phone} alt="" className="md:w-[70rem] w-full" />
        <div className=" hidden bg-[#FFFFFF] border-[#EFEFF9] top-14 lg:top-[9.03rem] left-14 lg:left-[9.3rem] border-[0.78px] p-3 md:flex gap-[1.166rem] rounded-[0.777rem] w-48 absolute">
          <img src={techstar_logo} alt="techstar logo" className="size-11" />
          <p className="text-sm  lg:text-base font-medium tex-[#2F2F2F]">
            Backed by Techstars
          </p>
        </div>
        <div className="hidden bg-[#FFFFFF] border-[#EFEFF9] bottom-[10rem] left-[1rem] md:bottom-[12.03rem] md:left-[6.3rem] border-[0.78px] p-3 md:flex gap-[1.166rem] rounded-[0.777rem]  absolute">
          <img src={google_G} alt="" className="size-8" />
          <div className="flex  flex-col gap-2">
            <div className="flex">
              <span>
                <img src={rating_star} alt="rating star" />
              </span>
              <span>
                <img src={rating_star} alt="rating star" />
              </span>
              <span>
                <img src={rating_star} alt="rating star" />
              </span>
              <span>
                <img src={rating_star} alt="rating star" />
              </span>
              <span>
                <img src={rating_star} alt="rating star" />
              </span>
            </div>
            <p className="text-sm md:text-base">5 star Google rating</p>
          </div>
        </div>
        <div className="hidden md:flex flex-col gap-[1.166rem] p-[1.166rem] rounded-[0.777rem]  w-fit absolute right-1 top-[calc(50%-90px)] bg-white">
          <div className="">
            <div className=" flex justify-between items-center gap-3">
              <p className="font-medium text-xs text-[#5C687D]">
                Wallet Balance
              </p>
              <div className="bg-[#545358] rounded-[31.1px] flex gap-2 w-fit px-[12.44px] py-[2px] md:py-1.5 text-[#FFFFFF]">
                <p className="hidden md:flex">$</p>
                <p className="text-xs md:text-base">$usd</p>
              </div>
            </div>
            <div className="flex justify-between lg:gap-3 items-center">
              <p className="text-[#141414] md:text-base text-sm font-bold lg:text-2xl">
                $ 22,850.00
              </p>
              <div>
                <img
                  src={eye_icon}
                  alt="privace icon"
                  className="h-2.5 w-3.5"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-3 md:items-end md:flex-row flex-col">
            <div className="flex gap-1.5 px-3.5 py-[9.33px] items-center rounded-4xl bg-[#FFFFFF] border-[#EFEFF9] border w-fit">
              <FaPlus className="text-xs lg:text-base font-light" />
              <p className="text-xs lg:text-base">Fund Wallet</p>
            </div>
            <div className="flex gap-1.5 px-3.5 py-[9.33px] items-center rounded-4xl bg-[#FFFFFF] border-[#EFEFF9] border w-fit">
              <FaPlus className="text-xs lg:text-base font-light" />
              <p className="text-xs lg:text-base">Fund Wallet</p>
            </div>
            <div className="flex gap-1 pb-1">
              <span className="rounded-full size-1.5 border inline-block bg-[#ACDB7C]"></span>
              <span className="rounded-full size-1.5 border inline-block"></span>
              <span className="rounded-full size-1.5 border inline-block"></span>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full md:px-30 flex-col flex gap-4">
        <p className=" w-full text-center text-base font-normal uppercase text-[#848484] leading-[28px]">
          Leading Brands Partner with us
        </p>
        <div className="flex content-center justify-center md:justify-between  w-full flex-wrap">
          {partners.map((partner, index) => (
            <img src={partner.logo} alt="" key={index} className="w-[110px]" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
