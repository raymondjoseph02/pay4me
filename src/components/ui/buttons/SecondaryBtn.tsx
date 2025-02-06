import appstore_icon from "../../../assets/images/appstore_icon.png";
import playstore_icon from "../../../assets/images/playstore_icon.png";

interface SecondaryBtnprop {
  type: "appstore" | "playstore";
}

const SecondaryBtn: React.FC<SecondaryBtnprop> = ({ type }) => {
  const buttonType = {
    appstore: {
      icon: appstore_icon,
      text: "appstore",
    },
    playstore: {
      icon: playstore_icon,
      text: "playstore",
    },
  };
  const typeInfo = buttonType[type];
  return (
    <button className="bg-[#000000] px-6 py-3 flex gap-4 rounded-[2.5rem] text-white justify-center items-center cursor-pointer">
      <div className="">
        <img src={typeInfo.icon} alt="" />
      </div>
      <div>
        <p className="text-[10px] font-medium leading-4 text-left">
          Download on <br />{" "}
          <span className="text-base font-bold capitalize leading-[16px]">
            {typeInfo.text}
          </span>
        </p>
      </div>
    </button>
  );
};

export default SecondaryBtn;
