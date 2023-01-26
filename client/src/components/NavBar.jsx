import React, { useState } from 'react';
import { LightModeOutlined, 
DarkModeOutlined,
Menu as MenuIcon, Search, SettingsOutlined, ArrowDropDownOutlined,
} from '@mui/icons-material';
import { setMode } from '../state'
import { AppBar,
IconButton,
InputBase,
Toolbar,
useTheme,
Button,
Box,
Typography,
MenuItem,
Menu } from '@mui/material';
import { useDispatch } from 'react-redux';
import FlexBox from './FlexBox';



const NavBar = ({ user, isSidebarOpen, setIsSidebarOpen }) => {

    const dispatch = useDispatch();
    const theme = useTheme();

    const [anchorEl, SetAnchorEl] = useState(null);
    //const isOpen = boolean(anchorEl);

    const handleClick = (event) => SetAnchorEl(event.currentTarget);
    const handleClose = () => SetAnchorEl(null);


  return (
    <AppBar sx={{position: 'static', background: 'none', boxShadow: 'none'}}>
        <Toolbar sx={{justifyContent: 'space-between'}}> 
        {/* left side of the nav bar */}
            <FlexBox>
                <IconButton onClick={() => setIsSideBarOpen(!isSideBarOpen)}>
                    <MenuIcon />
                </IconButton>
                <FlexBox 
               
                borderRadius='9px'
                gap='3rem'
                p='0.1rem 1.5rem'
                >
                <InputBase placeholder='Search...'/>
            </FlexBox>
            </FlexBox>
        {/* right side of the nav bar */}
            <FlexBox gap='1.5rem'>
                <IconButton onClick={() => dispatch(setMode())}>
                    { theme.palette.mode === 'dark' ? 
                        (<DarkModeOutlined sx={{ fontSize: '25px' }}/>) :
                        <LightModeOutlined sx={{ fontSize: '25px' }}/>
                    }
                </IconButton>
                <IconButton>
                    <SettingsOutlined sx={{ fontSize: '25px' }} />
                </IconButton>
                <FlexBox>
                    <Button
                        onClick={ handleClick }
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            textTransform: 'none',
                            gap: '1rem',
                        }}
                    >
                        <Box textAlign='left'>
                            <Typography 
                                fontWeight='bold' 
                                fontSize='0.9rem'
                                sx={{ color: theme.palette.primary['grey'] }}
                            >
                             
                            </Typography>
                            <Typography
                                fontSize='0.8rem'
                                sx={{ color: theme.palette.primary['grey']}}
                            >
                                
                            </Typography>
                            <ArrowDropDownOutlined 
                                sx={{ 
                                    color: theme.palette.primary['grey'],
                                    fontSize: '25px',
                                }}
                            />
                        </Box>
                        <Menu 
                            anchorEl={ anchorEl }
                            open={ isOpen }
                            onClose={ handleClick }
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center'
                            }}
                        >
                            <MenuItem onClick={ handleClose }> LOG OUT </MenuItem>
                        </Menu>
                    </Button>
                </FlexBox>
            </FlexBox>
        </Toolbar>
    </AppBar>
  )
}

export default NavBar;