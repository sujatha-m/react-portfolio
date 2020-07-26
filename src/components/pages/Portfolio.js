import React from 'react'
import Project from "../Projects/index"
import Container from "../Container/index"
import Row from "../Row/index"
import '../../App.css'

function Portfolio(){
      return(
        
          <Container>
          <section class="portfolio" id="portfolio">
          <div class="section-title text-center">
                <h1>Projects</h1>
            </div>
            <Row>
              <div className="col-md-12 midsection">
                <h2>Portfolio</h2>
                <Row>
                  <Project
                    name="Spam Num Tracker"
                    imgPath={require("../assets/images/Project2.png")}
                    linkDeployed="https://spamnumbertracker.herokuapp.com/"
                    linkGithub="https://github.com/sujatha-m/Group-Project2"
                  />
                  <Project
                    name="U-break-WE-fix"
                    imgPath={require("../assets/images/Project3.png")}
                    linkDeployed="https://still-depths-30514.herokuapp.com/"
                    linkGithub="https://github.com/sujatha-m/U-break-WE-fix"
                  />
                  <Project
                    name="Employee Directory"
                    imgPath={require("../assets/images/EmployeeDirectory.png")}
                    linkDeployed="https://sujatha-m.github.io/react-employee-directory/"
                    linkGithub="https://github.com/sujatha-m/react-employee-directory"
                  />
                </Row>
                <br/><br/>
                <Row>
                  <Project
                    name="Master Home Cook"
                    imgPath={require("../assets/images/Project1.png")}
                    linkDeployed="https://maxguojiaqi.github.io/Master-Home-Cook/"
                    linkGithub="https://github.com/sujatha-m/Master-Home-Cook"
                  />
                  <Project
                    name="Google-Books-React "
                    imgPath={require("../assets/images/GoogleBooks.png")}
                    linkDeployed="https://intense-earth-07171.herokuapp.com/"
                    linkGithub="https://github.com/sujatha-m/Google-Books-React-Search"
                  />
                  <Project
                    name="Fitness Tracker"
                    imgPath={require("../assets/images/FitnessTracker.png")}
                    linkDeployed="https://gentle-dawn-36665.herokuapp.com/"
                    linkGithub="https://github.com/sujatha-m/Fitness-Tracker"
                  />
                </Row>
              </div>
            </Row>
          </section>
        </Container>
  
      )
  }

export default Portfolio