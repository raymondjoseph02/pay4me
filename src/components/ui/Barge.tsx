import Lightning_icon from "../../assets/images/ligthning.png";
interface BargeProps {
  bargeText?: string;
}
const Barge: React.FC<BargeProps> = ({ bargeText }) => {
  return (
    <div className="bg-[#E9F8D8] border-[0.5px] border-[#A0C07B] items-center px-2 py-1 flex gap-1.5 w-fit rounded-4xl justify-center">
      <img src={Lightning_icon} alt="Lightning icon" className=" size-3.5" />
      <p className="  uppercase  text-[#2F2F2F] text-xs ">
        {bargeText ? bargeText : "Secure. Global. fast"}
      </p>
    </div>
  );
};

export default Barge;
