
import { useState } from 'react';
import '../styling/style.css';
import JSONViewer from './json';
//https://i.pinimg.com/564x/c6/85/5f/c6855f0ddeeaeb93687a6c10d6b2cfb1.jpg
function viewChoice() {
    const [choice, setChoice] = useState<string>('');
    const handleSmallLabel = () => {
        setChoice('small');
    }
    const handleBigLabel = () => {
        setChoice('big');
    }
    return(
        <>
        hallo world
            <button onClick={handleSmallLabel}>small label</button>
            <button onClick={handleBigLabel}>big label</button>
            <div className='support-container'>
                <JSONViewer labelView={choice} />
           </div>
        </>

    );
}

export default viewChoice
