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
                  {/* <Project
                    projectName="Spam Num Tracker"
                    paragraph="An application that hosts a database service for users to report spam calls received on their phones. The database would serve as a central repository to hold list of spam numbers reported by all users registered with the application."
                    name="Spam Num Tracker"
                    imgPath={require("../assets/images/Project2.png")}
                    linkDeployed="https://spamnumbertracker.herokuapp.com/"
                    linkGithub="https://github.com/sujatha-m/Group-Project2"
                  /> */}
                  <Project
                  projectName="MERN-school-management"
                  paragraph="MERN is a Fullstack web application the acronym for MongoDB, Express.js, React.js, and Node.js combination of Javascript-based technologies which are used to build advanced web applications hosted in Netlify."
                    name="School-management"
                    imgPath={require("../assets/images/school-management.png")}
                    linkDeployed="https://mernstack-school-management-app.netlify.app/"
                    linkGithub="https://github.com/sujatha-m/MERN-school-management"
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
                    projectName="Natours"
                    paragraph="Natours is front-end fictional company that offers tours in a nature for adventours people. This website has no functionality, it only presents the user interface of a tourism company. Built iwth HTML, CSS and SASS."
                    name="Natours"
                    imgPath={require("../assets/images/Natours.png")}
                    linkDeployed="https://sujatha-m.github.io/Natours/index"
                    linkGithub="https://github.com/sujatha-m/Natours"
                  />
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
                  
                </Row>
              </div>
            </Row>
          </section>
        </Container>
  
      )
  }

export default Portfolio