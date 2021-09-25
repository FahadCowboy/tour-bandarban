import React from 'react';
import './Header.css'

const Header = () => {
   return (
      <header id="header">
         <div id="header-container">
            <h2>Tour Bandarban</h2>
            <p>Get ready guys for the upcomming Bandarban tour!</p>
            <h2>Our expected budget is <span>5000 Taka</span> per person.</h2>
         </div>
      </header>
   );
};

export default Header;