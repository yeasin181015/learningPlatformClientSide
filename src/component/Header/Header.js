import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./../../Contexts/AuthProvider";
import { FaUserAlt } from "react-icons/fa";
import { Image } from "react-bootstrap";

const Header = () => {
  const { user, logout, setUserName, userName } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(userName);

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
    <Navbar collapseOnSelect expand="lg" bg="light">
      <Container>
        <Navbar.Brand>Webify</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/"> Courses</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/blog">Blog</Link>
          </Nav>

          {/* {user?.displayName && <Link to="/signup">Sign Up</Link>} */}

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
              <Link to="/signup">Sign Up</Link>
              <Link to="/login">Log in</Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
