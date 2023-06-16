import profile from '../../assets/profile.jpg';
import { Plus } from 'react-feather';
import style from './follow-card.module.css';

function FollowCard({ name, role }) {
    return <div className='hstack gap-3 mb-3'>
        <div className={style.profile}>
            <img src={profile} alt='Profile' />
        </div>
        <div className={style['user-icon']}>
            <div className={`text-truncate ${style['bold-text']}`}>{name}</div>
            <div className={`text-truncate ${style['sub-text']}`}>{role}</div>
        </div>
        <div className={style.icon}>
            <Plus />
        </div>
    </div>
}

export default FollowCard;