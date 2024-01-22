import React from 'react'
import { Link} from 'react-router-dom'

function Intro() {
  return <>
    <section id="intro">
        <div className="introcontent">
            <span className='hello'>Hello,</span>
            <span className="introtext">I'm<span className="introname">Vignesh</span><br />Full Stack Developer</span>
            <p className="intropara">I am a skilled Full Stack Developer</p>
            <Link to='/Contact'><button className="btn">Hire me</button></Link><Link to=''><button className="btn">Download cv</button></Link>
        </div>
        <img src="src\assets\my photo (1).JPG" alt="" className="bg" />
    </section>
    </>
}

export default Intro