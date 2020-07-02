import React from 'react'
import '../../App.css'

function About () {
  return (
    <div>
      <section className='about-me' id='about'>
        <div className='container'>
          <div className='row'>
            <div className='section-title'>
              <h1>About Me</h1>
            </div>
          </div>
          <div className='row'>
            <div className='about-content'>
              <div className='row'>
                <div className='img'>
                  <img
                    src={require('../assets/images/mypic.jpg')}
                    alt='about-me'
                  />
                </div>
                <div className='text'>
                  <h4>Sujatha Mallela</h4>
                  <h6>
                    Full<span> Stack Web Developer, Canada</span>{' '}
                  </h6>
                  <p>
                    Hi, my name is Sujatha. I am an Arts Graduate currently
                    pursuing full-stack web development Boot camp from Carleton
                    University.
                  </p>
                  <p>
                    I am passionate about solving complex problems, learning new
                    things and developing beautiful applications with a focus on
                    UX/UI design and development. Excited to leverage skills and
                    provide fresh ideas as part of a passionate, continually
                    learning, quality-driven team in order to build better
                    experiences on the web.
                  </p>
                  <div className='info'>
                    <div className='list'>
                      <label>Email: </label>
                      <p> jhanavi.bhushan@gmail.com</p>
                    </div>
                    <div className='list'>
                      <label>Phone:</label>
                      <p>873 688 8055</p>
                    </div>
                    <div className='list'>
                      <label>Residence:</label>
                      <p>Canada</p>
                    </div>
                    <div className='list'>
                      <label>Address:</label>
                      <p>364 Brettonwood Ridge, ON, Kanata, K2T 0H8</p>
                    </div>
                  </div>
                  <div className='info'>
                    <lable>Skills & Technologies:</lable>
                    <p>
                      JavaScript, JQuery, Node.js, React.js HTML5, CSS, MYSQL
                      Technologies: GitHub, Gitbash, Boot Strap CSS Framework,
                      Skeleton CSS Framework, Bulma CSS Framework. Sequelize,
                      Passport authentication, HeroKU Database: MySQL, Mongo DB.
                      OS: Linux, Windows 10
                    </p>
                  </div>

                  <div className='social-links'>
                    <a
                      href='https://www.facebook.com/jhanavi.mallela/'
                      target='_blank'
                    >
                      <i className='fa fa-facebook'></i>
                    </a>
                    <a
                      href='https://www.linkedin.com/in/sujatha-m-7bb29b188/'
                      target='_blank'
                    >
                      <i className='fa fa-linkedin'></i>
                    </a>
                    <a href='https://github.com/sujatha-m' target='_blank'>
                      {' '}
                      <i className='fa fa-github'></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
