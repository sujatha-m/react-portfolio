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
                {/* <h2>Portfolio</h2> */}
                <Row>
                  <Project
                    projectName="Spam Num Tracker"
                    paragraph="An application that hosts a database service for users to report spam calls received on their phones. The database would serve as a central repository to hold list of spam numbers reported by all users registered with the application."
                    name="Spam Num Tracker"
                    imgPath={require("../assets/images/Project2.png")}
                    linkDeployed="https://spamnumbertracker.herokuapp.com/"
                    linkGithub="https://github.com/sujatha-m/Group-Project2"
                  />
                  <Project
                    projectName="U-break-WE-fix"
                    paragraph="U break-we Fix is a Home improvements service application. The application has been designed and implemented as a fullstack web development project which utilizes MongoDB, Express, React, and Node.js (MERN)."
                    name="U-break-WE-fix"
                    imgPath={require("../assets/images/Project3.png")}
                    linkDeployed="https://still-depths-30514.herokuapp.com/"
                    linkGithub="https://github.com/sujatha-m/U-break-WE-fix"
                  />
                  <Project
                    projectName="Employee Directory"
                    paragraph="An Employee Directory application built using React components. The application manages component states and responds to user events. The employees are mapped over and displayed in a table format."
                    name="Employee Directory"
                    imgPath={require("../assets/images/EmployeeDirectory.png")}
                    linkDeployed="https://sujatha-m.github.io/react-employee-directory/"
                    linkGithub="https://github.com/sujatha-m/react-employee-directory"
                  />
                </Row>
                <br/><br/>
                <Row>
                  <Project
                  projectName="Master Home Cook"
                  paragraph="An application that displays Master Home Cook welcome page with multiple options like 
                  ingredients,calories,cook time,diet type. The results are obtained by making calls to ThirdParty APIs."
                    name="Master Home Cook"
                    imgPath={require("../assets/images/Project1.png")}
                    linkDeployed="https://maxguojiaqi.github.io/Master-Home-Cook/"
                    linkGithub="https://github.com/sujatha-m/Master-Home-Cook"
                  />
                  <Project
                  projectName="Google-Books-React"
                  paragraph="React-based Google Books Search app that displays books on user searches. Users can save them to review or purchase later.
                  A fullstack web development project which utilizes MongoDB, Express, React, and Node.js."
                    name="Google-Books-React "
                    imgPath={require("../assets/images/GoogleBooks.png")}
                    linkDeployed="https://intense-earth-07171.herokuapp.com/"
                    linkGithub="https://github.com/sujatha-m/Google-Books-React-Search"
                  />
                  <Project
                  projectName="Fitness Tracker"
                  paragraph="This application allows the user to create and track their workouts. They can keep track of multiple exercises in a workout. The user has the option to record either a resistance or cardio exercise."
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