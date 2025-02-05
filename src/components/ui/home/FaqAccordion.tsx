import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa";

const FaqAccordion = () => {
  const [isActive, setIsActive] = useState<number | null>(1);

  const openAccordion = (index: number) => {
    setIsActive(index);
  };

  const faq = [
    {
      question: "What is the Pay4Me App?",
      answer:
        "Pay4Me App is a platform that helps people across Africa complete cross-border payments services. Our core payment industry includes helping with payments to government and immigration agencies, colleges, universities, businesses, and organizations abroad. ",
    },
    {
      question: "Who does Pay4Me App Work?",
      answer:
        "You can easily complete your payment needs by entering or uploading your payment instructions or bills on Pay4Me App.  ",
    },
    {
      question: "What countries can i make payment to through Pay4Me App?",
      answer:
        "You can use Pay4Me to make payments to countries in North America, Europe, Asia, Africa and the rest of the world. ",
    },
    {
      question: "What countries can i make payment to through Pay4Me App?",
      answer:
        "You can use Pay4Me to make payments to countries in North America, Europe, Asia, Africa and the rest of the world. ",
    },
  ];

  return (
    <div className="h-full space-y-4 md:p-10 p-4 ">
      {/* FAQ Item */}
      {faq.map((q, i) => (
        <div className="border-b-[0.7px] border-b-[#000000] pb-4 flex gap-4 flex-col">
          <div
            className="cursor-pointer pt-4 px-4  flex justify-between "
            onClick={() => openAccordion(i + 1)}
          >
            <p className={`text-base md:text-xl font-semibold `}>
              {q.question}
            </p>
            <motion.span
              initial={{ rotate: 0 }}
              animate={isActive === i + 1 ? { rotate: 45 } : { rotate: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <FaPlus className="text-sm md:text-lg" />
            </motion.span>
          </div>

          {/* Animated Content */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={
              isActive === i + 1
                ? { height: "auto", opacity: 1 }
                : { height: 0, opacity: 0 }
            }
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden px-4 "
          >
            <p className="  px-2 text-gray-500 text-base ">{q.answer}</p>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
