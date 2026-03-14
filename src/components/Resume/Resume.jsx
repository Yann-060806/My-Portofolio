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
        <h1 className="fw-bold text-center mb-2">
          Resume <span className="text-success">Saya</span>
        </h1>

        <p className="text-center text-secondary mb-5">
          Ringkasan pendidikan, pengalaman, dan kemampuan teknis yang saya
          miliki.
        </p>

        <Row>
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
                  Fokus mempelajari pengembangan web modern mulai dari frontend
                  menggunakan React.js hingga backend menggunakan Node.js,
                  Express.js, dan database MySQL.
                </p>
              </CardBody>
            </Card>

            <Card className="bg-dark text-white border-success">
              <CardBody>
                <h5 className="fw-bold">MA Quantum IDEA Bekasi</h5>
                <span className="text-success fw-semibold">Jurusan IPA</span>
                <p className="text-secondary">2021 - 2024</p>

                <hr style={{ borderColor: "#1f1f1f" }} />

                <p className="text-light">
                  Menempuh pendidikan menengah atas jurusan Ilmu Pengetahuan
                  Alam (IPA), sekaligus membangun pola pikir analitis yang
                  menjadi dasar dalam memahami logika pemrograman dan teknologi.
                </p>
              </CardBody>
            </Card>
          </Col>

          <Col md="6">
            <h4 className="fw-bold mb-4 text-success d-flex align-items-center gap-2">
              <FaBriefcase /> Pengalaman
            </h4>

            <Card className="mb-4 bg-dark text-white border-success">
              <CardBody>
                <h5 className="fw-bold">Fullstack Web Developer (Trainee)</h5>
                <p className="text-secondary">2025 - Sekarang</p>

                <hr style={{ borderColor: "#1f1f1f" }} />

                <p className="text-light">
                  Mengembangkan aplikasi web menggunakan React.js, Node.js,
                  Express.js, dan MySQL dengan pendekatan clean code dan REST
                  API.
                </p>
              </CardBody>
            </Card>

            <Card className="bg-dark text-white border-success">
              <CardBody>
                <h5 className="fw-bold">Proyek Pribadi</h5>
                <p className="text-secondary">Berkelanjutan</p>

                <hr style={{ borderColor: "#1f1f1f" }} />

                <p className="text-light">
                  Membuat berbagai proyek seperti dashboard admin, CRUD system,
                  autentikasi login, upload file, dan integrasi API.
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>

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

              <p className="fw-semibold mb-1">MySQL & Git</p>
              <Progress value={80} color="success" />
            </Col>
          </Row>
        </Card>
      </Container>
    </section>
  );
};

export default Resume;
