import palmer from "../../../assets/images/palmer.png";
const ClitentCard = () => {
  return (
    <div className="rounded-2xl mx-2 lg:w-[21.687rem] h-[23.439rem] overflow-hidden relative ">
      <img src={palmer} alt="" className="w-full h-full" />
      <div className="absolute bottom-5 mx-5">
        <p className="text-[#FFFFFF] text-2xl font-normal">Palmer Nicole</p>
        <p className="text-sm leading-[22px] text-[#EBEBEB] ">Phd Student</p>
      </div>
    </div>
  );
};

export default ClitentCard;
