import './index.scss'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
const index = () => {
  return (
    <div className="navBar">

      <div className="containerNav">
      <Link className='logo' to='/'>
            <img src={LogoS} alt='logo'></img>
        </Link>
        <NavLink className = "home-link" exact = 'true' activeclassname= 'active' to='/'>
                <FontAwesomeIcon icon= {faHome} color = '#4d4d4e'></FontAwesomeIcon>
            </NavLink>
            <NavLink className = 'about-link' exact = 'true' activeclassname= 'active' to='/about'>
                <FontAwesomeIcon icon= {faUser} color = '#4d4d4e'></FontAwesomeIcon>
            </NavLink>
            <NavLink className = 'contact-link' exact = 'true' activeclassname= 'active' to='/contact'>
                <FontAwesomeIcon icon= {faEnvelope} color = '#4d4d4e'></FontAwesomeIcon>
            </NavLink>
            <a target='blank' rel = 'noreferrer' href='https://www.linkedin.com/in/sebasti%C3%A1n-galvis-chaves-540308a0/'>
                <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
            </a>
            <a target='blank' rel = 'noreferrer' href='https://github.com/ChogLight'>
                <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
            </a>

      </div>
      
    </div>
  )
}

export default index
