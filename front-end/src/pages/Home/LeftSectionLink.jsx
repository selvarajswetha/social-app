import { Link } from 'react-router-dom';
import home from '../../assets/home-outline-filled.svg';
import style from './left-section-link.module.css';

function LeftSectionLink({ to, image, label }) {
    return <Link to={to} className={`gap-2 ${style.link}`}>
        <img src={image} className={style.image} />
        <span className={style.label}>{label}</span>
    </Link>
}
export default LeftSectionLink;