import LogoTitle from '../../assets/images/logo-s.png'
import {Link} from 'react-router-dom'
import './index.scss'
 export const Home = () => {
    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br/> I'm <br/>
                <img src={LogoTitle} alt="developer"/>
                ebastian
                <br/>
                web developer
                </h1>
                <h2>FrontEnd Developer / BackEnd Developer / Always Student</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>

        </div>
    )
}

