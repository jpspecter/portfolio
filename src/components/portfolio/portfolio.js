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
                        <p>Android App Development</p>
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
                    <img alt="" src="images/portfolio/game.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Game JDBC Project</h5>
                        <p>Database Systems</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-04" title>
                    <img alt="" src="images/portfolio/iris.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>ML Iris Project</h5>
                        <p>Machine learning</p>
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
              <h4>Fruit Ninja Project</h4>
              <p>Website that replicates the popular game using Javascript and jQUery.</p>
              <span className="categories"><i className="fa fa-tag" />Web Development</span>
            </div>
            <div className="link-box">
              <a href="https://github.com/jpspecter/Fruit-Ninja-Game">Github</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-02 End */}
          <div id="modal-03" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-game.jpg" alt="" />
            <div className="description-box">
              <h4>Game JDBC Project</h4>
              <p>Built a JDBC Project to create database for a simple game application</p>
              <span className="categories"><i className="fa fa-tag" />Java, SQL</span>
            </div>
            <div className="link-box">
              <a href="https://github.com/jpspecter/Game-JDBC-Project">Github</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-03 End */}
          <div id="modal-04" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-iris.jpg" alt="" />
            <div className="description-box">
              <h4>Machine Learning Iris Project</h4>
              <p>Wrote a script in R to analyze and visualize data from the Iris dataset</p>
              <span className="categories"><i className="fa fa-tag" />R</span>
            </div>
            <div className="link-box">
              <a href="https://github.com/jpspecter/Iris-ML-Project">Github</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-04 End */}
        </div> {/* row End */}
      </section>
      </React.Fragment>
    );
  }
}