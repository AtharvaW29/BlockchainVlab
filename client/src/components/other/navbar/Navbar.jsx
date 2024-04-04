import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Dropdown from './Dropdown'
import {Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink } from './Navbarelements'

const drawerWidth = 0;


const pages = [   { id: 1, path: "/", name:"Home"},
                  { id: 2, path: "/AboutUs", name:"About Us"}];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  
  return (
      <>
        <Nav>
          <NavLink to='/'>
            {<img className='img'src={require("./logo.jpeg")} alt='logo' /> }
          </NavLink>
          <Bars />
          <NavMenu>
             <NavLink to='/' activeStyle>
              Home
            </NavLink>
            <NavLink to='/Experiments' activeStyle>
              Experiments
            </NavLink>
            <NavLink to='./AboutUs' activeStyle>
              About Us
            </NavLink>
            {/* Second Nav */}
            {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
            <Bars/>
          </NavMenu>
        </Nav>
      </>
    );
  };
  //   <AppBar className="Appbar">
  //     <Container maxWidth="xxl">
  //       <Toolbar disableGutters>
  //         <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
  //           <IconButton
  //             size="large"
  //             aria-label="account of current user"
  //             aria-controls="menu-appbar"
  //             aria-haspopup="true"
  //             onClick={handleOpenNavMenu}
  //             color="inherit"
  //           >
  //             <MenuIcon />
  //           </IconButton>
  //           <Menu
  //             id="menu-appbar"
  //             anchorEl={anchorElNav}
  //             anchorOrigin={{
  //               vertical: 'bottom',
  //               horizontal: 'right',
  //             }}
  //             keepMounted
  //             transformOrigin={{
  //               vertical: 'top',
  //               horizontal: 'right',
  //             }}
  //             open={Boolean(anchorElNav)}
  //             onClose={handleCloseNavMenu}
  //             sx={{
  //               display: { xs: 'block', md: 'none' },
  //             }}
  //           >
  //             {pages.map((page) => (
  //               <MenuItem key={page.id} onClick={handleCloseNavMenu}>
  //               <Link to={page.path}>
  //               <Typography textAlign="center"  sx={{
  //                 mr: 2,
  //                 display: { xs: 'flex', md: 'none' },
  //                 flexGrow: 1,
  //                 fontFamily: 'Poppins',
  //                 fontStyle: 'normal',
  //                 fontWeight: 600,
  //                 fontSize: '13px',
  //                 lineHeight: '20px',
  //                 position: 'absolute', 
  //                 color: '#000000',
  //                 textDecoration: 'none'
  //               }}>{page.name}</Typography></Link>
  //             </MenuItem>
  //             ))}
  //           </Menu>
  //         </Box>
  //         <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
  //           {pages.map((page) => (
  //               <Link to={page.path}>
  //               <Button
  //                 key={page.id}
  //                 onClick={handleCloseNavMenu}
  //                 sx={{ my: 2, color: 'white', display: 'block',
  //                 fontFamily: 'Poppins',
  //                 fontStyle: 'normal',
  //                 fontWeight: 600,
  //                 fontSize: '13px',
  //                 lineHeight: '20px', }}
  //               >
  //                 {page.name}
  //               </Button></Link>
  //           ))}
  //         </Box>
  //       </Toolbar>
  //     </Container>
  //   </AppBar>
  // );
export default NavBar;
