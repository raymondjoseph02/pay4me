import { Button, Dialog, DialogPanel } from "@headlessui/react";
import { FC, useEffect, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { motion } from "framer-motion";
interface ClitentCardProps {
  name: string;
  image: string;
  occupation: string;
  video: string;
}
const ClitentCard: FC<ClitentCardProps> = ({
  name,
  image,
  occupation,
  video,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        videoRef.current
          ?.play()
          .catch((error) => console.error("Playback failed:", error));
      }, 100); // Small delay to allow rendering
    } else if (!isOpen && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reset video on close
    }
  }, [isOpen]);
  const close = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="rounded-2xl mx-2  h-[23.439rem] overflow-hidden relative  ">
      <img src={image} alt={name} className="w-full h-full object-cover" />
      <div className="absolute bottom-5 mx-5">
        <p className="text-[#FFFFFF] text-2xl font-normal">{name}</p>
        <p className="text-sm leading-[22px] text-[#EBEBEB] ">{occupation}</p>
      </div>
      <motion.div
        whileHover="hover"
        onClick={() => {
          setIsOpen(true);
        }}
        className="absolute -translate-1/2 inset-1/2 size-12  flex items-center justify-center rounded-full drop-shadow-xl bg-black/40 z-20  group hover:scale-[1.5] transition-transform ease-in-out duration-300 cursor-pointer"
      >
        <motion.div
          variants={{
            hover: { scale: [1.9, 0.9] },
          }}
        >
          <FaPlay className="text-white w-full group-hover:text-[#AFE274] transition-transform duration-300 ease-in-out" />
        </motion.div>
      </motion.div>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-100 h-screen w-screen focus:outline-none bg-red-900"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto h-screen bg-black/90">
          <div className="flex w-full h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-2xl aspect-video rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              {/* <DialogTitle
                as="h3"
                className="text-base/7 font-medium text-white"
              >
                Payment successful
              </DialogTitle>
              <p className="mt-2 text-sm/6 text-white/50">
                Your payment has been successfully submitted. We’ve sent you an
                email with all of the details of your order.
              </p> */}
              <div className="flex-col flex items-end gap-1.5">
                <Button
                  className="inline-flex items-center gap-2  font-semibold text-white shadow-inner shadow-white/10 focus:outline-none outline-none "
                  onClick={close}
                >
                  <FaX className="text-lg" />
                </Button>

                <video
                  ref={videoRef}
                  content="nodownload"
                  controls
                  className="w-full h-full aspect-video bg-red-200"
                >
                  <source src={video} className="w-full h-auto" />
                  Your browser doesn't support this video.
                </video>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default ClitentCard;
