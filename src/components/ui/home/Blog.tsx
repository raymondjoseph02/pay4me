import Carousel from "react-multi-carousel";
import Barge from "../Barge";
import BlogCard from "./BlogCard";
import { FC } from "react";

interface ArrowProps {
  onClick?: () => void;
}

const RightArrow: FC<ArrowProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute z-50  -bottom-5 transform  bg-gray-300 p-2 rounded-full"
    >
      ➡️
    </button>
  );
};

const LeftArrow: FC<ArrowProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute left-0 bottom-0 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full"
    >
      ⬅️
    </button>
  );
};

const Blog = () => {
  const responsive = {
    superLargeDesktop: {
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
    <section className="lg:px-[6.5rem] pt-20 pb-10 gap-20 flex flex-col">
      <div className="flex flex-col gap-8 justify-center items-center">
        <Barge bargeText="Blog" />
        <h2 className="text-xl md:text-4xl lg:text-5xl font-bold text-[#2F2F2F] tracking-[-2%] leading-[120%]">
          Latest Blog & Resources
        </h2>
      </div>

      <Carousel
        customLeftArrow={<LeftArrow />}
        customRightArrow={<RightArrow />}
        infinite={true}
        className="relative"
        responsive={responsive}
      >
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </Carousel>
    </section>
  );
};

export default Blog;
