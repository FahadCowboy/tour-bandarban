import React from 'react';
import './SelectedFriend.css'

const SelectedFriend = props => {
   return (
      <div className="each-selected-friend">
         <div className="image-wrap">
            <img width="40px" src={props.image} alt="" />
         </div>
         <div className="name-budget-wrap">
            <h3>{props.name}</h3>
            <p>Budget: {props.budget}</p>
         </div>
      </div>
   );
};

export default SelectedFriend;