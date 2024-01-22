
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { BrowserRouter,Routes,Route, Navigate } from "react-router-dom"

function App() {

  return (
    <>
  <div className="App">
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path='Home' element={<Intro /> }/>
    <Route path='About' element={<About />}/>
    <Route path='Skills' element={<Skills />}/>
    <Route path='Projects' element={<Projects />}/>
    <Route path='Contact' element={<Contact />}/>
    <Route path='*' element={<Navigate to='Home'/>}/>
    </Routes>
    </BrowserRouter>
  
  </div>
      
    </>
  )
}

export default App
