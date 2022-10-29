import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
const Courses = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://learning-platform-serverside.vercel.app/category")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  });
  return (
    <div style={{ textAlign: "left" }}>
      {categories.map((course) => (
        <ul key={course.id}>
          <Link to={`/courses/info/${course.id}`}>{course.name}</Link>
        </ul>
      ))}
    </div>
  );
};

export default Courses;
