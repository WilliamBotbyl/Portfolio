import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { VscTriangleRight } from "react-icons/vsc";
import { IconContext } from "react-icons";
import nameLogo from "../images/hand-written.png";
import initials from "../images/initials.png";

function About() {
  const [animated, setAnimated] = useState(false);

  const handleAnimation = () => {
    if (window.pageYOffset > 700) {
      setAnimated(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleAnimation);
  });
  return (
    <div id="about" className="about-main" style={{ textAlign: "left" }}>
      <Container fluid>
        <Row>
          <div className="about-header">
            <h1 className="about-title">About Me</h1>
          </div>
        </Row>
        <Row className="justify-content-md-start">
          <Col
            md={{ span: 6, offset: 0 }}
            style={{ marginTop: "50px", marginLeft: "20px" }}
          >
            <p className="p-tag">
              Hi there! I'm Billy, A current Software Engineering student at
              Monmouth University.
              <br /> I am currently studying Javascript, React, Node, Express,
              Java & Spring.
            </p>
            <br />
            <br />
            <p className="p-tag">
              I have been developing mobile apps, and websites for over a year.
              I have become
              <br />
              knowledgable about Java and Javascript. I am fascinated about all
              things technical. I study and try to learn new things related to
              Software Engineering when I have time off from school. Becoming a
              professional software engineer is a dream of mine that I strive
              everyday to make my reality. I look up to people that have made
              software engineering a craft, It's truly art.
            </p>
            <br />
            <p className="p-tag">
              I will be graduating with a B.S. degree in Software Engineering in
              2024.
            </p>
          </Col>
          <Col>
            <div className="stack-skills">
              <Container>
                <h1 className="skills-heading">Tool Box</h1>
                <Row>
                  <Col>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        marginBottom: "20px",
                      }}
                    >
                      <h5
                        style={{
                          order: "2",
                          color: "white",
                        }}
                        className="skills"
                      >
                        JAVA
                      </h5>
                      <IconContext.Provider
                        value={{ color: "red", className: "react-triangle" }}
                      >
                        <VscTriangleRight />
                      </IconContext.Provider>
                    </div>
                  </Col>
                  <Col>
                    <div
                      className="skills"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        marginBottom: "20px",
                      }}
                    >
                      <h5
                        className="skills"
                        style={{
                          order: "2",
                          color: "white",
                        }}
                      >
                        SPRING
                      </h5>
                      <IconContext.Provider
                        value={{ color: "red", className: "react-triangle" }}
                      >
                        <VscTriangleRight />
                      </IconContext.Provider>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div
                      className="skills"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        marginBottom: "20px",
                      }}
                    >
                      <h5
                        style={{
                          order: "2",
                          color: "white",
                        }}
                      >
                        JAVASCRIPT
                      </h5>
                      <IconContext.Provider
                        value={{ color: "red", className: "react-triangle" }}
                      >
                        <VscTriangleRight />
                      </IconContext.Provider>
                    </div>
                  </Col>
                  <Col>
                    <div
                      className="skills"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        marginBottom: "20px",
                      }}
                    >
                      <h5
                        className="skills"
                        style={{
                          order: "2",
                          color: "white",
                        }}
                      >
                        REACT
                      </h5>
                      <IconContext.Provider
                        value={{ color: "red", className: "react-triangle" }}
                      >
                        <VscTriangleRight />
                      </IconContext.Provider>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        marginBottom: "20px",
                      }}
                    >
                      <h5
                        className="skills"
                        style={{
                          order: "2",
                          color: "white",
                        }}
                      >
                        NODE
                      </h5>
                      <IconContext.Provider
                        value={{ color: "red", className: "react-triangle" }}
                      >
                        <VscTriangleRight />
                      </IconContext.Provider>
                    </div>
                  </Col>
                  <Col>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        marginBottom: "20px",
                      }}
                    >
                      <h5
                        className="skills"
                        style={{
                          order: "2",
                          color: "white",
                        }}
                      >
                        EXPRESS
                      </h5>
                      <IconContext.Provider
                        value={{ color: "red", className: "react-triangle" }}
                      >
                        <VscTriangleRight />
                      </IconContext.Provider>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        marginBottom: "20px",
                      }}
                    >
                      <h5
                        className="skills"
                        style={{
                          order: "2",
                          color: "white",
                        }}
                      >
                        MYSQL
                      </h5>
                      <IconContext.Provider
                        value={{ color: "red", className: "react-triangle" }}
                      >
                        <VscTriangleRight />
                      </IconContext.Provider>
                    </div>
                  </Col>
                  <Col>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        marginBottom: "20px",
                      }}
                    >
                      <h5
                        className="skills"
                        style={{
                          order: "2",
                          color: "white",
                        }}
                      >
                        MONGO-DB
                      </h5>
                      <IconContext.Provider
                        value={{ color: "red", className: "react-triangle" }}
                      >
                        <VscTriangleRight />
                      </IconContext.Provider>
                    </div>
                  </Col>
                  <Col>
                    <div style={{ margin: "50px" }}>
                      <img src={nameLogo} alt="my logo" />
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
