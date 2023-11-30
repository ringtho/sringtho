import './Navbar.scss'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar_container'>
      <p>smith ringtho</p>
      <div>
        <NavLink to="/">Work</NavLink>
        <NavLink to="services">Services</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </div>
    </div>
  )
}

export default Navbar