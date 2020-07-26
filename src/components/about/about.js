import React, { Component } from "react";
export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="about">
          <div className="row">
            <div className="three columns">
              <img className="profile-pic" src="images/me.jpg" alt="" />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>
                I am a problem solver, quick thinker, and work magic behind a
                PC. I am friendly, have a great sense of humour, and get along
                with everyone. I love learning new things, especially technology
                wise. I also love keeping up to date with new apps, frameworks,
                and languages.
              </p>
              <h2>Where My Passion For Tech Came From</h2>
              <p>
                It first started when I got my first mobile phone and PC. I was
                always interested in how apps were built and always dreamt of
                building my own one day. I've always kept up to date with the
                latest tech whether it be scouting the web or watching tech
                Youtube channels. I love both software and hardware when it
                comes to PCs.
              </p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Hobbies</h2>
                  <p className="address">
                    <span>• Golf</span>
                    <br />
                    <span>
                      • Soccer, Fives
                      <br />• Mobile, PC, and Console Gaming
                    </span>
                    <br />
                    <span>• Morning and Sunset Hikes</span>
                    <br />
                    <span>• Jogging</span>
                  </p>
                </div>
              </div>{" "}
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>Sajjaad Francis</span>
                    <br />
                    <span>
                      38A Harpford Avenue
                      <br />
                      Wynberg, Cape Town
                    </span>
                    <br />
                    <span>076 421 8771</span>
                    <br />
                    <span>sajjaadfrancis@gmail.com</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href="sajjaadfranciscv.docx" className="button">
                      <i className="fa fa-download" />
                      Resume
                    </a>
                  </p>
                </div>
              </div>{" "}
            </div>{" "}
          </div>
        </section>
      </React.Fragment>
    );
  }
}
