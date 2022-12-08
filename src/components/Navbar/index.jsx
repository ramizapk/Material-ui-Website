import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import {

    Link
} from "react-router-dom";
import Button from '@mui/material/Button';

import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LoginIcon from '@mui/icons-material/Login';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function ButtonAppBar() {
    return (

        <AppBar position="static"  >
            <Toolbar sx={{background:"white"}}>
                <Stack direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={8}
                    width="100%"
                    background="white" 
                    pb="30px"
                    pt="30px" 
                    mx="50px" >
                    <Box sx={{ml:"60px"}}>
                     <img src="https://flone.jamstacktemplates.dev/assets/img/logo/logo.png" alt="logo" width="130px"/>
                    </Box>
                    <Box sx={{px:"100px"}}>
                        <Button sx={{color:"#555252", fontSize:"18px", width:"150px"}} component={Link} to='/'>Home</Button>
                        <Button sx={{color:"#555252", fontSize:"18px",  width:"150px"}} component={Link} to='/accessories'>Accessories <KeyboardArrowDownIcon/></Button>

                        <Button sx={{color:"#555252", fontSize:"18px", width:"150px"}} component={Link} to='/mobile'>Mobile <KeyboardArrowDownIcon/></Button>
                        <Button sx={{color:"#555252", fontSize:"18px", width:"150px"}} component={Link} to='/contact'>Contact Us</Button>
                    </Box>
                    <Box sx={{width:"200px"}}>
                        <SearchIcon className="icon-size" sx={{color:"black", width:"50px",height:"35px"}}/>
                        <PersonOutlineIcon className="icon-size" sx={{color:"black",width:"50px",height:"35px"}}/>
                        <FavoriteBorderIcon className="icon-size" sx={{color:"black", width:"50px",height:"35px"}}/>
                        <LoginIcon className="icon-size" sx={{color:"black", width:"50px",height:"35px"}}/>
                    </Box>
                </Stack>
            </Toolbar>
        </AppBar>

    );
}
