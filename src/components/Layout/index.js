import './index.scss'
import {Sidebar} from '../Sidebar/'
import { Outlet } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import NavBar from '../NavBar'
export const Layout = () => {

    
    const isMobile = useMediaQuery({query: '(min-width: 760px)'})
    return (

        <div className='App'>
            {isMobile ? <Sidebar/>
                : <NavBar/>}
            
          <div className='page'>

            <Outlet/>
            <span className = 'tags top-tags'>&lt;body&gt;</span>
            <span className='tags bottom-tags'>
                &lt;/body&gt;
                <br/>
                <span className='bottom-tag-html'>&lt;/html&gt;</span>
            </span>
            </div>
        
        </div>
        

    )
}

