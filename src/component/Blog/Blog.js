import Accordion from "react-bootstrap/Accordion";

const Blog = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>What is Cors?</Accordion.Header>
        <Accordion.Body>
          Node.js is an open-source and cross-platform runtime used when
          executing JavaScript code on the server-side. One of the popular
          Node.js server frameworks is Express. Implementing CORS in Node.js
          helps you access numerous functionalities on the browser.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Why are you using firebase?</Accordion.Header>
        <Accordion.Body>
          The Firebase Realtime Database lets you build rich, collaborative
          applications by allowing secure access to the database directly from
          client-side code. Data is persisted locally, and even while offline,
          realtime events continue to fire, giving the end user a responsive
          experience.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>How does the private route works?</Accordion.Header>
        <Accordion.Body>
          The private route component is similar to the public route, the only
          change is that redirect URL and authenticate condition. If the user is
          not authenticated he will be redirected to the login page and the user
          can only access the authenticated routes If he is authenticated
          (Logged in)
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>What is Node Js?</Accordion.Header>
        <Accordion.Body>
          Node. js is a JavaScript runtime environment that achieves low latency
          and high throughput by taking a “non-blocking” approach to serving
          requests. In other words, Node. js wastes no time or resources on
          waiting for I/O requests to return. It is a used as backend service
          where javascript works on the server-side of the application. This way
          javascript is used on both frontend and backend. Node. js runs on
          chrome v8 engine which converts javascript code into machine code, it
          is highly scalable, lightweight, fast, and data-intensive.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Blog;
