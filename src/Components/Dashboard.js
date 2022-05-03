import React from 'react';
import image4 from '../image/KukuPay-Logo-2 2.png';
import image5 from '../image/category-svgrepo-com1.png';
import image6 from '../image/Vector.png';
import image7 from '../image/withdrawal 2.png';
import image8 from '../image/Group 75.png';
import image9 from '../image/Vector1.png';
import image10 from '../image/Vector2.png';
import image11 from '../image/Polygon 3.png';
import image12 from '../image/person-support-svgrepo-com 3.png';
import image13 from '../image/settings 2.png';
import image14 from '../image/Logout.png';

// import vectore from ""//

function Dashboard(props) {
    return (
        <div className='dashboard'>
            <div className="logo">
                <img className='logo' src={image4} alt="" />
            </div>
            <div className="dashboardItems">
                <div className="dashboardItem">
                    <img src={image5} alt="" className="dashboardimg" />
                    <p>
                        Dashboard
                    </p>
                </div>
                <div className="dashboardItem">
                <img className='dashboardimg' src={image6} alt="" />
                    <p>
                        Deposit
                    </p>
                </div>
                <div className="dashboardItem">
                    <img src={image7}alt="" className="dashboardimg" />
                    <p>
                        Withdraw
                    </p>
                </div>
                <div className="dashboardItem">
                    <img src={image8} alt="" className="dashboardimg" />
                    <p>
                        Investments
                    </p>
                </div>
                <div className="dashboardItem">
                    <img src={image9} alt="" className="dashboardimg" />
                    <p>Loans</p>
                    <img  className='poly' src={image11} alt="" />
                </div>
                <div className="dashboardItem">
                    <img src={image10}alt="" className="dashboardimg" />
                    <p>
                        Transfer
                    </p>
                    <img  className='poly' src={image11} alt="" />
                </div>
                <div className="dashboardItem">
                    <img   className='poly' src={image12} alt="" className="dashboardimg" />
                    <p>
                        More
                    </p>
                    <img className='poly' src={image11} alt="" />
                </div>
            </div>
            <div className="dashboardItems2">
                    <div className="dashboardItem">
                        <img src={image13} alt="" className="dashboardimg" />
                        <p>
                            Settings
                        </p>
                    </div>
                    <div className="dashboardItem">
                        <img src={image14} alt="" className="dashboardimg" />
                        <p>
                            Logout
                        </p>
                    </div>
            </div>
        </div>
    );
}

export default Dashboard;