import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";

import profile from "../../assets/image/profile.jpeg";

const MyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  const toggle = () => setIsOpen(!isOpen);

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "resume", label: "Resume" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <Navbar
      dark
      expand="md"
      fixed="top"
      style={{
        background: "#0b0b0b",
        borderBottom: "1px solid #1f1f1f",
      }}
    >
      <Container className="d-flex align-items-center">
        <NavbarBrand href="#home">
          <img
            src={profile}
            alt="logo"
            style={{
              height: "45px",
              width: "45px",
              objectFit: "cover",
              borderRadius: "50%",
              border: "2px solid #00e676",
            }}
          />
        </NavbarBrand>

        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto align-items-center" navbar>
            {menuItems.map((item) => (
              <NavItem key={item.id}>
                <NavLink
                  href={`#${item.id}`}
                  onClick={() => setActive(item.id)}
                  className={`px-3 ${
                    active === item.id ? "text-success fw-bold" : "text-white"
                  }`}
                  style={{
                    transition: "0.3s",
                  }}
                >
                  {item.label}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
