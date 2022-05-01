import React, { useEffect } from 'react';
import "../css/header.css";
import { Link, useHistory } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import SettingsIcon from '@material-ui/icons/Settings';

 function MainHeader(){


    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const cookies = new Cookies();

    console.log(cookies.get("token"));

    let history = useHistory();

    const goToLogOut = () => {

        cookies.remove("token", {path: "/"})
        history.push("/signin");        
    }
   
    return(
        <>

            <div className='float-end'>
                <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
                    <SettingsIcon/>
                </Button>
                <Menu id="fade-menu" anchorEl={anchorEl} keepMounted open={open} onClose={handleClose} TransitionComponent={Fade}>
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>
                        <button onClick={goToLogOut} className='bg-transparent'>Log Out</button>
                    </MenuItem>
                </Menu>
            </div>

            <div class = "line1"><h4><i><b>NEW LOOK TEXTILE FACTORY</b></i></h4></div>
        
            <hr class = "hr1"></hr>    
            <h2 class="line2">Welcome to a </h2>
            <p class="line3"><b>Colorful Life</b></p>

            <div align="right">
                <Link to="/signin"><button name ="Login" class ="btn1">Login</button></Link>
                <Link to="/signup"><button name ="Sign in" class ="btn2">Sign Up</button></Link>
            </div>
        
            <hr class= "hr2"></hr>
                        
            <br></br><br></br>
            <div class="topnav">
                <ul>
                    <li><a href="home">Home</a></li>
                    <li><a href="/section/customerlist">Customer</a></li>
                    <li><a href="/section/employeelist">Employee</a></li>
                    <li><a href="/section/attendance">Attendance</a></li>
                    <li><a href="/section/productlist">Product</a></li>
                    <li><a href="/section/productcategory">Category</a></li>
                    <li><a href="/section/mycart">My Cart</a></li>                
                    <li><a href="/section/outletlist">Outlet</a></li>
                    <li><a href="/section/machinelist">Machine</a></li>
                    <li><a href="/section/orderManagement">Order Manage</a></li>
                    <li><a href="/section/driverlist">Driver</a></li>
                    <li><a href="/section/deliverlist">Deliver</a></li>
                </ul> <br></br><br></br>
            </div> 
        </>
    );
}


export default MainHeader;


