import React, { useState } from 'react'
import NavBar from '../../components/NavBar';
import { Box, useMediaQuery } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';



const Layout = () => {

  const isNonMobile = useMediaQuery('(min-width: 600px)');
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const userId = useSelector((state) => state.global.userId);
  const { data } = useGetUserQuery(userId);


  return (
    <Box 
      display={isNonMobile ? 'flex' : 'block'}
      width='100%'
      height='100%'
    >
      <Box flexGrow={1}>
        <NavBar 
          user={ data || {} } 
          isSidebarOpen={ isSideBarOpen }
          setIsSidebarOpen={ setIsSideBarOpen }
        >
        </NavBar>
        <Outlet/>
      </Box>
    </Box>
  )
}

export default Layout;