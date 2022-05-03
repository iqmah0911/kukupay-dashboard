import React from 'react';
import image1 from '../image/Vector5.png';
import image2 from '../image/withdrawal 1.png';
import image3 from '../image/Vector7.png';
import image4 from '../image/Vector6.png';
import image5 from '../image/Vector8.png';
import image6 from '../image/Vector3.png';
import image7 from '../image/family-silhouette 1.png';

// import image4 from '../image/Vector2.png';
// import image5 from '../image/category-svgrepo-com1.png';
// import image6 from '../image/category-svgrepo-com1.png';
// import image7 from '../image/category-svgrepo-com1.png';


function Cards(props) {
    return (
        <div className='cards'>
           <div className="card card-1">
                <img src={image1} alt="vector" />
                <div>
                    <h2>
                        $254,000
                    </h2>
                    <h5>
                        Deposits
                    </h5>
                </div>
           </div>
           <div className="card card-2">
                <img src={image2} alt="vector" />
                <div>
                    <h2>
                        $75,000
                    </h2>
                    <h5>
                        Withdrawals
                    </h5>
                </div>
           </div>
           <div className="card card-3">
                <img src={image3} alt="vector" />
                <div>
                    <h2>
                        15
                    </h2>
                    <h5>
                        Transactions
                    </h5>
                </div>
           </div>
           <div className="card card-4">
                <div className="accountdetails">
                    <div className="acctbal">
                        <p>Account Balance</p>
                        <p className='balance'>$25,000.00</p>
                    </div>
                    <div className="acctno">
                        <p>Nuban Acct No</p>
                        <p className='aza'>1001234567</p>
                    </div>
                </div>
                <div className="avi">
                    <img src={image7} alt="" />
                    <p>UMC Coop. Society</p>
                </div>
           </div>
           <div className="card card-5">
                <img src={image4} alt="vector" />
                <div>

                    <h2>
                        $201,000
                    </h2>
                    <h5>
                        Loans
                    </h5>
                </div>
           </div>
           <div className="card card-6">
                <img src={image5} alt="vector" />
                <div>
                    <h2>
                        $254,000
                    </h2>
                    <h5>
                        Investments
                    </h5>
                </div>
            </div> 
           <div className="card card-7">
                <img src={image5} alt="vector" />
                <div>
                    <h2>
                        $254,000
                    </h2>
                    <h5>
                        Investments
                    </h5>
                </div>
            </div> 
           <div className="card card-8">
               <h3 className='card8text'>Account Statement</h3>
               <img src={image6} alt="" className="loading" />
            </div> 
        </div>
    );
}

export default Cards;