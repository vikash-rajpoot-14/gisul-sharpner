import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useNavigate } from "react-router-dom";

const courses = [
  { id: 1,
    title: "Data Integration" },
  {
    id: 2,
    title: "Data Science",
  },
  {
    id: 3,
    title: "Machine Learning",
  },
  {
    id: 4,
    title: "Deep Learning",
  },
  {
    id: 5,
    title: "Data Integration",
  },
  {
    id: 6,
    title: "Clloud Integration",
  },
  {
    id: 7,
    title: "Database technology",
  },
  {
    id: 8,
    title: "Data Managetent",
  },
  {
    id: 9,
    title: "Business Intelligence",
  },
];

function Header() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate()
  const handleCourseClick = () => {
    setShow(!show);
  };

  const handleCourse = (id)=>{
    console.log("object",id)
    const newId = id.toString().split(" ").join("-")
    navigate(`/${newId}`)
  }
  return (
    <div>
      <div className="bg-blue-400 flex justify-between p-2">
        <div>Logo</div>
        <ul className="flex gap-4">
          <li>about</li>
          <li onClick={handleCourseClick} className="cursor-pointer">
            Course catalogue <ArrowDropDownIcon />
          </li>
          <li>community</li>
          <li>FAQS</li>
        </ul>
        <div>Contact us</div>
      </div>
      <div
        className={`${
          show ? "flex" : "hidden"
        } gap-4 py-4 flex-grow flex-wrap justify-evenly bg-blue-200 hover:cursor-pointer`}
      >
        {courses.map((course) => (
          <p className="w-96 m-0 p-0" onClick={()=>handleCourse(course.title)} key={course.id}>{course.title}</p>
        ))}
      </div>
    </div>
  );
}

export default Header;
