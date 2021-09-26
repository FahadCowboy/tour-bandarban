import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalculator } from '@fortawesome/free-solid-svg-icons'
import './Friends.css'

const Friends = props => {
   const {name, picture, age, email, budget, phone} = props.friend
   // console.log(props)

   return (
      <div className="card">
         <div className="img-wrapper">
            <img src={picture} width='50px' alt="" />
         </div>
         <div>
            <h3>{name}</h3>
            <p>Age: {age}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Budget: {budget}</p>
         </div>
         <div className="btn-wrapper">
            <button className="calculate-btn" onClick={() => props.addMoney(props.friend)}><FontAwesomeIcon icon={faCalculator}></FontAwesomeIcon> Count budget</button>
         </div>
      </div>
   );
};

export default Friends;