import coverImage from '../../assets/cover-image.jpg';
import style from './left-section.module.css';
import ProfileImage from '../../assets/profile.jpg';
import { Edit3, MoreHorizontal } from 'react-feather';
import { NavIcon } from '../../components/NavBar';
import { Link } from 'react-router-dom';
import React from 'react';
import { CreatePost, Post } from '../Home';

function LeftSection() {
    return <React.Fragment>
        <div className='card mb-3'>

            <div className='position-relative'>
                <img src={coverImage} alt='Cover Image' className={`card-body-top ${style['cover-img']}`} />
                <div className={style['profile-img']}>
                    <img src={ProfileImage} alt='Profile image' />
                </div>
            </div>

            <div className='card-body'>

                <div className='hstack justify-content-between '>
                    <div className={style['name-container']}>
                        <h1>Barathi</h1>
                        <p>250 Connection</p>
                    </div>

                    <div className='hstack align-items-start gap-2'>
                        <button className='btn btn-outline-danger'>
                            <Edit3 size={18} className='me-2' />
                            <span>Edit Profile</span>
                        </button>
                        <NavIcon Icon={MoreHorizontal} />
                    </div>
                </div>
            </div>
            <hr className='m-0' />
            <div className='card-footer py-0 bg-white'>
                <div className='hstack gap-5'>
                    <Link to='#' className={`${style['nav-link']} ${style.active}`}>Posts</Link>
                    <Link to='#' className={style['nav-link']}>About</Link>
                    <Link to='#' className={style['nav-link']}>Media</Link>
                </div>
            </div>
        </div>
        <CreatePost />
        <Post />
        <Post />
    </React.Fragment>
}

export default LeftSection;