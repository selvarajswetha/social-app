import style from './create-post.module.css';
import profile from '../../assets/profile.jpg';
import { Image } from 'react-feather';


function CreatePost() {
    return <div className='card mb-4'>
        <div className='card-body'>
            <div className='d-flex align-items-start gap-4'>
                <div className={style.profile}>
                    <img src={profile} alt='profile' />
                </div>
                <textarea className={style.textarea} placeholder='Share your thoughts....' />
            </div>
            <div className='d-flex align-items-center justify-content-between'>
                <button className={style.button}>
                    <Image size={18} className='text-success' />
                    <span>Photo</span>
                </button>
                <button className='btn btn-outline-secondary'>Post</button>
            </div>
        </div>
    </div>
}
export default CreatePost;