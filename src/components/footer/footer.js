import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              <li><a href="https://www.facebook.com/janam.parikh.07"><i className="fa fa-facebook" /></a></li>
              <li><a href="https://www.linkedin.com/in/parikhjanam/"><i className="fa fa-linkedin" /></a></li>
              <li><a href="https://www.instagram.com/janam_07/?hl=en"><i className="fa fa-instagram" /></a></li>
              <li><a href="https://github.com/jpspecter"><i className="fa fa-github" /></a></li>
              
            </ul>
            <ul className="copyright">
              <li>Design by Janam Parikh</li>   
            </ul>
          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>
      </footer>
      </React.Fragment>
    );
  }
}