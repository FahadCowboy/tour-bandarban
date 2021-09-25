import React from 'react';
import './Friends.css'

const Friends = props => {
   const {name, picture, age, email, budget, phone} = props.friend
   console.log(name)

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
      </div>
   );
};

export default Friends;