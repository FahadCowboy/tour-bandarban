import React, { useEffect, useState } from 'react';
import Calculation from '../Calculation/Calculation';
import Friends from '../Friends/Friends';
import './Main.css';

const Main = () => {
   const [friends, setFriends] = useState([])

   useEffect(() => {
      fetch('./friends.json')
      .then(res => res.json())
      .then(data => setFriends(data))
   }, [])
   

   return (
      <main>
         <div id="main-container">
            <div id="friend-calc-container">
               <div id="friends-wrapper">
                  {
                     friends.map(friend => <Friends friend={friend}></Friends>)
                  }
               </div>
               <div>
                  <Calculation></Calculation>
               </div>
            </div>
         </div>
      </main>
   );
};

export default Main;