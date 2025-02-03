import banner_bg from "../../../assets/images/banner_bg.png";
import qr_code from "../../../assets/images/banner_qr_code.png";
import SecondaryBtn from "../buttons/SecondaryBtn";
const CtaBanner = () => {
  return (
    <section className="py-15 px-5 md:px-8 lg:px-19">
      <div
        style={{
          backgroundImage: `url(${banner_bg})`,
        }}
        className="px-6 md:px-8 lg:px-[7.312rem] pb-[2.93rem] pt-20 bg-no-repeat bg-cover flex  justify-between items-center rounded-4xl flex-col md:flex-row gap-y-8"
      >
        <div className="flex-col flex gap-8  items-center">
          <div className="flex gap-8 flex-col lg:w-[53ch]">
            <p className="text-xl md:text-3xl lg:text-5xl font-bold leading-[120%] text-[#2F2F2F]">
              Download the Pay4Me App Today!
            </p>
            <p className="leading-[24px] text-base font-normal text-[#7D7D7D] ">
              Our custom QR code will take you to your app store to download our
              awesome native apps
            </p>
          </div>
          <div className="flex gap-4 flex-col sm:flex-row ">
            <SecondaryBtn type="appstore" />
            <SecondaryBtn type="playstore" />
          </div>
        </div>
        <div>
          <img src={qr_code} alt="" />
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
