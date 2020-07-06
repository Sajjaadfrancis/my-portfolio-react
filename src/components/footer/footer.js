import React, { Component } from "react";
export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer>
          <div className="row">
            <div className="twelve columns">
              <ul className="social-links">
                <li>
                  <a
                    href="https://twitter.com/Sajjaad63583738"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/sajjaad-francis-01507619b/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/sajjaadfrancis/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-instagram" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://codepen.io/sajjaadfrancis"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-codepen" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Sajjaadfrancis"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-github" />
                  </a>
                </li>
              </ul>
            </div>
            <div id="go-top">
              <a className="smoothscroll" title="Back to Top" href="#home">
                <i className="icon-up-open" />
              </a>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}
