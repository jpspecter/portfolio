import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="resume">
        {/* Education
      ----------------------------------------------- */}
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>University of Texas at Dallas</h3>
                <p className="info">B.S. in Computer Science<span>•</span> <em className="date">Aug 2018 - Present</em></p>
                <p>
                  <li>Junior, Computer Science Major</li>
                  <li>Collegium V Honors Scholar</li>
                  <li>Recipient of Academic Excellence Scholarship at the Honors level</li>
                  <li>Dean's List: Fall 2018, Spring 2019, Fall 2019, Spring 2020</li>
                  <li>GPA: 4.0</li>
                  <li>Expected Graduation: May 2022</li>
                </p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Education */}
        {/* Work
      ----------------------------------------------- */}
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>NCR Corporation</h3>
                <p className="info">Software Engineering Intern<span>•</span> <em className="date">May 2020 - Aug 2020</em></p>
                <p>
                  <li>Integrated Flybuy Geolocation SDK into NCR’s Android App and Media Player</li>
                  <li>Used Apache Kafka and .NET for backend functionality</li>
                  <li>Built a strong relationship with my peers in this virtual internship using tools like Teams</li>
                </p>
              </div>
            </div> {/* item end */}

            <div className="row item">
              <div className="twelve columns">
                <h3>Foundation Communities</h3>
                <p className="info">Software Engineer<span>•</span> <em className="date">Aug 2019  - Dec 2019</em></p>
                <p>
                  <li>Developed a financial literacy app using React Native and Firebase</li>
                  <li>Added a maps functionality to the app using Google Maps API and React Native</li>
                  <li>Gave a UI redesign to the app based on customer specification</li>
                </p>
              </div>
            </div> {/* item end */}

            <div className="row item">
              <div className="twelve columns">
                <h3>University of Texas at Dallas</h3>
                <p className="info">Orientation Leader<span>•</span> <em className="date">May 2019 - Aug 2019</em></p>
                <p>
                  <li>Worked with 50 student leaders to assist 4,000 new students during their transition to UTD</li>
                  <li>Provided services and consulting specific to student resources</li>
                  <li>Acted as a catalyst for new student development and success</li>
                </p>

                
                <p className="info">Undergraduate Research Assistant<span>•</span> <em className="date">Sept 2019 - Present</em></p>
                <p>
                  <li>Research project to analyze the correlation the between campaign funding and loans</li>
                  <li>Cleaned and analyzed the dataset using Pandas, Scikit-learn and Google Refine</li>
                  <li>Worked in a team of 11 student researchers to research relevant information</li>
                </p>

              </div>
            </div> {/* item end */}

          </div> {/* main-col end */}
        </div> {/* End Work */}
        {/* Skills
      ----------------------------------------------- */}
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <li>Programming Languages: Java, C, C++, Python, JavaScript, HTML, CSS, C#, SQL, Kotlin</li>
            <li>Tools: Amazon Web Services, Git, Netlify, Heroku, Firebase, MS Office 365, Apache Kafka</li>
            <li>Frameworks: React Native, Flask, .NET</li>
            <div className="bars">
              <ul className="skills">
                <li><span className="bar-expand photoshop" /><em>Python</em></li>
                <li><span className="bar-expand illustrator" /><em>Kotlin</em></li>
                <li><span className="bar-expand wordpress" /><em>Amazon Web Services</em></li>
                <li><span className="bar-expand css" /><em>MySQL</em></li>
                <li><span className="bar-expand html5" /><em>.NET</em></li>
                <li><span className="bar-expand jquery" /><em>React Native</em></li>
              </ul>
            </div>{/* end skill-bars */}
          </div> {/* main-col end */}
        </div> {/* End skills */}
      </section> {/* Resume Section End*/}
      </React.Fragment>
    );
  }
}