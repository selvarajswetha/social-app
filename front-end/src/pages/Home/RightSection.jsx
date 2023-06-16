import style from './right-section.module.css';
import FollowCard from './FollowCard';

function RightSection() {
    return <div className='card'>
        <div className='card-body'>
            <h5 className={style.heading}>Who to Follow</h5>
            <FollowCard name='Barathi' role='Web developer' />
            <FollowCard name='Barathi' role='Web developer' />
            <FollowCard name='Barathi' role='Web developer' />
            <FollowCard name='Barathi' role='Web developer' />
            <FollowCard name='Barathi' role='Web developer' />
            <FollowCard name='Barathi' role='Web developer' />

            <button className={style['view-more']}>View More</button>

        </div>
    </div>
}

export default RightSection;