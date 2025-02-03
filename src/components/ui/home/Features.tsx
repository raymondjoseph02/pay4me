import Barge from "../Barge";
import feature_bg from "../../../assets/images/features_bg.png";
import global_icon from "../../../assets/images/global.png";
import fast_relaible_icon from "../../../assets/images/fast.png";
import Secure_transparent_icon from "../../../assets/images/secure.png";
import { FeatureCard } from "./FeatureCard";
const ourFeatures = [
  {
    title: "Global Accessibility",
    image: global_icon,
    content:
      "Effortlessly send tuition and other payments to educational institutions worldwide, no matter where you are.",
  },
  {
    title: "Fast & Reliable Transactions",
    image: fast_relaible_icon,
    content:
      "Ensure your payments are processed quickly, helping you meet important deadlines without stress.",
  },
  {
    title: "Secure & Transparent",
    image: Secure_transparent_icon,
    content:
      "Enjoy peace of mind with secure payment processing and complete transparency on fees and conversion rates.",
  },
];

const Features = () => {
  return (
    <section className="px-5 md:px-10 xl:px-[7.81rem] py-10 md:py-20">
      <div
        style={{
          backgroundImage: `url(${feature_bg})`,
        }}
        className="flex flex-col gap-20 px-4 md:px-10 lg:px-[4.81rem] py-10 md:py-[7.87rem] rounded-[2rem] bg-cover bg-center bg-no-repeat"
      >
        <div className="flex-col flex gap-8">
          <Barge bargeText="Features" />
          <h2 className="font-bold md:text-3xl text-2xl lg:text-5xl text-[#2F2F2F] leading-[120%]">
            What Truly sets us apart
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-between flex-wrap gap-5">
          {ourFeatures.map((feature, index) => (
            <FeatureCard
              title={feature.title}
              image={feature.image}
              content={feature.content}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
