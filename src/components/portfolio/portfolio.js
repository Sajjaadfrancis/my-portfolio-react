import React, { Component } from "react";
export default class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="portfolio">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Grab some more snacks, here are a few of my projects:</h1>
              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01" title>
                      <img
                        alt=""
                        src="https://icons-for-free.com/iconfiles/png/512/code+collaboration+github+network+round+social+icon-1320086084536018107.png"
                      />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Github Finder</h5>
                          <p>React</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="icon-plus" />
                      </div>
                    </a>
                  </div>
                </div>{" "}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-02" title>
                      <img
                        alt=""
                        src="https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/contacts-512.png"
                      />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Contact Keeper</h5>
                          <p>React</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="icon-plus" />
                      </div>
                    </a>
                  </div>
                </div>{" "}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-03" title>
                      <img
                        alt=""
                        src="https://www.shareicon.net/data/512x512/2016/07/13/795247_server_512x512.png"
                      />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>IT Logger</h5>
                          <p>React</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="icon-plus" />
                      </div>
                    </a>
                  </div>
                </div>{" "}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-04" title>
                      <img
                        alt=""
                        src="https://www.cryptoestate.net/img/blockchain.png"
                      />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Basic Blockchain</h5>
                          <p>Python</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="icon-plus" />
                      </div>
                    </a>
                  </div>
                </div>{" "}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-05" title>
                      <img
                        alt=""
                        src="https://images.vexels.com/media/users/3/157585/isolated/preview/7bc98374c3d1c1a347c9c69a9d1f3e00-speech-bubble-icon-by-vexels.png"
                      />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Chatsapp</h5>
                          <p>React</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="icon-plus" />
                      </div>
                    </a>
                  </div>
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div id="modal-01" className="popup-modal mfp-hide">
              <img
                className="scale-with-grid"
                src="https://icons-for-free.com/iconfiles/png/512/code+collaboration+github+network+round+social+icon-1320086084536018107.png"
                alt=""
              />
              <div className="description-box">
                <h4>Github Finder</h4>
                <p>
                  Search any Github profile, displays the user's details,
                  followers, and repos.
                </p>
                <span className="categories">
                  <i className="fa fa-tag" />
                  React
                </span>
              </div>
              <div className="link-box">
                <a
                  href="https://githubfinder929292.netlify.app/"
                  target="_blank"
                >
                  <i className="fa fa-chrome" />
                </a>
                <a
                  href="https://github.com/Sajjaadfrancis/github-finder"
                  target="_blank"
                >
                  <i className="fa fa-github" />
                </a>
                <a className="popup-modal-dismiss">
                  <i className="fa fa-times" />
                </a>
              </div>
            </div>
            <div id="modal-02" className="popup-modal mfp-hide">
              <img
                className="scale-with-grid"
                src="https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/contacts-512.png"
                alt=""
              />
              <div className="description-box">
                <h4>Contact Keeper</h4>
                <p>
                  Full stack MERN contact manager with React hooks, context, JWT
                  authentication.
                </p>
                <span className="categories">
                  <i className="fa fa-tag" />
                  React
                </span>
              </div>
              <div className="link-box">
                <a
                  href="https://mysterious-ravine-24356.herokuapp.com/"
                  target="_blank"
                >
                  <i className="fa fa-chrome" />
                </a>
                <a
                  href="https://github.com/Sajjaadfrancis/contact-keeper"
                  target="_blank"
                >
                  <i className="fa fa-github" />
                </a>
                <a className="popup-modal-dismiss">
                  <i className="fa fa-times" />
                </a>
              </div>
            </div>
            <div id="modal-03" className="popup-modal mfp-hide">
              <img
                className="scale-with-grid"
                src="https://www.shareicon.net/data/512x512/2016/07/13/795247_server_512x512.png"
                alt=""
              />
              <div className="description-box">
                <h4>IT Logger</h4>
                <p>
                  Track IT department tasks and issues. Uses JSON-Server as a
                  mock backend.
                </p>
                <span className="categories">
                  <i className="fa fa-tag" />
                  React
                </span>
              </div>
              <div className="link-box">
                <a
                  href="https://Sajjaadfrancis.github.io/it-logger/"
                  target="_blank"
                >
                  <i className="fa fa-chrome" />
                </a>
                <a
                  href="https://github.com/Sajjaadfrancis/it-logger"
                  target="_blank"
                >
                  <i className="fa fa-github" />
                </a>
                <a className="popup-modal-dismiss">
                  <i className="fa fa-times" />
                </a>
              </div>
            </div>
            <div id="modal-04" className="popup-modal mfp-hide">
              <img
                className="scale-with-grid"
                src="https://www.cryptoestate.net/img/blockchain.png"
                alt=""
              />
              <div className="description-box">
                <h4>Basic Blockchain</h4>
                <p>A basic blockchain I built in Python.</p>
                <span className="categories">
                  <i className="fa fa-tag" />
                  Python
                </span>
              </div>
              <div className="link-box">
                <a
                  href="https://github.com/Sajjaadfrancis/python-blockchain"
                  target="_blank"
                >
                  <i className="fa fa-github" />
                </a>
                <a className="popup-modal-dismiss">
                  <i className="fa fa-times" />
                </a>
              </div>
            </div>
            <div id="modal-05" className="popup-modal mfp-hide">
              <img
                className="scale-with-grid"
                src="https://images.vexels.com/media/users/3/157585/isolated/preview/7bc98374c3d1c1a347c9c69a9d1f3e00-speech-bubble-icon-by-vexels.png"
                alt=""
              />
              <div className="description-box">
                <h4>Chatsapp</h4>
                <p>A chat app built with React and Firebase.</p>
                <span className="categories">
                  <i className="fa fa-tag" />
                  React
                </span>
              </div>
              <div className="link-box">
                <a
                  href="https://github.com/Sajjaadfrancis/react-chat"
                  target="_blank"
                >
                  <i className="fa fa-github" />
                </a>
                <a className="popup-modal-dismiss">
                  <i className="fa fa-times" />
                </a>
              </div>
            </div>
          </div>{" "}
        </section>
      </React.Fragment>
    );
  }
}
