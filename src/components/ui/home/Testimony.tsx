import Barge from "../Barge";
import ClitentCard from "./ClitentCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import student_2 from "../../../assets/images/palmer.png";
import student_1 from "../../../assets/images/student_2.png";
import student_3 from "../../../assets/images/student_3.png";
import video_1 from "../../../assets/video/vid1.mp4";
import video_2 from "../../../assets/video/videos.mp4";
import video_3 from "../../../assets/video/vid3.mp4";
function Testimony() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3.2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 564 },
      items: 1.9,
    },
    mobile: {
      breakpoint: { max: 564, min: 0 },
      items: 1,
    },
  };
  const students = [
    {
      name: "Jimmy Adewale",
      image: student_1,
      occupation: "Entrepreneur",
      videoUrl: video_1,
    },
    {
      name: "Palmer Nicole",
      image: student_2,
      occupation: "Phd Student",
      videoUrl: video_2,
    },
    {
      name: "Hannah Adams",
      image: student_3,
      occupation: "Senior Therapist",
      videoUrl: video_3,
    },
    {
      name: "Lex Brown",
      image: student_3,
      occupation: "Masters Student",
      videoUrl: video_3,
    },
  ];
  return (
    <section className="px-5 md:px-20 py-25 flex flex-col gap-20">
      <div className=" flex flex-col gap-2.5">
        <Barge bargeText="testimonials" />
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold  text-[#2F2F2F] tracking-[-2%] leading-[120%] md:w-[21ch]">
          Don’t take our words for it, Take theirs.
        </h2>
      </div>
      {/* <div className="flex gap-9"> */}
      <Carousel infinite={true} responsive={responsive}>
        {students.map((student, i) => (
          <ClitentCard
            key={i}
            name={student.name}
            image={student.image}
            occupation={student.occupation}
            video={student.videoUrl}
          />
        ))}
      </Carousel>
      {/* </div> */}
    </section>
  );
}

export default Testimony;
