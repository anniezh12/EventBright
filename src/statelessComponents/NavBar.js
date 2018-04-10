import React from 'react';
import { NavLink } from 'react-router-dom';
import {Home} from '../statelessComponents/Home.js';
import {About} from '../statelessComponents/About.js';
import {ContactUs} from '../statelessComponents/ContactUs.js';
import {Event} from '../components/event.js';
import {EventsFromApi} from '../components/eventsfromapi.js';
/* Add basic styling for NavLinks */
const link = {
width:'100%',
  clear: 'both',
  padding: '10px',
  margin: '10 5 6px 6px',
  background: '#27AE60',
  textDecoration: 'none',
  color: 'white',
}

        const NavBar = () =>{
          return(
           <div class="link">
              <NavLink to="/home"  style={link}>Home  </NavLink>
              <NavLink to="/about"  style={link}>Events  </NavLink>
              <NavLink to="/event"  style={link} >Add Event  </NavLink>
              <NavLink to="/eventfromapi"  style={link}>Events From API </NavLink>
                <NavLink to="/redux"  style={link}>Redux </NavLink>
              <NavLink to="/contactus"  style={link}>Contact Us  </NavLink>
           </div>
         )
       }
       export default NavBar;
