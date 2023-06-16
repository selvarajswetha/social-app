import logo from '../../assets/logo.svg';
import { MessageSquare, Settings, Bell } from 'react-feather';
import profile from '../../assets/profile.jpg';
import NavIcon from './NavIcon';
import { Link } from 'react-router-dom';

function NavBar() {
    return <nav className='bg-white'>
        <div className='container py-2 '>
            <div className='row'>
                <div className='col-3'>
                    <div to='/' className='d-flex align-items-center gap-2'>
                        <Link to='/'>
                            <img src={logo} alt='Logo' />
                        </Link>
                        <input type='search' className='form-control' placeholder='Search' />
                    </div>
                </div>
                <div className='col-9'>
                    <div className='d-flex  align-items-center justify-content-end gap-2'>
                        <NavIcon Icon={MessageSquare} />
                        <NavIcon Icon={Settings} />
                        <NavIcon Icon={Bell} />
                        <NavIcon to='/profile' image={profile} />
                    </div>
                </div>
            </div>
        </div>
    </nav>
}

export default NavBar;