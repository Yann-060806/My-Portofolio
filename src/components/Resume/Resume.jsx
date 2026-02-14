import React from "react";
import { Container, Row, Col, Card, CardBody, Progress } from "reactstrap";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const Resume = () => {
  return (
    <section
      id="resume"
      style={{
        background: "#0b0b0b",
        color: "white",
        padding: "100px 0",
      }}
    >
      <Container>
        {/* TITLE */}
        <h1 className="fw-bold text-center mb-2">
          Resume <span className="text-success">Saya</span>
        </h1>
        <p className="text-center text-secondary mb-5">
          Ringkasan pendidikan, pengalaman, dan kemampuan teknis yang saya
          miliki.
        </p>

        <Row>
          {/* EDUCATION */}
          <Col md="6">
            <h4 className="fw-bold mb-4 text-success d-flex align-items-center gap-2">
              <FaGraduationCap /> Pendidikan
            </h4>

            <Card className="mb-4 bg-dark text-white border-success">
              <CardBody>
                <h5 className="fw-bold">peTIK Training Center</h5>
                <span className="text-success fw-semibold">
                  Program Web Development
                </span>
                <p className="text-secondary mb-1">2025 - Sekarang</p>

                <hr style={{ borderColor: "#1f1f1f" }} />

                <p className="text-light">
                  Mendalami pengembangan aplikasi web modern dengan fokus pada
                  frontend menggunakan React serta backend menggunakan Node.js
                  dan Express.js. Mempelajari pembuatan REST API, manajemen
                  database, serta praktik terbaik dalam pengembangan aplikasi.
                </p>
              </CardBody>
            </Card>

            <Card className="bg-dark text-white border-success">
              <CardBody>
                <h5 className="fw-bold">Sekolah Menengah Atas</h5>
                <p className="text-secondary">2021 - 2024</p>

                <hr style={{ borderColor: "#1f1f1f" }} />

                <p className="text-light">
                  Mengembangkan kemampuan berpikir analitis dan mulai
                  menumbuhkan ketertarikan dalam bidang teknologi serta
                  pengembangan perangkat lunak.
                </p>
              </CardBody>
            </Card>
          </Col>

          {/* EXPERIENCE */}
          <Col md="6">
            <h4 className="fw-bold mb-4 text-success d-flex align-items-center gap-2">
              <FaBriefcase /> Pengalaman
            </h4>

            <Card className="mb-4 bg-dark text-white border-success">
              <CardBody>
                <h5 className="fw-bold">Fullstack Web Developer (Trainee)</h5>
                <p className="text-secondary">2024 - Sekarang</p>

                <hr style={{ borderColor: "#1f1f1f" }} />

                <p className="text-light">
                  Mengembangkan aplikasi web responsif menggunakan React,
                  membangun REST API dengan Node.js & Express, serta melakukan
                  integrasi frontend dan backend untuk menghasilkan sistem yang
                  terstruktur dan efisien.
                </p>
              </CardBody>
            </Card>

            <Card className="bg-dark text-white border-success">
              <CardBody>
                <h5 className="fw-bold">Proyek Pribadi</h5>
                <p className="text-secondary">Berkelanjutan</p>

                <hr style={{ borderColor: "#1f1f1f" }} />

                <p className="text-light">
                  Membangun berbagai proyek seperti dashboard, sistem manajemen
                  data, serta aplikasi berbasis API untuk meningkatkan pemahaman
                  arsitektur aplikasi dan clean code.
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* SKILLS */}
        <h3 className="fw-bold text-center mt-5 mb-4">
          Kemampuan <span className="text-success">Teknis</span>
        </h3>

        <Card className="bg-dark text-white border-success p-4">
          <Row>
            <Col md="6">
              <p className="fw-semibold mb-1">HTML / CSS</p>
              <Progress value={90} color="success" className="mb-3" />

              <p className="fw-semibold mb-1">JavaScript</p>
              <Progress value={85} color="success" className="mb-3" />

              <p className="fw-semibold mb-1">React.js</p>
              <Progress value={80} color="success" />
            </Col>

            <Col md="6">
              <p className="fw-semibold mb-1">Node.js</p>
              <Progress value={75} color="success" className="mb-3" />

              <p className="fw-semibold mb-1">Express.js</p>
              <Progress value={75} color="success" className="mb-3" />

              <p className="fw-semibold mb-1">REST API & Git</p>
              <Progress value={80} color="success" />
            </Col>
          </Row>
        </Card>
      </Container>
    </section>
  );
};

export default Resume;
