import React from 'react'
import IMG1 from '../assets/color.png'
import IMG2 from '../assets/dice.png'
import IMG3 from '../assets/notes.png'
import IMG4 from '../assets/food restaurant.png'
// import IMG5 from '../../Assets/download (1).jfif'
const Projects = () => {
  const data=[
    {
      id:'1',
      image:IMG1,
      title:'COLOR SUGGESTION',
      description:"Color Suggestion app for women is app that helps to suggests daily dress color.",
      github_FE:'https://github.com/Vignesh-Kamaraj/COLOUR_SUGGESTION_FE',
      github_BE:'https://github.com/Vignesh-Kamaraj/COLOUR_SUGGESTION_BE',
      demo:'https://jazzy-lolly-60c1d2.netlify.app/'
    },
    {
      id:'2',
      image:IMG2,
      title:'DICE GAME',
      description:"Dice game allows you to play dice game with two players one by one and one who get 30 points first wins.",
      github_FE:'https://github.com/Vignesh-Kamaraj/Dice-Game',
      demo:'https://zesty-pothos-ea1ecd.netlify.app/'
    },
    {
      id:'3',
      image:IMG3,
      title:'NOTES APP',
      description:"Notes App helps to simply add notes with CRUD operation.",
      github_FE:'https://github.com/Vignesh-Kamaraj/Notes_App',
      demo:'https://deluxe-scone-5d9303.netlify.app/'
    },
    {
      id:'4',
      image:IMG4,
      title:'FOOD RESTAURANT',
      description:"Food Restaurant App is an frontend demo site for desktop version.",
      github_FE:'https://github.com/Vignesh-Kamaraj/Restaurant',
      demo:'https://playful-lollipop-2bbdd7.netlify.app//'
    },
    // {
    // id:'5',
    // //   image:IMG4,
    //   title:'TENTKOTTA',
    //   description:"Tentkotta App is an movie ticket booking app.In this app Admin Control also used ",
    //   github_FE:'https://github.com/Gokul0201/Tentkotta-movie-booking-app-FE.git',
    //   github_BE:'https://github.com/Gokul0201/Tentkotta-movie-booking-app-BE.git',
    //   demo:'https://tentkotta-01.netlify.app/'
    // }
  ]
  return (
    <section id="projects">
      <h5>My recent work</h5>
      <h2>Projects</h2>
     {/* <div className='credentials'>
     <h5>Credentials</h5>
      <h5>User: (username:demo123,password:12345678)</h5>
      <h5>Admin: (username:admin,password:12345678)</h5>
      </div> */}
      <div className="container projects_container">{
        data.map((e) => {
          return(
        <article key={e.id} className="project_item">
          <div >
            <img src={e.image} alt=" " className="project_item-image"></img>
          </div>
          <h3>{e.title}</h3>
          <p className="description">{e.description}</p>
          <div className="project_item-link">
          <a href={e.github_FE} className="btn" id='btn1' target='_blank' rel='noreferrer'>Front End</a>
          <a href={e.github_BE} className="btn" id='btn1' target='_blank' rel='noreferrer'>Back End</a>
          <a href={e.demo} className="btn" id='btn1' target='_blank' rel='noreferrer'>Live Demo</a>
         </div>        
        </article>
        )})
      }
      </div>
    </section>
  )
}

export default Projects
