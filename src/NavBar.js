import React from 'react';
import { NavLink } from 'react-router-dom';
import {Home} from './Home.js';
import {About} from './About.js';
import {ContactUs} from './ContactUs.js';

        const NavBar = () =>{
          return(
           <div>
              <NavLink to="/home" >Home  </NavLink>
              <NavLink to="/about" >About  </NavLink>
              <NavLink to="/contactus" >Contact Us  </NavLink>
           </div>
         )
       }
       export default NavBar;
