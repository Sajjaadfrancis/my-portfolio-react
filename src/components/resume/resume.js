import React, { Component } from "react";
export default class Resume extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="resume">
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>Islamia College</h3>
                  <p className="info">
                    High School <span>•</span>{" "}
                    <em className="date">2010 - 2014</em>
                  </p>
                  <p>Matriculated in 2014 from Islamia College.</p>
                </div>
              </div>{" "}
              <div className="row item">
                <div className="twelve columns">
                  <h3>Varsity College</h3>
                  <p className="info">
                    Software Development <span>•</span>{" "}
                    <em className="date">2016 - 2018</em>
                  </p>
                  <p>
                    Spent two years studying software development with the main
                    languages being Java and C#.
                  </p>
                </div>
              </div>{" "}
              <div className="row item">
                <div className="twelve columns">
                  <h3>Life Choices</h3>
                  <p className="info">
                    Software Development <span>•</span>{" "}
                    <em className="date">Feb 2020 - Aug 2020</em>
                  </p>
                  <p>
                    6 month coding bootcamp with the main languages being
                    HTML/CSS, JavaScript and Python.
                  </p>
                </div>
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Work</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>Alpha Zulu Projects</h3>
                  <p className="info">
                    Assistant <span>•</span>{" "}
                    <em className="date">Feb 2015 - Nov 2015</em>
                  </p>
                  <p>
                    Spent some time job shadowing at an architectural company.
                    Learnt how to draw up plans using AutoCad. Site surveyed
                    many different Engen One Stops around the Western Province.
                  </p>
                </div>
              </div>{" "}
              <div className="row item">
                <div className="twelve columns">
                  <h3>Amazon</h3>
                  <p className="info">
                    Amazon Business Customer Service Associate <span>•</span>{" "}
                    <em className="date">May 2019 - Jan 2020</em>
                  </p>
                  <p>
                    Spent a few months at Amazon receiving calls, chats, and
                    emails from Amazon's business customers, solving any
                    problems which were account related, product related,
                    payment related, or tax related.
                  </p>
                </div>
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <p>
                Throughout my programming journey I have learnt many skills.
                Below are my skill set statistics:
              </p>
              <div className="bars">
                <ul className="skills">
                  <li>
                    <span className="bar-expand html" />
                    <em>HTML</em>
                  </li>
                  <li>
                    <span className="bar-expand css" />
                    <em>CSS</em>
                  </li>
                  <li>
                    <span className="bar-expand javascript" />
                    <em>JavaScript</em>
                  </li>
                  <li>
                    <span className="bar-expand react" />
                    <em>React</em>
                  </li>
                  <li>
                    <span className="bar-expand python" />
                    <em>Python</em>
                  </li>
                  <li>
                    <span className="bar-expand mysql" />
                    <em>MySql</em>
                  </li>
                </ul>
              </div>
            </div>{" "}
          </div>{" "}
        </section>
      </React.Fragment>
    );
  }
}
