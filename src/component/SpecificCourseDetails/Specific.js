import { Image } from "react-bootstrap";
import { useLoaderData, Link } from "react-router-dom";
import "./Specific.css";
import { Card, Button } from "react-bootstrap";
import Pdf from "react-to-pdf";
import React from "react";

const Specific = () => {
  const course = useLoaderData();
  const { name, details, photo } = course;
  const ref = React.createRef();

  return (
    <Card ref={ref} style={{ textAlign: "left" }} classNam="card-body">
      <Card.Img className="photoImg" variant="top" src={photo} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{details}</Card.Text>
        <Button variant="primary">
          <Pdf targetRef={ref} filename="Course-outline.pdf">
            {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
          </Pdf>
        </Button>
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
  );
};

export default Specific;
