import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Courseinfo.css";

const Courseinfo = () => {
  const selectedCourse = useLoaderData();
  return (
    <div className="courses-card">
      {selectedCourse.map((course) => (
        <Card className="cards" key={course.id}>
          <Card.Img
            variant="top"
            className="card-img"
            src={`${course.photo}`}
          />
          <Card.Body>
            <Card.Title>{course.name}</Card.Title>
            <Card.Text className="card-text">
              {course.details.length > 100 ? (
                <span>
                  {course.details.slice(0, 100) + "..."}
                  <Link to={`/courses/specific/${course.id}`}>Read More</Link>
                </span>
              ) : (
                ""
              )}
            </Card.Text>
            <Button variant="primary">
              <Link
                to="/premiumaccess"
                style={{ color: "white", textDecoration: "none" }}
              >
                Get Premium Access
              </Link>
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Courseinfo;
