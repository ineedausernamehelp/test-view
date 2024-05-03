
import '../styling/style.css';
import JSONViewer from './json';
import View from './button';
//https://i.pinimg.com/564x/c6/85/5f/c6855f0ddeeaeb93687a6c10d6b2cfb1.jpg
function dashboard() {
    

    return(
        
        <div className='dashboard'>
            hallo world
            <View/>
                <div className='support-container'>
                    <JSONViewer/>           
                </div>
        </div>
    );
}

export default dashboard
