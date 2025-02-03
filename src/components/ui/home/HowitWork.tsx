import Barge from "../Barge";
import step_1 from "../../../assets/images/qr_code.png";
import step_2 from "../../../assets/images/sign_up_pay4me.png";
import step_3 from "../../../assets/images/setup_details.png";
import step_4 from "../../../assets/images/complete_payment.png";
import HowItWorkCard from "./HowItWorkCard";
import Btn from "../buttons/Btn";

const steps = [
  {
    title: "Download the Mobile App",
    content:
      "Get started by downloading our mobile app, available on iOS and Android.",
    image: step_1,
  },
  {
    title: "Sign up on the app.",
    content:
      "Sign up with your details, verify your identity, and set up your payment preferences.",
    image: step_2,
  },
  {
    title: "Setup Payment Details",
    content:
      "Securely link your local bank account or mobile wallet to the Pay4me app.",
    image: step_3,
  },
  {
    title: "Complete Your Payment",
    content:
      "Choose your preferred payment method and finalize the transaction securely.",
    image: step_4,
  },
];
const HowitWork = () => {
  return (
    <section className="bg-[#FAFAFA] md:px-10 px-5 lg:px-[15.93rem] py-[6.68rem] flex-col flex gap-16">
      <div className="flex-col flex gap-8 items-center">
        <Barge bargeText="How it works" />
        <h2 className="text-2xl md:text-4xl lg:text-[3rem] font-bold text-[#2F2F2F]">
          4 Simple Steps to Get Started
        </h2>
      </div>
      <div className="flex-col flex gap-16">
        <div className=" space-y-10  md:grid md:grid-cols-2  md:gap-14 items-center justify-center">
          {steps.map((step, index) => (
            <HowItWorkCard
              step={index + 1}
              step_title={step.title}
              step_content={step.content}
              step_image={step.image}
              key={index}
            />
          ))}
        </div>
        <div className=" flex justify-center">
          <Btn button_type="primary_button" />
        </div>
      </div>
    </section>
  );
};

export default HowitWork;
