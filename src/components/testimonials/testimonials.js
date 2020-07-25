import React, { Component } from "react";
export default class Testimonials extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="testimonials">
          <div className="text-container">
            <div className="row">
              <div className="two columns header-col">
                <h1>
                  <span>Client Testimonials</span>
                </h1>
              </div>
              <div className="ten columns flex-container">
                <div className="flexslider">
                  <ul className="slides">
                    <li>
                      <blockquote>
                        <p>
                          Sajjaad is sociable and well-mannered. He has
                          demonstrated strong analytical skills and attention to
                          detail in his projects during the course.
                        </p>
                        <cite>
                          Godwin Dzvapatsva | Head of Curriculum and Learning
                        </cite>
                      </blockquote>
                    </li>{" "}
                    <li>
                      <blockquote>
                        <p>
                          Sajjaad is a great person to have on one's team. He
                          has great work ethics and problem solving skills. He
                          analyzes things well and takes action to get things
                          done, with all those qualities, it relates in his work
                          as a developer and his daily routine making the
                          journey hardworking yet enjoyable at the same time
                        </p>
                        <cite>Chad Hoosain | Peer</cite>
                      </blockquote>
                    </li>{" "}
                    <li>
                      <blockquote>
                        <p>
                          If you're looking for a hardworking and helpful
                          employee, Sajjaad is your man. His willing to help
                          wherever he can. He is very talented when it comes to
                          programming and always puts in 100% effort with
                          everything he does.
                        </p>
                        <cite>Zubair De Vries | Peer</cite>
                      </blockquote>
                    </li>{" "}
                  </ul>
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>
      </React.Fragment>
    );
  }
}
