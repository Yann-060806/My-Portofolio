import React from "react";
import { Container, Row, Col, Button, Badge } from "reactstrap";

import project1 from "../../assets/image/gambar1.png";
import project2 from "../../assets/image/gambar2.png";
import project3 from "../../assets/image/gambar3.png";

const projectsData = [
  {
    title: "Landing Page Modern",
    image: project1,
    description:
      "Landing page modern yang dibuat pada materi Web Lanjutan menggunakan HTML, CSS, serta implementasi LocalStorage untuk menyimpan data di browser.",
    tech: ["HTML", "CSS", "LocalStorage"],
    github: "#",
    demo: "#",
  },
  {
    title: "Company Profile Website",
    image: project2,
    description:
      "Website company profile statis dengan tampilan bersih dan responsive, dikembangkan menggunakan HTML dan CSS.",
    tech: ["HTML", "CSS", "Responsive"],
    github: "#",
    demo: "#",
  },
  {
    title: "Fullstack REST API App",
    image: project3,
    description:
      "Aplikasi fullstack berbasis REST API yang menghubungkan frontend dan backend untuk mengelola data secara dinamis.",
    tech: ["React", "Node.js", "Express"],
    github: "#",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      style={{
        background: "#0b0b0b",
        color: "white",
        padding: "110px 0",
      }}
    >
      <Container>
        <h1 className="text-center fw-bold mb-2">
          My <span style={{ color: "#22c55e" }}>Projects</span>
        </h1>

        <p
          className="text-center mb-5"
          style={{ color: "#9ca3af", maxWidth: "600px", margin: "0 auto" }}
        >
          Beberapa proyek terbaik yang telah saya kerjakan dengan fokus pada
          performa, tampilan modern, dan pengalaman pengguna.
        </p>

        <Row>
          {projectsData.map((project, index) => (
            <Col lg="4" md="6" key={index} className="mb-4">
              <div className="project-card">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                />

                <div className="overlay">
                  <h5 className="fw-bold mb-2">{project.title}</h5>

                  <p className="project-desc">{project.description}</p>

                  <div className="mb-3">
                    {project.tech.map((item, i) => (
                      <Badge key={i} className="tech-badge">
                        {item}
                      </Badge>
                    ))}
                  </div>

                  <div className="d-flex gap-2">
                    <Button
                      size="sm"
                      style={{
                        background: "#22c55e",
                        border: "none",
                        fontWeight: "500",
                      }}
                      href={project.demo}
                      target="_blank"
                    >
                      Live Demo
                    </Button>

                    <Button
                      size="sm"
                      outline
                      style={{
                        borderColor: "white",
                        color: "white",
                        fontWeight: "500",
                      }}
                      href={project.github}
                      target="_blank"
                    >
                      GitHub
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <style>
        {`
        .project-card{
            position:relative;
            border-radius:22px;
            overflow:hidden;
            cursor:pointer;
            background:#111;
            box-shadow:0 10px 30px rgba(0,0,0,0.6);
            transition:0.4s;
        }

        .project-card:hover{
            transform:translateY(-10px);
            box-shadow:0 20px 40px rgba(34,197,94,0.25);
        }

        .project-img{
            width:100%;
            height:260px;
            object-fit:cover;
            transition:0.6s;
        }

        .project-card:hover .project-img{
            transform:scale(1.08);
        }

        .overlay{
            position:absolute;
            inset:0;
            padding:22px;
            display:flex;
            flex-direction:column;
            justify-content:flex-end;
            background:linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.2));
            opacity:0;
            transition:0.4s;
        }

        .project-card:hover .overlay{
            opacity:1;
        }

        .project-desc{
            font-size:14px;
            color:#d1d5db;
            line-height:1.5;
            margin-bottom:12px;
        }

        .tech-badge{
            background:#22c55e !important;
            margin-right:6px;
            font-weight:500;
        }

        /* MOBILE AUTO SHOW */
        @media(max-width:768px){
            .overlay{
                opacity:1;
            }
        }
        `}
      </style>
    </section>
  );
};

export default Projects;
