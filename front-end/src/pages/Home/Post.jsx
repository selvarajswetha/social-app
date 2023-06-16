import profile from '../../assets/profile.jpg';
import style from './post.module.css';
import postImage from '../../assets/post-image.jpg';
import { ThumbsUp, MessageCircle, Send } from 'react-feather';

function Post() {
    return <div className='card mb-4'>
        <div className='card-body'>
            <div className={style.header}>
                <div className={`border ${style.profile}`}>
                    <img src={profile} alt='profile' />
                </div>
                <div className='vstack justify-content-center'>
                    <div className='d-flex align-items-center gap-2'>
                        <h6 className={style['bold-text-sm']}>Barathi</h6>
                        <div className={style['sub-text-sm']}>.</div>
                        <div className={style['sub-text-sm']}>2hr</div>
                    </div>
                    <div className={style['sub-text-sm']}>Web Developer</div>
                </div>
            </div>
            <p className={style['post-text']}>I,m thrilled to share that I've completed graduate certificate
                course in project management with the president's honor roll.</p>
            <div className={style['post-image']}>
                <img src={postImage} alt='post image' />
            </div>
            <div className='hstack mt-3 gap-4'>
                <div className={`hstack gap-2 ${style.like}`}>
                    <ThumbsUp size={18} />
                    <span>Like (56)</span>
                </div>
                <div className={`hstack gap-2 ${style.comment}`}>
                    <MessageCircle size={18} />
                    <span>Comment (12)</span>
                </div>
            </div>
            <div className='hstack mt-3 gap-2 align-items-start'>
                <div className={`border ${style.profile}`}>
                    <img src={profile} alt='profile' />
                </div>
                <div className={style['comment-box']}>
                    <textarea placeholder='Add a comment...' />
                    <Send className={style.send} />
                </div>
            </div>
        </div>
    </div>
}

export default Post;