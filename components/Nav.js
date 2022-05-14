import React,{useState, useEffect} from 'react'
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';

import { logoutRequest } from '@/modules/auth/login'
import { useDispatch } from 'react-redux';


const basicSettings = {subTitles: ['글 등록', '글 목록'], urls: ['/board/addArticle','/board/list']};

export function Nav() {
  const dispatch = useDispatch()
  const [imageInfos, setImageInfos] = useState({imageUrl: 'https://as2.ftcdn.net/v2/jpg/01/85/61/65/1000_F_185616556_uCc1J5d5GNfRH6ErgP1G8x8ORLeG25en.jpg', imageTitle: 'sign'});
  const [userUrls, setUserUrls] = useState({subTitles:[], urls:[]});

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

  const handleLogout = e => {
    e.preventDefault()
    dispatch(logoutRequest())
  }

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Typography 
        component="h2"
          variant="h4"
          color="inherit"
          noWrap
          sx={{ flex: 1 }}
        ><a href='/'>
          My Website
        </a>
        </Typography>
        <Typography
            color="inherit"
            noWrap
            variant="body2"
            sx={{ p: 1, flexShrink: 0 }}>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {basicSettings.urls.map((urls, i) => (
              <a href={urls} key={i} style = {{textDecoration: 'none'}}><Button key={i} onClick={handleCloseNavMenu} sx={{ color:"inherit", my: 2, display: 'block' }} >
                {basicSettings.subTitles[i]} </Button>
              </a>))}
          </Box>
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small">
        <a href='/auth/login'>
        Sign in
        </a>
        </Button>
      </Toolbar>
    </React.Fragment>
  );
}
