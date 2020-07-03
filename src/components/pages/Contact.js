import React from 'react'
import '../../App.css'

function Contact () {
  return (
    <section className='contact-us' id='contact'>
      <div className='container'>
        <div className='row'>
          <div className='section-title text-center'>
            <h1>Get In Touch</h1>
          </div>
        </div>
        <div className='row'>
          <div className='contact-form'>
            <div className='row'>
              <div className='text'>
                <h2>Contact Me</h2>
                <p>I am here to answer any questions you may have</p>
              </div>
            </div>
            <div className='row space-between'>
              <div className='col-6'>
                <input
                  type='text'
                  className='form-control'
                  name=''
                  placeholder='Name'
                />
              </div>
              <div className='col-6'>
                <input
                  type='text'
                  className='form-control'
                  name=''
                  placeholder='Email'
                />
              </div>
            </div>
            <div className='row'>
              <div className='col-12'>
                <textarea
                  className='form-control'
                  name=''
                  placeholder='Your Comment'
                ></textarea>
              </div>
            </div>
            <div className='row'>
              <div className='button text-right'>
                <a href='/#'>Get In Touch</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
