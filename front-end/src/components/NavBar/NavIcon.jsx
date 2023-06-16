import { Link } from 'react-router-dom';
import style from './nav-icon.module.css';

function NavIcon({ to, Icon, image }) {
    return <Link to={to} className={style['nav-icon']}>
        {Icon && <Icon size={16} />}
        {image && <img src={image} className={style.image} />}
    </Link>
}

export default NavIcon;