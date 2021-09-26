import React from 'react';
import SelectedFriend from '../SelectedFriend/SelectedFriend';
import './Calculation.css'

const Calculation = props => {
   // const budget} = props.friend
   const friendsArr = props.friends
   console.log(props.friends)
   const sumBudget = friendsArr.reduce((prev, curr) => prev+curr.budget, 0)
   return (
      <div className="calc-container">
         <h3>Collected Fund: <span id="collected-amount">{sumBudget}</span> Taka</h3>
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