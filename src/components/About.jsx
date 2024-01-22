import React from 'react'
import { useNavigate } from 'react-router-dom'
import my from '../assets/my photo (2).png'

const About = () => {
    const navigate = useNavigate()
  return <>
  <section id='about'>
    <div className='about1'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      </div>
    <div className="container about_container">
        <div className="about_me-image">
          <img src={my} alt='' className='bg1'/>
        </div>
     
      <div className="about_content">
        <div>
        <p>Goal-oriented full stack developer with a passion for working on a project that solves problems with thoughtful UI design, creating intuitive, dynamic user experiences powered by strong backend. My core competency lies in developing applications from its inception.

       I primarily work with MERN stack among the full stack technologies. As a full stack developer, I enjoy using my obsessive attention to detail, my unequivocal love for making things, and my mission-driven work ethic to revolutionize the project I work on.

        </p>
        </div>
        <div>
        <button className='btn' onClick={()=>navigate('/Projects')}>View Projects</button>
        </div>
      </div>
      </div>
  </section>
  </>
}

export default About