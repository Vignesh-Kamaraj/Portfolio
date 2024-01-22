import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'
import{FaReact,FaHtml5,FaCss3Alt,FaBootstrap} from  'react-icons/fa'
import {SiJavascript,SiExpress,SiMysql,SiMongodb,SiPostman,SiNetlify,SiHeroku} from 'react-icons/si'
import{DiNodejs,DiGit} from 'react-icons/di'

function Skills() {
  return <>
      <section id="skills">
        <div className="skillstitle">
        <h2> My Skills</h2>
        </div>
     <div className='skills_container'>
      <div className='skills'>
        <h3 >Frontend Development</h3>
        <div className='skills_content'>
          <article className='skills_details'>
          <FaHtml5 />
          <h4>HTML</h4>
          </article>
          <article className='skills_details'>
          <FaCss3Alt />
          <h4>CSS</h4>
          </article>
          <article className='skills_details'>
          <SiJavascript />
          <h4>Javascript</h4>
          </article>
          <article className='skills_details'>
          <FaReact />
          <h4>React Js</h4>
          </article>
          <article className='skills_details'>
          <FaBootstrap />
          <h4>Bootstrap</h4>
          </article>
          
      
        </div>
      </div>
      <div className='skills'>
        <h3 >Backend Development</h3>
        <div className='skills_content'>
          <article className='skills_details'>
          <DiNodejs />
          <h4>NodeJs</h4>
          </article>
          <article className='skills_details'>
          <SiMongodb />
          <h4>MongoDB</h4>
          </article>
          <article className='skills_details'>
          <SiExpress />
          <h4>ExpressJs</h4>
          </article>
          <article className='skills_details'>
          <SiMysql/>
          <h4>My SQL</h4>
          </article>
        </div>
      </div>

      <div className='skills'>
        <h3 >Other skills</h3>
        <div className='skills_content'>
          <article className='skills_details'>
          <DiGit />
          <h4>Git</h4>
          </article>
          <article className='skills_details'>
          <SiPostman />
          <h4>Postman</h4>
          </article>
          <article className='skills_details'>
          <SiNetlify />
          <h4>Netilfy</h4>
          </article>
        </div>
      </div>

     </div>
    </section>
  </>
}

export default Skills