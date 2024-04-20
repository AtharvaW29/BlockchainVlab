import * as React from 'react';
import {Nav,NavLink,Bars,NavMenu } from './Navbarelements'
import { Typography } from '@mui/material';

const pages = [   { id: 1, path: '/', name:'Home'},
                  { id: 2, path: '/AboutUs', name:'About Us'},
                  { id: 3, path: '/Experiments', name: 'Experiments'}];
function NavBar() {
  return (
      <>
        <Nav>
          <NavLink to='/'>
            {<img className='img'src={require("./logo.jpeg")} alt='logo' /> }
          </NavLink>
          <Bars />
          <NavMenu>
            {pages.map((page) => (
                <NavLink key={page.id} to={page.path}>
                  <span style={{fontWeight: 600, color:'#effeff'}}>{page.name}</span>
                </NavLink>
            ))}
          </NavMenu>
          <Bars/>
        </Nav>
      </>
    );
  };
export default NavBar;
