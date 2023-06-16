import coverImage from '../../assets/cover-image.jpg';
import React from 'react';
import style from './left-section.module.css';
import profile from '../../assets/profile.jpg';
import home from '../../assets/home-outline-filled.svg';
import person from '../../assets/person-outline-filled.svg';
import earth from '../../assets/earth-outline-filled.svg';
import calender from '../../assets/calendar-outline-filled.svg';
import cog from '../../assets/cog-outline-filled.svg';
import chat from '../../assets/chat-outline-filled.svg';
import notification from '../../assets/notification-outlined-filled.svg';
import LeftSectionLink from './LeftSectionLink';
import { Link } from 'react-router-dom';

function LeftSection() {
    return <React.Fragment>
        <div className='card'>
            <div className={style.profile}>
                <img src={coverImage} className={`card-img-top ${style['cover-image']}`} />
                <div className={style['profile-img']}>
                    <img src={profile} alt='' />
                </div>
            </div>
            <div className='card-body'>
                <h5 className={style.name}>Barathi</h5>
                <p className={style['sub-text-sm']}>Web Developer </p>
                <p className={style['sub-text-md']}>I'd love to cahnge the world, but they won't give me the source.</p>

                <table className='w-100'>
                    <tbody>
                        <tr>
                            <td style={{ width: '33%' }}>
                                <div className={style['bold-text-sm']}>256</div>
                                <div className={style['sub-text-sm']}>Post</div>
                            </td>

                            <td className='border-start border-end' style={{ width: '33%' }}>
                                <div className={style['bold-text-sm']}>2.3k</div>
                                <div className={style['sub-text-sm']}>Following</div>
                            </td>
                            <td style={{ width: '33%' }}>
                                <div className={style['bold-text-sm']}>366</div>
                                <div className={style['sub-text-sm']}>Followers</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <hr />
                <LeftSectionLink image={home} label='Feed' to='#' />
                <LeftSectionLink image={person} label='Connection' to='#' />
                <LeftSectionLink image={earth} label='Latest news' to='#' />
                <LeftSectionLink image={calender} label='Events' to='#' />
                <LeftSectionLink image={chat} label='Groups' to='#' />
                <LeftSectionLink image={notification} label='Notification' to='#' />
                <LeftSectionLink image={cog} label='Settings' to='#' />
            </div>
            <div className='card-body border-top d-flex align-items-center justify-content-center'>
                <Link to='/profile' className={style['view-profile']}>View Profile</Link>
            </div>
        </div>
        <div className={style.footer}>
            <Link to='#' className={style['footer-link']}>About</Link>
            <Link to='#' className={style['footer-link']}>Settings</Link>
            <Link to='#' className={style['footer-link']}>Support</Link>
            <Link to='#' className={style['footer-link']}>Docs</Link>
            <Link to='#' className={style['footer-link']}>Help</Link>
            <Link to='#' className={style['footer-link']}>Privacy&terms</Link>
            <div className={style.copyright}>@2023 Webestica</div>
        </div>
    </React.Fragment>
}

export default LeftSection;