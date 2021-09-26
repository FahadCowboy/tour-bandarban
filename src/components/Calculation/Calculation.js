import React from 'react';
import SelectedFriend from '../SelectedFriend/SelectedFriend';
import './Calculation.css'

const Calculation = props => {
   const friendsArr = props.friends
   const sumBudget = friendsArr.reduce((prev, curr) => prev+curr.budget, 0)
   return (
      <div className="calc-container">
         <h3>Total Fund: &#2547;<span id="collected-amount">{sumBudget}</span></h3>
         <h3>Member Added: &#2547;<span id="collected-amount">{props.friends.length}</span></h3>
         <div className="selected-wrap">
            {
               friendsArr.map(friend => <SelectedFriend 
                  key={friend._id}
                  image={friend.picture} 
                  name={friend.name} 
                  budget={friend.budget}
               ></SelectedFriend>)
            }
         </div>
      </div>
   );
};

export default Calculation;