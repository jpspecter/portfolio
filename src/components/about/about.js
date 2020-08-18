import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic.jpg" alt="" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p> <b>I am a Collegium V Scholar at the University of Texas at Dallas majoring in Computer
              Science. I am a quick learner, interested in technological advancements 
              and have a meticulous work ethic. I have multifaceted interests 
              and strive to be the best version of myself, every day. </b>
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>Janam Parikh</span><br />
                  <span>405 Pleasant Valley Lane<br />
                    Richardson, TX 75080 US
                  </span><br />
                  <span>(469) 395-1386</span><br />
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="https://drive.google.com/file/d/1Cu-BirU_3Je2Uulpw5NdN26s_wKX-Heo/view?usp=sharing" className="button"><i className="fa fa-download" />Download Resume</a>
                </p>
              </div>
            </div> {/* end row */}
          </div> {/* end .main-col */}
        </div>
      </section>
      </React.Fragment>
    );
  }
}