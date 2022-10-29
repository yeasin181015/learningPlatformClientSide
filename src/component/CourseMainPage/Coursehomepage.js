import { Outlet } from "react-router-dom";
import Courses from "./../Courses/Courses";
import "./Coursehomepage.css";
const Coursehomepage = () => {
  return (
    <div className="course-home-page">
      <Courses></Courses>
      <Outlet></Outlet>
    </div>
  );
};

export default Coursehomepage;
