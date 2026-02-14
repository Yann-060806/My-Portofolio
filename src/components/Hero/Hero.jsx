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
        paddingTop: "80px",
      }}
    >
      <Container>
        <Row className="align-items-center">
          <Col md="6" className="mb-5 mb-md-0">
            <h6 className="text-success text-uppercase mb-3">
              Fullstack Web Developer
            </h6>

            <h1 className="fw-bold mb-3" style={{ fontSize: "3rem" }}>
              Halo, saya{" "}
              <span className="text-success">Hanzhallah Zaul Zulyan</span>
            </h1>

            <p className="text-secondary mb-4" style={{ maxWidth: "520px" }}>
              Saya adalah seorang Fullstack Web Developer yang berfokus pada
              pengembangan aplikasi web modern, responsif, dan scalable.
              Menggunakan <strong>React</strong> untuk membangun antarmuka yang
              interaktif serta <strong>Node.js dan Express.js</strong> untuk
              mengembangkan backend dan API yang efisien.
            </p>

            <div className="d-flex gap-3">
              <Button color="success" href="#projects">
                Lihat Proyek
              </Button>

              <Button outline color="success" href="#contact">
                Hubungi Saya
              </Button>
            </div>
          </Col>

          <Col md="6" className="text-center">
            <img
              src={profile}
              alt="profile"
              style={{
                width: "320px",
                height: "320px",
                objectFit: "cover",
                borderRadius: "50%",
                border: "4px solid #00e676",
                boxShadow: "0 0 40px rgba(0, 230, 118, 0.3)",
              }}
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
