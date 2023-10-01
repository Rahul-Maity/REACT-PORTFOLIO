import React from 'react';
import codechef from '../assets/codechef.png';
import geeksforgeeks from '../assets/geeksforgeeks.png';
import leetcode from '../assets/leetcode.png';
import "./Pcard.css";
const Pcard = () => {
     const handleLeet=()=> {
        window.location.href = 'https://leetcode.com/mrahulmaity623/';

        
    }
     const handleChef=()=> {
        window.location.href = 'https://www.codechef.com/users/rahulmaity';

        
    }
     const handleGeek=()=> {
        window.location.href = 'https://auth.geeksforgeeks.org/user/mrahulmaity623';

        
    }
    return (
        <div className='pricing'>
            <div className='card-container'>
               
                <div className='card'>
                    <div className='img1'>
                        <img src={codechef} alt="codechef" className='codeimg' />
                   </div>
                   <button onClick={handleChef} type='button' className='lbutton'>Codechef Profile</button>
               
                </div>
                <div className='card'>
                    <div className='img1'>
                        <img src={leetcode} alt="leetcode" className='leetimg' />
                   </div>
                   <button onClick={handleLeet} type='button' className='lbutton'>Leetcode Profile</button>
               
                </div>
                <div className='card'>
                    <div className='img1'>
                        <img src={geeksforgeeks} alt="geeksforgeeks" className='codeimg' />
                   </div>
                   <button onClick={handleGeek} type='button' className='lbutton'>GeeksforGeeks Profile</button>
               
                </div>
               
                
            </div>
            
  </div>
  );
}

export default Pcard;
    