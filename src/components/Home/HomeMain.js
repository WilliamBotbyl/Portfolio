import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../NavBar/Navbar";
import Type from "./Type";
import { VscTriangleRight } from "react-icons/vsc";
import { FaGooglePlay, FaLinkedinIn } from "react-icons/fa";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";
import { IconContext } from "react-icons";
import pic from "../images/myAvatar.png";

function HomeMain() {
  return (
    <div id="home" className="home-main-container">
      <Navbar />
      <Container style={{ marginLeft: "90px" }}>
        <Row>
          <Col>
            <div className="getInRow">
              <div>
                <div className="intro-wrapper">
                  <div className="change-on-resize">
                    <h1
                      style={{ paddingBottom: 15 }}
                      className="heading animate__animated animate__zoomInDown"
                    >
                      {/*  className="animate__animated animate__hinge" ----> i can change the hinge to animate different ways*/}
                      Welcome to my portfolio!
                      <span
                        className="wave"
                        role="img"
                        aria-labelledby="wave"
                        style={{ size: 20 }}
                      >
                        👋🏻
                      </span>
                    </h1>
                    <h1 className="first-name  animate__animated animate__zoomInDown">
                      William
                    </h1>
                    <h1 className="last-name animate__animated animate__zoomInUp">
                      Botbyl
                    </h1>
                    <div
                      className="heading animate__animated animate__zoomInUp"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <IconContext.Provider
                        value={{
                          color: "red",
                          size: "1.5rem",
                        }}
                      >
                        <VscTriangleRight />
                      </IconContext.Provider>
                      <Type />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        marginTop: "2.5rem",
                        marginLeft: "30px",
                      }}
                    >
                      <ul className="social-links">
                        <li className="social-icon">
                          <a
                            href="https://github.com/WilliamBotbyl"
                            className="icon-colour home-social-icons"
                          >
                            <IconContext.Provider
                              value={{
                                size: "2.5rem",
                              }}
                            >
                              <AiFillGithub />
                            </IconContext.Provider>
                          </a>
                        </li>
                        <li className="social-icon">
                          <a
                            href="https://www.linkedin.com/in/billy-botbyl-853613220/"
                            className="icon-colour home-social-icons"
                          >
                            <IconContext.Provider
                              value={{
                                size: "2.0rem",
                              }}
                            >
                              <FaLinkedinIn />
                            </IconContext.Provider>
                          </a>
                        </li>
                        <li className="social-icon">
                          <a href="/" className="icon-colour home-social-icons">
                            <IconContext.Provider
                              value={{
                                size: "2.5rem",
                              }}
                            >
                              <AiFillTwitterCircle />
                            </IconContext.Provider>
                          </a>
                        </li>
                        <li className="social-icon">
                          <a href="/" className="icon-colour home-social-icons">
                            <IconContext.Provider
                              value={{
                                size: "2.5rem",
                              }}
                            >
                              <AiFillInstagram />
                            </IconContext.Provider>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="right-main-home" style={{ marginTop: "10vh" }}>
              <div>
                <img src={pic} alt="something" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomeMain;
