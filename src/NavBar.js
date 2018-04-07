import React from 'react';
import { NavLink } from 'react-router-dom';
import {Home} from './Home.js';
import {About} from './About.js';
import {ContactUs} from './ContactUs.js';
import {Event} from './event.js';
import {EventsFromApi} from './eventsfromapi.js';

        const NavBar = () =>{
          return(
           <div>
              <NavLink to="/home" >Home  </NavLink>
              <NavLink to="/about" >About  </NavLink>
              <NavLink to="/event" >Event  </NavLink>
                <NavLink to="/eventfromapi" >Events From API </NavLink>
              <NavLink to="/contactus" >Contact Us  </NavLink>
           </div>
         )
       }
       export default NavBar;
