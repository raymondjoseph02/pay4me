import Carousel from "react-multi-carousel";
import Barge from "../Barge";
import BlogCard from "./BlogCard";
import blog_image_1 from "../../../assets/images/bolg_1.png";
import blog_image_2 from "../../../assets/images/unslappsh.png";
import blog_image_3 from "../../../assets/images/blog_3.png";

const Blog = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 3 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 664 }, items: 2.5 },
    mobile: { breakpoint: { max: 664, min: 0 }, items: 1 },
  };
  const blogs = [
    {
      title: "How to Navigate International Payments for Education With Ease",
      image: blog_image_1,
    },
    {
      title: "Importance of getting Insurance bfroe traveling",
      image: blog_image_2,
    },
    {
      title: "Overcoming chanlleges in Foreign Currency Tuition Payments",
      image: blog_image_3,
    },
  ];

  return (
    <section className="md:px-[6.5rem] pt-20 pb-10 gap-20 flex flex-col">
      <div className="flex flex-col gap-8 justify-center items-center">
        <Barge bargeText="Blog" />
        <h2 className="text-xl md:text-4xl lg:text-5xl font-bold text-[#2F2F2F] tracking-[-2%] leading-[120%]">
          Latest Blog & Resources
        </h2>
      </div>

      <Carousel
        draggable={true}
        infinite={true}
        className="relative"
        responsive={responsive}
      >
        {blogs.map((blog, i) => (
          <BlogCard title={blog.title} image={blog.image} key={i} />
        ))}
      </Carousel>
    </section>
  );
};

export default Blog;
