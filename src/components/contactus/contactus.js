import React, { Component } from "react";
import MyForm from "./myform";
export default class ContactUs extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="contact">
          <div className="row section-head">
            <div className="two columns header-col">
              <h1>
                <span>Get In Touch</span>
              </h1>
            </div>
            <div className="ten columns">
              <p className="lead">
                If you're interested in hiring me or just want to know more,
                feel free to call or email me. You can do so below:
              </p>
            </div>
          </div>
          <div className="row">
            <div className="eight columns">
              {/* form */}
              <MyForm />
              {/* Form End */}
              {/* contact-warning */}
              <div id="message-warning"> Error boy</div>
              {/* contact-success */}
              <div id="message-success">
                <i className="fa fa-check" />
                Your message was sent, thank you!
                <br />
              </div>
            </div>
            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
                <h4>Address and Phone</h4>
                <p className="address">
                  Sajjaad Francis
                  <br />
                  38A Hardpford Avenue <br />
                  Wynberg, Cape Town
                  <br />
                  <span>076 421 8771</span>
                </p>
              </div>
            </aside>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
