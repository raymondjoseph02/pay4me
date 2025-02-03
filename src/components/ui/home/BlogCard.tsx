import arrow_right from "../../../assets/images/arrow-right.png";
import unslapsh_image from "../../../assets/images/unslappsh.png";
const BlogCard = () => {
  return (
    <div className="flex gap-9.5 flex-col  rounded-xl group mx-3 p-2 bg-[#f0ecec8a] ">
      <div className="rounded-xl overflow-hidden w-full bg-red-100">
        <img
          src={unslapsh_image}
          alt="Random Unsplash Image"
          className="rounded-xl group-hover:scale-[1.2] transition-transform ease-in-out duration-150 w-full"
        />
      </div>
      <div className="flex flex-col gap-6  pb-3">
        <h5 className="font-bold text-lg lg:text-[1.37rem] leading-[32px] text-[#242323] md:w-[28ch]">
          How to Navigate Internation payment for Education with ease
        </h5>
        <div className="bg-[#AFE274] w-fit rounded-full p-2 border-[#AFE274] border cursor-pointer">
          <img src={arrow_right} alt="links arrow" />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
<div>
  <div>
    <img src="" alt="" />
  </div>
  <div></div>
</div>;
