import './index.scss'
import {Link, NavLink} from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
export const Sidebar = ()=> (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt='logo'></img>
            <img className="sub-logo" src={LogoSubtitle} alt='logoSub'></img>
        </Link>
        <nav>
            <NavLink exact = 'true' activeclassname= 'active' to='/'>
                <FontAwesomeIcon icon= {faHome} color = '#4d4d4e'></FontAwesomeIcon>
            </NavLink>
            <NavLink className = 'about-link' exact = 'true' activeclassname= 'active' to='/about'>
                <FontAwesomeIcon icon= {faUser} color = '#4d4d4e'></FontAwesomeIcon>
            </NavLink>
            <NavLink className = 'contact-link' exact = 'true' activeclassname= 'active' to='/contact'>
                <FontAwesomeIcon icon= {faEnvelope} color = '#4d4d4e'></FontAwesomeIcon>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='blank' rel = 'noreferrer' href='https://www.linkedin.com/in/sebasti%C3%A1n-galvis-chaves-540308a0/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a target='blank' rel = 'noreferrer' href='https://github.com/ChogLight'>
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                </a>
            </li>
        </ul>
    </div>
)

