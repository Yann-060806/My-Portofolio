import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { FaPhone, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const contacts = [
  {
    icon: <FaPhone size={24} />,
    label: "Phone",
    value: "+62 895-6397-30206",
    link: "https://wa.me/62895639730206",
  },
  {
    icon: <FaInstagram size={24} />,
    label: "Instagram",
    value: "@hnzlh_z",
    link: "https://instagram.com/hnzlh_z",
  },
  {
    icon: <FaGithub size={24} />,
    label: "GitHub",
    value: "github.com/yann-060806",
    link: "https://github.com/yann-060806",
  },
  {
    icon: <FaLinkedin size={24} />,
    label: "LinkedIn",
    value: "linkedin.com/in/hanzhalah-zulyan",
    link: "https://www.linkedin.com/in/hanzhalah-zulyan/",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-5 bg-black text-white">
      <Container>
        <h2 className="text-center text-success mb-5">Contact Me</h2>

        <Row className="g-4">
          {contacts.map((contact, index) => (
            <Col md="6" lg="3" key={index}>
              <Card
                className="text-center bg-dark text-white border-success"
                style={{ cursor: "pointer" }}
                onClick={() => window.open(contact.link, "_blank")}
              >
                <CardBody>
                  <div className="mb-3 text-success">{contact.icon}</div>
                  <h5>{contact.label}</h5>
                  <p className="mb-0">{contact.value}</p>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
