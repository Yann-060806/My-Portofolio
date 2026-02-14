import React from "react";
import { Container, Row, Col, Card, CardBody, Badge } from "reactstrap";
import profile from "../../assets/image/profile.jpeg";

const stats = [
  { number: "1+", label: "Tahun Belajar Web Development" },
  { number: "10+", label: "Proyek Dibangun" },
  { number: "5+", label: "Teknologi Dikuasai" },
  { number: "100%", label: "Komitmen & Konsistensi" },
];

const skills = [
  "React",
  "JavaScript",
  "Node.js",
  "Express.js",
  "REST API",
  "Bootstrap",
  "Git & GitHub",
];

const About = () => {
  return (
    <section
      id="about"
      style={{
        background: "#0b0b0b",
        color: "white",
        padding: "100px 0",
      }}
    >
      <Container>
        <h1 className="text-center fw-bold mb-5">
          Tentang <span className="text-success">Saya</span>
        </h1>

        <Row className="align-items-center">
          <Col md="5" className="text-center mb-4">
            <img
              src={profile}
              alt="profile"
              className="img-fluid shadow"
              style={{
                borderRadius: "20px",
                maxWidth: "320px",
                border: "3px solid #00e676",
              }}
            />
          </Col>

          <Col md="7">
            <h2 className="fw-bold mb-3">
              Halo, saya{" "}
              <span className="text-success">Hanzhallah Zaul Zulyan</span>
            </h2>

            <p className="text-light">
              Saya adalah seorang <strong>Fullstack Web Developer</strong> yang
              memiliki minat besar dalam membangun aplikasi web modern,
              responsif, dan scalable. Saya berfokus pada pengembangan antarmuka
              yang interaktif menggunakan <strong>React</strong>, serta
              membangun backend dan REST API menggunakan{" "}
              <strong>Node.js dan Express.js</strong>.
            </p>

            <p className="text-secondary">
              Saat ini saya terus mengembangkan kemampuan teknis, memahami
              arsitektur aplikasi, serta menerapkan praktik terbaik dalam
              pengembangan perangkat lunak untuk menghasilkan solusi digital
              yang efisien dan berkualitas.
            </p>

            <div className="mt-4">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  color="success"
                  pill
                  className="me-2 mb-2 px-3 py-2"
                  style={{ fontSize: "14px" }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          {stats.map((item) => (
            <Col md="3" key={item.label} className="mb-4">
              <Card
                className="text-center bg-dark text-white border-success"
                style={{
                  borderRadius: "18px",
                  border: "1px solid #1f1f1f",
                }}
              >
                <CardBody>
                  <h2 className="fw-bold text-success">{item.number}</h2>
                  <p className="text-secondary mb-0">{item.label}</p>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default About;
