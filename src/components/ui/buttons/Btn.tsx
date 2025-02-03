import play_store_icon from "../../../assets/images/playstore.png";
import apple_store_icon from "../../../assets/images/apple_store_icon.png";
import watch_demo_icon from "../../../assets/images/play-circle.png";
import bar_code_scaner from "../../../assets/images/barcode.png";
interface BtnProps {
  button_type: "primary_button" | "watch_demo_button" | "default";
}

const Btn: React.FC<BtnProps> = ({ button_type }) => {
  const buttonStyles = {
    primary_button: {
      bg: "bg-[#AFE274]",
      border: "border-[#AFE2]",
      borderWidth: "border",
      text: "Download app",
      padding: "px-8 py-4",
      images: [
        { src: play_store_icon, alt: "play store icon", className: "size-5" },
        { src: apple_store_icon, alt: "apple store icon", className: "size-5" },
      ],
    },
    watch_demo_button: {
      bg: "bg-[#F4F8EF]",
      border: "border-[#AFE274]",
      borderWidth: "border",
      text: "Watch Demo ",
      padding: "px-8 py-4",

      images: [
        { src: watch_demo_icon, alt: "play circle icon", className: "size-6" },
      ],
    },
    default: {
      bg: "bg-[#AFE276]",
      border: "border-[#AFE274]",
      borderWidth: "border",
      text: "Download app",
      padding: "px-4 py-3",
      images: [
        { src: bar_code_scaner, alt: "bar code scanner", className: "size-6" },
      ],
    },
  };
  const { bg, border, text, images, borderWidth, padding } =
    buttonStyles[button_type];

  return (
    <button
      className={`flex gap-3 rounded-4xl  ${bg} ${border}  ${borderWidth} ${padding} items-center`}
    >
      <span className="text-base font-medium font-[cabiet-medium] capitalize">
        {text}
      </span>

      <div className="flex  gap-1.5">
        <img
          src={images[0].src}
          alt={images[0].alt}
          className="size-5  hidden xl:flex"
        />

        {button_type === "primary_button" && (
          <div className="pl-1.5 border-l border-l-black/30 hidden xl:flex">
            <img
              src={apple_store_icon}
              alt="apple store icon"
              className="size-5 "
            />
          </div>
        )}
      </div>
    </button>
  );
};

export default Btn;
