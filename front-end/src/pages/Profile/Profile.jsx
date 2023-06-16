import RightSection from './RightSection';
import LeftSection from './LeftSection';

function Profile() {
    return <div className='row'>
        <div className='col-8'>
            <LeftSection />
        </div>
        <div className='col-4'>
            <RightSection />
        </div>
    </div>
}

export default Profile;