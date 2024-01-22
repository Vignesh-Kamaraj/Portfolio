import React from 'react'
import { Link} from 'react-router-dom'
import my from '../assets/my photo (2).png'

function Intro() {
  return <>
    <section id="intro">
        <div className="introcontent">
            <span className='hello'>Hello,</span>
            <span className="introtext">I'm<span className="introname">Vignesh</span><br />Full Stack Developer</span>
            <p className="intropara">I am a skilled Full Stack Developer</p>
            <Link to='/Contact'><button className="btn">Hire me</button></Link><Link to='https://drive.google.com/file/d/10YZtL0uAu53lw4OgyVRoNmeqf1Iwu8To/view?usp=sharing' target='_blank'><button className="btn">Resume</button></Link>
        </div>
        <img src={my} alt="" className="bg" />
    </section>
    </>
}

export default Intro