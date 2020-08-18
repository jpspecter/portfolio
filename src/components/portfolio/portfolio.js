import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            {/* portfolio-wrapper */}
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-01" title>
                    <img alt="" src="images/portfolio/dinner.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Dinner Decider</h5>
                        <p>Mobile App</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-02" title>
                    <img alt="" src="images/portfolio/fruitninja.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Fruit Ninja Game</h5>
                        <p>Web Development</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-03" title>
                    <img alt="" src="images/portfolio/typingspeed.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Typing Speed Test</h5>
                        <p>Webdesign</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-04" title>
                    <img alt="" src="images/portfolio/ecommerce.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Ecommerce Console</h5>
                        <p>C++, Data Structures</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
            </div> {/* portfolio-wrapper end */}
          </div> {/* twelve columns end */}
          {/* Modal Popup
	      --------------------------------------------------------------- */}
          <div id="modal-01" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-dinner.jpg" alt="" />
            <div className="description-box">
              <h4>Dinner Decider</h4>
              <p>Simple Android app to randomly generate dinner ideas for a fun evening!</p>
              <span className="categories"><i className="fa fa-tag" />Android Development, Kotlin</span>
            </div>
            <div className="link-box">
              <a href="https://github.com/jpspecter/Dinner-Decider">Github</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-01 End */}
          <div id="modal-02" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-fruitninja.jpg" alt="" />
            <div className="description-box">
              <h4>Fruit Ninja Game</h4>
              <p>Website that replicates the popular game using Javascript and jQUery.</p>
              <span className="categories"><i className="fa fa-tag" />Web Development</span>
            </div>
            <div className="link-box">
              <a href="https://github.com/jpspecter/Fruit-Ninja-Game">Github</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-02 End */}
          <div id="modal-03" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-typingspeed.jpg" alt="" />
            <div className="description-box">
              <h4>Typing Speed Test</h4>
              <p>Simple website using Javascript that tests your typing speed.</p>
              <span className="categories"><i className="fa fa-tag" />Web Development</span>
            </div>
            <div className="link-box">
              <a href="https://github.com/jpspecter/Typing-Speed-Test">Github</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-03 End */}
          <div id="modal-04" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-ecommerce.jpg" alt="" />
            <div className="description-box">
              <h4>Ecommerce Console</h4>
              <p>C++ program that acts as a backend for an ecommerce website using Linked Lists</p>
              <span className="categories"><i className="fa fa-tag" />C++</span>
            </div>
            <div className="link-box">
              <a href="https://github.com/jpspecter/ecommerce-console">Github</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-04 End */}
        </div> {/* row End */}
      </section>
      </React.Fragment>
    );
  }
}