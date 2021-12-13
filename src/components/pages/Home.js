import React from 'react'

function Home () {
  return (
    <div>
      <section className="home" id="home">
        <div className="container">
            <div className="row full-screen">
                <div className="home-content">
                    <div className="block">
                    <h6>Hello, My Name is</h6>
                    <h1>Sujatha Mallela</h1>
                    <h3>Full Stack Web Developer</h3>
                    <div className="cv-btn">
                        <a href={require("../assets/images/sujatha-dec.pdf")} target="_blank" rel="noopener noreferrer">DownLoad CV</a>
                    </div>
                   </div>
                </div>
            </div>
        </div>
    </section> 
    </div>
  )
}

export default Home

