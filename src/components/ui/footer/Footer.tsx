import { FaFacebookF, FaInstagram } from "react-icons/fa";
import footer_logo from "../../../assets/images/footer_logo.png";
import pay4me_logo from "../../../assets/images/logo.png";
import envelope from "../../../assets/images/envelope.png";
import { FaTiktok, FaXTwitter, FaYoutube } from "react-icons/fa6";
import SecondaryBtn from "../buttons/SecondaryBtn";
const Footer = () => {
  return (
    <footer
      className=" relative md:h-[55rem] h-auto lg:h-[29rem] "
      style={{
        clipPath: "polygon(0% 0, 10% 0%, 100% 100%, 0% 100%, )",
      }}
    >
      <div className="w-full flex gap-10 flex-col md:fixed bottom-0 left-0 pt-10 md:px-8 px-5 md:h-[55rem] h-auto lg:h-[29rem] pb-15">
        <div className="flex flex-col gap-12">
          <div className="flex  gap-x-20 gap-y-13 lg:flex-row flex-col justify-between ">
            <div className="flex flex-col gap-6">
              <div className="flex gap-2 ">
                <img
                  src={pay4me_logo}
                  alt="pay4me logo"
                  className="size-[27px]"
                />
                <p className="font-bold  ">Pay4Me App</p>
              </div>
              <div className="flex gap-4">
                <div>
                  <img src={envelope} alt="" />
                </div>
                <p className="text-[#5D5D5D] font-light text-sm">
                  support@pay4me.app
                </p>
              </div>
              <div className="flex gap-4">
                <div className="bg-black size-[2rem] rounded-full flex items-center justify-center">
                  <FaInstagram className="text-white" />
                </div>
                <div className="bg-black size-[2rem] rounded-full flex items-center justify-center">
                  <FaXTwitter className="text-white" />
                </div>
                <div className="bg-black size-[2rem] rounded-full flex items-center justify-center">
                  <FaFacebookF className="text-white" />
                </div>
                <div className="bg-black size-[2rem] rounded-full flex items-center justify-center">
                  <FaTiktok className="text-white" />
                </div>
                <div className="bg-black size-[2rem] rounded-full flex items-center justify-center">
                  <FaYoutube className="text-white" />
                </div>
              </div>
            </div>
            <div className="flex justify-between flex-[50%] md:flex-row flex-col gap-8">
              <div className="flex-col flex gap-4">
                <p className="font-bold md:text-lg text-[#2F2F2F]">Company</p>
                <ul className="flex flex-col gap-5">
                  <li className="text-sm font-light text-[#5D5D5D]">About</li>
                  <li className="text-sm font-light text-[#5D5D5D]">Blog</li>
                  <li className="text-sm font-light text-[#5D5D5D]">
                    How it Works
                  </li>
                  <li className="text-sm font-light text-[#5D5D5D]">Careers</li>
                </ul>
              </div>
              <div className="flex-col flex gap-4">
                <p className="font-bold md:text-lg text-[#2F2F2F]">Resources</p>
                <ul className="flex flex-col gap-5">
                  <li className="text-sm font-light text-[#5D5D5D]">
                    Android Reviews
                  </li>
                  <li className="text-sm font-light text-[#5D5D5D]">
                    iOS Reviews
                  </li>
                  <li className="text-sm font-light text-[#5D5D5D]">
                    Testimonials{" "}
                  </li>
                  <li className="text-sm font-light text-[#5D5D5D]">FAQs</li>
                </ul>
              </div>
              <div className="flex-col flex gap-4">
                <p className="font-bold md:text-lg text-[#2F2F2F]">Legal</p>
                <ul className="flex flex-col gap-5">
                  <li className="text-sm font-light text-[#5D5D5D]">
                    Terms of Service
                  </li>
                  <li className="text-sm font-light text-[#5D5D5D]">
                    Terms of Service
                  </li>
                  <li className="text-sm font-light text-[#5D5D5D]">
                    Privacy Policy{" "}
                  </li>
                  <li className="text-sm font-light text-[#5D5D5D]">
                    KYC/AML Policy
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-4 lg:w-[35ch]">
              <div className="flex gap-4">
                <SecondaryBtn type="appstore" />
                <SecondaryBtn type="playstore" />
              </div>
              <p className="font-light text-sm text-[#5D5D5D]">
                Depending on your mobile device, download our awesome native app
                to start enjoying all the benefits of pay4Me.
              </p>
            </div>{" "}
          </div>
        </div>
        <div className=" flex-col-reverse gap-6 flex  ">
          <div className="flex md:justify-center items-center">
            <p className="text-sm text-[#7D7D7D] leading-[22px] ">
              &copy; 2020 - 2024 Pay4Me, Inc.
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:gap-2">
            <div>
              <img src={footer_logo} alt="" className="md:w-[9.81rem] w-10" />
            </div>
            <p className="text-xs text-[#666565] leading-[22px] pt-4">
              Pay4Me is a financial technology company making it easier for
              international students and immigrants to pay their tuition and
              fees in minutes. We offer our products and services in partnership
              with licensed transmitters and banking partners in their
              respective jurisdictions. All trademarks, logos, and brand names
              are the property of their respective owners. All company, product,
              and service names used on this website are for identification
              purposes only. Use of these names, trademarks and brands do not
              imply endorsement.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
