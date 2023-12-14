import './Navbar.scss'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar_container'>
      <p className='navbar_name'>smith ringtho</p>
      <div className='navbar_links'>
        <NavLink to="/">Work</NavLink>
        <NavLink to="services">Services</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </div>
    </div>
  )
}

export default Navbar