import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { FaLinkedin } from "react-icons/fa6";

function Navbar() {
    let navigate = useNavigate()
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen)
  };
  

  return <>
    <nav className="navbar">
        <img className='logo'  src="src\assets\VK.png" alt="" />
        <div className="menu">
        <Link to='/Home' className='menuitem'>Home</Link>
        <Link to='/About' className='menuitem'>About</Link>
        <Link to='/Skills' className='menuitem'>Skills</Link>
        <Link to='/Projects' className='menuitem'>Projects</Link>
        <Link to='https://www.linkedin.com/in/vignesh-kamaraj-86b78228b' className='menuitem linked'><FaLinkedin /></Link>

        </div>
        <button className="menubtn" onClick={()=>{navigate('/Contact')}}>
            <img src="" alt="" className="menuimg" />Contact Me
        </button>
        <div className='toggle'></div>
        <button className='togglebtn' onClick={handleMenuToggle}><HiOutlineSquares2X2 size={40} /></button>
        <div className={`${isMenuOpen ? 'open' : 'close'}`}>
        <Link to='/Home' className="menuitem">Home</Link>
        <Link to='/About' className="menuitem">About</Link>
        <Link to='/Skills' className="menuitem">Skills</Link>
        <Link to='/Projects' className="menuitem">Projects</Link>
        <Link to='https://www.linkedin.com/in/vignesh-kamaraj-86b78228b' className="menuitem"><FaLinkedin /></Link>
        </div>

    </nav>
    </>
}

export default Navbar

