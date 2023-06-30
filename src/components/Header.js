import React from 'react'
import { NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'

const Header = () => {

  return (
   <>
   <div id ="header">
   <NavItem>
      <NavLink to="/" ><h3>Scratcher</h3></NavLink>
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