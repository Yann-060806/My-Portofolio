import { Container, Row, Col, Button } from "reactstrap";
import profile from "../../assets/image/profile.jpeg";

const Hero = () => {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "#0b0b0b",
        color: "white",
        paddingTop: "100px",
        paddingBottom: "50px",
      }}
    >
      <Container>
        <Row className="align-items-center text-center text-md-start">
          <Col md="6" className="mb-5 mb-md-0 order-2 order-md-1">
            <h6 className="text-success text-uppercase mb-3">
              Fullstack Web Developer
            </h6>

            <h1
              className="fw-bold mb-3"
              style={{
                fontSize: "clamp(2rem, 6vw, 3rem)",
                lineHeight: "1.2",
              }}
            >
              Halo, saya <br />
              <span className="text-success">Hanzhallah Zaul Zulyan</span>
            </h1>

            <p
              className="text-secondary mb-4 mx-auto mx-md-0"
              style={{
                maxWidth: "520px",
                fontSize: "1rem",
                lineHeight: "1.8",
              }}
            >
              Saya adalah seorang Fullstack Web Developer yang berfokus pada
              pengembangan aplikasi web modern, responsif, dan scalable.
              Menggunakan <strong>React</strong> untuk membangun antarmuka yang
              interaktif serta <strong>Node.js dan Express.js</strong> untuk
              mengembangkan backend dan API yang efisien.
            </p>

            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-md-start">
              <Button color="success" href="#projects">
                Lihat Proyek
              </Button>

              <Button outline color="success" href="#contact">
                Hubungi Saya
              </Button>
            </div>
          </Col>

          <Col md="6" className="text-center mb-4 mb-md-0 order-1 order-md-2">
            <img
              src={profile}
              alt="profile"
              className="img-fluid"
              style={{
                width: "clamp(220px, 60vw, 320px)",
                height: "clamp(220px, 60vw, 320px)",
                objectFit: "cover",
                borderRadius: "50%",
                border: "4px solid #00e676",
                boxShadow: "0 0 40px rgba(0, 230, 118, 0.3)",
              }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
