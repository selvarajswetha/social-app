import NavBar from '../NavBar'
import { Outlet } from 'react-router-dom';

function Layout() {
    return <div className='bg-light min-vh-100'>
        <NavBar />
        <div className='pt-4'>
            <div className='container'>
                <Outlet />
            </div>
        </div>
    </div>
}

export default Layout;