import style from './right-section.module.css';

function RightSection() {
    return <div className='card'>
        <div className={`card-body ${style.about}`}>
            <h5>About</h5>
            <p>He moonlight difficult engrosed it, sportsman. Intersed have all
                Devonshire difficulty gau assisatnce joy.</p>
            <div className='mb-2'>Born:<strong>October 20,1999</strong></div>
            <div className='mb-2'>Status:<strong>Single</strong></div>
            <div className='mb-2'>Email:<strong>webstica@gmail.com</strong></div>
        </div>
    </div>
}
export default RightSection;