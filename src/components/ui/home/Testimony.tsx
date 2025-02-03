import Barge from "../Barge";
import ClitentCard from "./ClitentCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Testimony() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      partialVisibilityGutter: 80,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3.2,
      partialVisibilityGutter: 80,
    },
    tablet: {
      breakpoint: { max: 1024, min: 564 },
      items: 1.9,
      partialVisibilityGutter: 80,
    },
    mobile: {
      breakpoint: { max: 564, min: 0 },
      items: 1,
      partialVisibilityGutter: 80,
    },
  };
  return (
    <section className="px-5 md:px-20 py-25 flex flex-col gap-20">
      <div className=" flex flex-col gap-2.5">
        <Barge bargeText="testimonials" />
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold  text-[#2F2F2F] tracking-[-2%] leading-[120%] md:w-[21ch]">
          Don’t take our words for it, Take theirs.
        </h2>
      </div>
      {/* <div className="flex gap-9"> */}
      <Carousel
        infinite={true}
        className=" flex space-x-6 gap-10"
        responsive={responsive}
      >
        <ClitentCard />
        <ClitentCard />
        <ClitentCard />
        <ClitentCard />
        <ClitentCard />
        <ClitentCard />
      </Carousel>
      {/* </div> */}
    </section>
  );
}

export default Testimony;
