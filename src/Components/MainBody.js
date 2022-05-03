import React from 'react';
import Cards from './Cards';
import Tables from './Tables';
import image15 from '../image/vector4.png';
import image16 from '../image/image 229.png';


function MainBody(props) {
    return (
        <div className='mainBody'>
            <div className='mainHeader'>
                <div className="welcome">
                    <h3>Welcome Shakir!</h3>
                </div>
                <div className="profile">
                        <img src={image15} alt="" className="notifimg profileimg" />
                        <img src={image16} alt="" className="avatar profileimg" />
                        
                    <div className='prof'>
                        <h3>Luthfi Shakir</h3>
                        <p>Member</p>
                    </div>
                </div>
            </div>
            <Cards />
            <Tables />
        </div>
    );
}

export default MainBody;