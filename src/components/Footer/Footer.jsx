import { Container, Row, Col } from "reactstrap";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{
        background: "#0b0b0b",
        color: "white",
        padding: "60px 0 30px 0",
        borderTop: "1px solid #1f1f1f",
      }}
    >
      <Container>
        <Row className="text-center text-md-start">
          <Col md="4" className="mb-4">
            <h5 className="text-success fw-bold">Hanzhallah Zaul Zulyan</h5>
            <p className="text-secondary">
              Fullstack Web Developer yang berfokus pada pengembangan aplikasi
              web modern dan responsif menggunakan React, Node.js, dan
              Express.js.
            </p>
          </Col>

          <Col md="4" className="mb-4">
            <h6 className="text-success fw-semibold">Navigation</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#home" className="text-secondary text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-secondary text-decoration-none"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#resume"
                  className="text-secondary text-decoration-none"
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-secondary text-decoration-none"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-secondary text-decoration-none"
                >
                  Contact
                </a>
              </li>
            </ul>
          </Col>

          <Col md="4" className="mb-4 text-center text-md-start">
            <h6 className="text-success fw-semibold">Connect</h6>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start">
              <a
                href="https://github.com/usernamekamu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary fs-4"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/hanzhallah-zulyan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary fs-4"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://instagram.com/hnzlh_z"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary fs-4"
              >
                <FaInstagram />
              </a>
            </div>
          </Col>
        </Row>

        <hr style={{ borderColor: "#1f1f1f" }} />

        <div className="text-center text-secondary">
          <small>
            © {new Date().getFullYear()} Hanzhallah Zaul Zulyan. All Rights
            Reserved.
          </small>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
