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
                  <span>Full Stack Web Developer, Canada</span>{' '}
                  </h6>
                  <p>
                    Hi, my name is Sujatha. I am a Full Stack Web Developer with a coding Boot camp certificate from
                    Carleton University.I have also been part of React.js upskilling program from LightHouse Labs.
                  </p>
                  <p>
                    I am passionate about technology and solving complex problems.
                    Am Excited to leverage skills and
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
                    {/* <div className='list'>
                      <label>Address:</label>
                      <p>364 Brettonwood Ridge, ON, Kanata, K2T 0H8</p>
                    </div> */}
                  </div>
                  <div className='info'>
                    <lable><b>Skills & Technologies:</b></lable>
                    <p>
                    JavaScript, TypeScript, JQuery, Node.js, React.js HTML5, CSS, SASS. Version controls
                      Git, GitHub, CSS Framework like Bootstrap, Material UI, Semantic UI
                      Styled-components, Bulma.
                      Passport authentication, HeroKU Database: MySQL, Mongo DB.
                      OS: Linux, Windows 10
                    </p>
                  </div>

                  <div className='social-links'>
                    <a
                      href='https://www.facebook.com/jhanavi.mallela/'
                      target='_blank' rel='noopener noreferrer'
                    >
                      <i className='fa fa-facebook'></i>
                    </a>
                    <a
                      href='https://www.linkedin.com/in/sujatha-m'
                      target='_blank' rel='noopener noreferrer'
                    >
                      <i className='fa fa-linkedin'></i>
                    </a>
                    <a href='https://github.com/sujatha-m' target='_blank' rel='noopener noreferrer'>
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
