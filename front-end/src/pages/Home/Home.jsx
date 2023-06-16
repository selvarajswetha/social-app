
import LeftSection from './LeftSection';
import MiddleSection from './MiddleSection';
import RightSection from './RightSection';

function Home() {
    return <div className='row'>

        <div className='col-3'>
            <LeftSection />
        </div>

        <div className='col-6'>
            <MiddleSection />
        </div>
        <div className='col-3'>
            <RightSection />
        </div>
    </div>

}

export default Home;