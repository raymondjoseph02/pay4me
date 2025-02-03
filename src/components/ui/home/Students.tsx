import student_one from "../../../assets/images/student_one.png";
import student_two from "../../../assets/images/student_two.png";
import student_three from "../../../assets/images/student_three.png";
import student_four from "../../../assets/images/student_four.png";
import { motion } from "framer-motion";
const students = [
  {
    image: student_one,
  },
  {
    image: student_two,
  },
  {
    image: student_three,
  },
  {
    image: student_four,
  },
  {
    image: student_four,
  },
];
const Students = () => {
  return (
    <div
      style={{
        width: `${students.length * 2.5}rem`,
      }}
      className={` flex relative z-10   p-3 h-14`}
    >
      {students.map((student, index) => (
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: `${index * 35}px` }}
          transition={{
            ease: "easeInOut",
            bounce: 0.2,
            type: "spring",
            duration: 3.9,
          }}
          key={index}
          className=" w-fit rounded-full  absolute top-1/2 -translate-y-1/2"
        >
          <img
            src={student.image}
            alt={`Student ${index}`}
            className="size-12"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Students;
