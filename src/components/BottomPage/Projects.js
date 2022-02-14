import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Cards from "../Cards/Cards";
import dev from "../images/development.png";
import uix from "../images/ux.png";
import githubP from "../images/github.png";
import {
  AiFillHome,
  AiTwotonePhone,
  AiOutlineCopyrightCircle,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { IconContext } from "react-icons";

function Projects() {
  const calender = "https://github.com/WilliamBotbyl/Java-Calender";
  const calculator = "https://github.com/WilliamBotbyl/Tip-Calculator-Java";
  const portfolio = "https://github.com/WilliamBotbyl/Portfolio/tree/master";
  const sudokoSolver = "https://github.com/WilliamBotbyl/Sudoko-Solver";
  const seeMore = "https://github.com/WilliamBotbyl";

  const toCalender = () => {
    window.location.href = calender;
  };
  const toCalc = () => {
    window.location.href = calculator;
  };
  const toPortfolio = () => {
    window.location.href = portfolio;
  };
  const toSudoko = () => {
    window.location.href = sudokoSolver;
  };
  const seeMoreBtn = () => {
    window.location.href = seeMore;
  };

  return (
    <div className="projects-section">
      <Container fluid>
        <Row>
          <Col>
            <div className="project-header">
              <h2 className="project-title" style={{ color: "white" }}>
                What I Do
              </h2>
            </div>
            <p className="quote">
              “Experience is the name everyone gives to their mistakes.”
            </p>
            <div
              className="what-i-do"
              style={{
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Cards
                title="Mobile Developer"
                body="For now I have only created a few small mobile applications using React Native. Since I am in the process of learning Java through school, I would like to dive into developing android apps."
                Img={dev}
              />
              <Cards
                title="Web Developer"
                body="Currently, if I'm not in school or working, I am working on improving my web development skills along with my knowledge of all things web development. "
                Img={uix}
              />
              <Cards
                title="Open-source Contributor"
                body="If you'd like, you can check out my github. This is where I spend a majority of my time admiring other peoples skills and dedication."
                Img={githubP}
              />
            </div>
            <div className="project-section">
              <div style={{ textAlign: "center" }}>
                <h2 id="projects" className="project-title">
                  Projects
                </h2>
                <p className="project-description">
                  These are the projects I have completed so far
                </p>
              </div>
              <div className="scroll-media">
                <div className="media-element" onClick={toSudoko}>
                  <h3 style={{ color: "#ffffff", marginTop: " 10px" }}>
                    Sudoko Solver
                  </h3>
                  <p
                    style={{
                      color: "#ffffff",
                      fontFamily: "Work Sans, sans-serif",
                    }}
                  >
                    This is a terminal application that allows you to solve any
                    9x9 Sudoko Puzzle. It's made in Java.
                  </p>
                </div>
                <div className="media-element" onClick={toCalc}>
                  <h3 style={{ color: "#ffffff", marginTop: " 10px" }}>
                    Java Calculator
                  </h3>
                  <p
                    style={{
                      color: "#ffffff",
                      fontFamily: "Work Sans, sans-serif",
                    }}
                  >
                    This is a simple calculator made in java. It is a terminal
                    application.
                  </p>
                </div>
                <div className="media-element" onClick={toCalender}>
                  <h3 style={{ color: "#ffffff", marginTop: " 10px" }}>
                    Java Calender
                  </h3>
                  <p
                    style={{
                      color: "#ffffff",
                      fontFamily: "Work Sans, sans-serif",
                    }}
                  >
                    This is a terminal application that allows you to enter any
                    month and year of your choice, and it will tell you exactly
                    how many days where in that month, the program takes into
                    account leap years.
                  </p>
                </div>
                <div className="media-element" onClick={toCalc}>
                  <h3 style={{ color: "#ffffff", marginTop: " 10px" }}>
                    Java Tip Calculator
                  </h3>
                  <p
                    style={{
                      color: "#ffffff",
                      fontFamily: "Work Sans, sans-serif",
                    }}
                  >
                    This is a application that prompts the use to enter a dinner
                    bill, and tells the customer the desired tip amount and
                    adjusts the total amount of the bill to include the tip.
                  </p>
                </div>
                <div className="media-element" onClick={toPortfolio}>
                  <h3 style={{ color: "#ffffff", marginTop: " 10px" }}>
                    My Portfolio
                  </h3>
                  <p
                    style={{
                      color: "#ffffff",
                      fontFamily: "Work Sans, sans-serif",
                    }}
                  >
                    This is the source code of this portfolio.
                  </p>
                </div>
              </div>
              <Button onClick={seeMoreBtn} variant="link" className="btn">
                See More
              </Button>
            </div>
            {/*            <------------------ CONTACT SECTION --------------->          */}
            <div className="contact-section">
              <div style={{ marginTop: "8vh" }}>
                <h2 className="project-title" style={{ color: "white" }}>
                  Contact
                </h2>

                <p className="project-description">Contact Information Below</p>
              </div>
              <Container>
                <IconContext.Provider
                  value={{
                    size: "6rem",
                    color: "rgb(163, 52, 24)",
                  }}
                >
                  <div
                    className="contact-card-media"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-around",
                    }}
                  >
                    <div
                      className="contact-card"
                      style={{
                        height: "235px",
                        width: "260px",
                        backgroundColor: "#1b1b1b",
                        marginTop: "8px",
                        borderRadius: "8px 8px 8px 8px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <div id="contact" style={{ marginTop: "20px" }}>
                        <AiFillHome />
                      </div>
                      <h4 style={{ color: "#ffffff" }}>Location</h4>
                      <p
                        style={{
                          color: "#ffffff",
                          fontFamily: "Work Sans, sans-serif",
                        }}
                      >
                        Longbranch, NJ
                      </p>
                    </div>
                    <div
                      className="contact-card"
                      style={{
                        height: "235px",
                        width: "260px",
                        backgroundColor: "#1b1b1b",
                        marginTop: "8px",
                        borderRadius: "8px 8px 8px 8px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <div style={{ marginTop: "20px" }}>
                        <AiTwotonePhone />
                      </div>
                      <h4 style={{ color: "#ffffff" }}>Phone #</h4>
                      <p
                        style={{
                          color: "#ffffff",
                          fontFamily: "Work Sans, sans-serif",
                        }}
                      >
                        (732)-766-4049
                      </p>
                    </div>
                    <div
                      className="contact-card"
                      style={{
                        height: "235px",
                        width: "260px",
                        backgroundColor: "#1b1b1b",
                        marginTop: "8px",
                        borderRadius: "8px 8px 8px 8px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <div style={{ marginTop: "20px" }}>
                        <MdEmail />
                      </div>
                      <h4 style={{ color: "#ffffff" }}>Email</h4>
                      <p
                        style={{
                          color: "#ffffff",
                          fontFamily: "Work Sans, sans-serif",
                        }}
                      >
                        billybotbyl81@yahoo.com
                      </p>
                    </div>
                  </div>
                </IconContext.Provider>
              </Container>
            </div>
            {/*        <------------------ FOOTER SECTION --------------->           */}
          </Col>
        </Row>
      </Container>
      <IconContext.Provider
        value={{
          color: "#8f8585",
          size: ".8rem",
        }}
      >
        <div className="footer-section">
          <AiOutlineCopyrightCircle />
          <p className="copyright-ptag">All Right Reserved by William Botbyl</p>
        </div>
      </IconContext.Provider>
    </div>
  );
}

export default Projects;
