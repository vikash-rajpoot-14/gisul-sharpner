import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Course() {
  const param = useParams();
  const courseid = param.id;

  const [Course, setCourse] = useState({});
  console.log("course", Course);
  useEffect(() => {
    async function FetchCourse() {
      const res = await fetch(`http://localhost:3000/api/course/${courseid}`);
      const data = await res.json();
      const dataneeded = data.course;
      console.log(data);
      setCourse(dataneeded[0]);
    }
    FetchCourse();
  }, [courseid]);

  return (
    <div>
      {!Course ? (<div>No course Available</div>):(
        <div>
          <div className="flex justify-around my-4">
            <div className="w-1/2">
              <h1 className="font-semibold pb-2">{Course.title}</h1>
              <p>{Course.description}</p>
            </div>
            <video width="400" height="400" controls>
              <source src={Course.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="flex flex-col items-center justify-center ">
            <h1 className="font-bold py-4">Key Courses</h1>
            <ul className="flex flex-wrap justify-center">
              {Course?.subcourse?.map((course, idx) => (
                <li className="bg-slate-400 m-4 w-2/6 h-56 p-4" key={idx}>
                 <p>{course}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Course;
