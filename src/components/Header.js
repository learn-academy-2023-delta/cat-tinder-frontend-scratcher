import React from 'react'
import { Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'

const Header = (element) => {

  return (
   <>
   <div id ="header">
   <h3>Scratcher</h3>
   <NavItem>
          </NavItem>
          <NavItem>
            <NavLink to="/catindex" >Meet the Cats</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/catnew" >Add a New Cat</NavLink>
    </NavItem>
    </div>   
   </>
  );
}


export default Header