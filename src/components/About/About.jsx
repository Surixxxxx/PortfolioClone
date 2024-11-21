import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import suri1 from '../../assets/suri1.png'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
       <div className="about-left">
        <img src={suri1} alt="" />
       </div>
       <div className="about-right">
        <div className="about-para">
            <p>I’m a Front-End Developer who builds responsive user interfaces for websites and applications. Using technologies like HTML, CSS, and JavaScript, and ensure they work seamlessly across devices.</p>
            <p>I specialize in frameworks like React to create interactive and user-friendly experiences. Collaborating with designers and back-end teams, I focus on turning ideas into polished, functional products.</p>
        </div>
        <div className="about-skills">
            <div className="about-skill">
                <p>HTML</p><hr style={{width : "90%"}}/>
            </div>
            <div className="about-skill">
                <p>CSS</p><hr style={{width : "70%"}}/>
            </div>
            <div className="about-skill">
                <p>React.Js</p><hr style={{width : "60%"}}/>
            </div>
            <div className="about-skill">
                <p>JavaScript</p><hr style={{width : "70%"}}/>
            </div>
            <div className="about-skill">
                <p>BootStrap</p><hr style={{width : "60%"}}/>
            </div>
           
        </div>
        {/* <div className="about-achievements">
          <div className="about-achievement">
            <h1>
               Fresher
            </h1>
            <p>YEARS OF EXPERIENCE</p>
          </div>
          <hr/>
          <div className="about-achievement">
            <h1>
              15+
            </h1>
            <p>PROJECT COMPLETED</p>
          </div>
          <hr/>
          <div className="about-achievement">
            <h1>
              10+
            </h1>
            <p>HAPPY CLIENTS</p>
          </div>
          <hr/>
        </div> */}
       </div>
     
        
      </div>
    </div>
  )
}

export default About
