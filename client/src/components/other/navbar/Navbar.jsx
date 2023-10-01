import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

const drawerWidth = 0;


const pages = [   { id: 1, path: "/", name:"Home"},
                  { id: 2, path: "/AboutUs", name:"About Us"},
                  { id: 3, path: "/Simulation", name:"Simulation"}];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  
  return (
    <AppBar position="static" style={{backgroundColor:'#8587FF'}} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                <Link to={page.path}>
                <Typography textAlign="center"  sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'Poppins',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  fontSize: '13px',
                  lineHeight: '20px', 
                  color: '#000000',
                  textDecoration: 'none'
                }}>{page.name}</Typography></Link>
              </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
                <Link to={page.path}>
                <Button
                  key={page.id}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block',
                  fontFamily: 'Poppins',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  fontSize: '13px',
                  lineHeight: '20px', }}
                >
                  {page.name}
                </Button></Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center"
                  sx={{
                    mr: 2,
                    flexGrow: 1,
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: '13px',
                    lineHeight: '20px', 
                    color: '#000000',
                    textDecoration: 'none'
                  }}
                  >{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
