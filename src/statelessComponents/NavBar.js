import React from 'react';
import { NavLink } from 'react-router-dom';


/* Add basic styling for NavLinks */
const link = {

width:'100%',
  clear: 'both',
  padding: '10px',
  margin: '10 5 6px 6px',
  textDecoration: 'none',
  color: 'black',
}
 const circle = {
   url: '../public/circle.png',
   width: '60px',
   height: '60px'
 }

        const NavBar = () =>{
          return(
           <div>


              <NavLink to="/home" style={link}  >Home       
              </NavLink>
              <NavLink to="/about"  style={link}>Events  </NavLink>
              <NavLink to="/event"  style={link} >React </NavLink>
              <NavLink to="/eventfromapi"  style={link}>Eventbrite </NavLink>
              <NavLink to="/redux"  style={link}>Redux </NavLink>

              <NavLink to="/contactus"  style={link}>Contact Us  </NavLink>
           </div>
         )
       }
       export default NavBar;
