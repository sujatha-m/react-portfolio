import React from 'react'
import Project from "../Projects/index"
import Container from "../Container/index"
import Row from "../Row/index"
import '../../App.css'

// function Portfolio(){
//     return(
      
//         <Container>
//         <section className="content">
//           <Row>
//             <div className="col-md-12 midsection">
//               <h2>Portfolio</h2>
//               <Row>
//                 <Project
//                   name="Spam Num Tracker"
//                   imgPath={require("../assets/images1/Screenshot (11).png")}
//                   linkDeployed="https://spamnumbertracker.herokuapp.com/"
//                   linkGithub="https://github.com/sujatha-m/Group-Project2"
//                 />
//                 <Project
//                   name="EatDaBurger"
//                   imgPath={require("../assets/images/2.EatDaBurger1.png")}
//                   linkDeployed="https://desolate-garden-68905.herokuapp.com/burgers"
//                   linkGithub="https://github.com/sujatha-m/EatDaBurger"
//                 />
//                 <Project
//                   name="Day Planner"
//                   imgPath={require("../assets/images/3.DayPlanner3.png")}
//                   linkDeployed="https://sujatha-m.github.io/DayPlanner/Develop/"
//                   linkGithub="https://github.com/sujatha-m/DayPlanner"
//                 />
//               </Row>
//               <Row>
//                 <Project
//                   name="Master Home Cook"
//                   imgPath={require("../assets/images/5.GroupProject.png")}
//                   linkDeployed="https://maxguojiaqi.github.io/Master-Home-Cook/"
//                   linkGithub="https://github.com/sujatha-m/Master-Home-Cook"
//                 />
//                 <Project
//                   name="Note Taker"
//                   imgPath={require("../assets/images/6.NoteTaker5.png")}
//                   linkDeployed="https://safe-crag-29613.herokuapp.com/"
//                   linkGithub="https://github.com/sujatha-m/Note-Taker"
//                 />
//                 <Project
//                   name="Weather Dashboard"
//                   imgPath={require("../assets/images/7.WeatherDashboard.png")}
//                   linkDeployed="https://sujatha-m.github.io/Weather-Dashboard/Develop/"
//                   linkGithub="https://github.com/sujatha-m/Weather-Dashboard"
//                 />
//               </Row>
//             </div>
//           </Row>
//         </section>
//       </Container>

//     )
// }

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
                    name="EatDaBurger"
                    imgPath={require("../assets/images/EatDaBurger.png")}
                    linkDeployed="https://desolate-garden-68905.herokuapp.com/burgers"
                    linkGithub="https://github.com/sujatha-m/EatDaBurger"
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
                    name="Note Taker"
                    imgPath={require("../assets/images/NoteTaker.png")}
                    linkDeployed="https://safe-crag-29613.herokuapp.com/"
                    linkGithub="https://github.com/sujatha-m/Note-Taker"
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