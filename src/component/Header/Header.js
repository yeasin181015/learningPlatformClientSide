import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./../../Contexts/AuthProvider";
import { FaUserAlt } from "react-icons/fa";
import { Image } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  const { user, logout, setUserName, userName } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const checkLogout = await logout();
      setUserName(null);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Navbar className="navbar" collapseOnSelect expand="lg" bg="light">
      <Container>
        <Navbar.Brand
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Image
            roundedCircle
            src="https://c8.alamy.com/comp/PXPBDW/building-logo-design-real-estate-company-logo-design-abstract-construction-logo-design-building-logo-design-PXPBDW.jpg"
            style={{ height: "50px", marginRight: "10px" }}
          ></Image>
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            Webify
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/courses" style={{ marginRight: "10px" }}>
              {" "}
              Courses
            </Link>
            <Link to="/faq" style={{ marginRight: "10px" }}>
              FAQ
            </Link>
            <Link to="/blog">Blog</Link>
          </Nav>

          {user?.displayName || userName ? (
            <div style={{ display: "flex" }}>
              <div style={{ display: "flex" }}>
                <p>{user.displayName || userName}</p>
                {user.photoURL ? (
                  <Image
                    style={{ height: "40px" }}
                    roundedCircle
                    src={user.photoURL}
                  ></Image>
                ) : (
                  <FaUserAlt></FaUserAlt>
                )}
              </div>
              <div>
                <button onClick={handleLogout}>Logout</button>
              </div>
            </div>
          ) : (
            <Nav>
              <Link to="/signup" style={{ marginRight: "10px" }}>
                Sign Up
              </Link>
              <Link to="/login">Log in</Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
