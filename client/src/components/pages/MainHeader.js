import React from 'react';
import "../css/header.css";

 function MainHeader(){
   
  return(
    <>
        <div class = "line1"><h4><i><b>NEW LOOK TEXTILE FACTORY</b></i></h4></div>
      
        <hr class = "hr1"></hr>    
        <h2 class="line2">Welcome to a </h2>
        <p class="line3"><b>Colorful Life</b></p>

       <div align="right">
           <button name ="Login" class ="btn1">Login</button>
           <button name ="Sign in" class ="btn2">Sign Up</button>
       </div>
   
       <hr class= "hr2"></hr>
                
        <br></br><br></br>
        <div class="topnav">
            <ul>
                <li><a href="home">Home</a></li>
                <li><a href="javascript:void(0)">Customer</a></li>
                <li><a href="/employeelist">Employee</a></li>
                <li><a href="/attendance">Attendance</a></li>
                <li><a href="/productlist">Product</a></li>
                <li><a href="/productcategory">Category</a></li>
                <li><a href="/mycart">My Cart</a></li>                
                <li><a href="/outletlist">Outlet</a></li>
                <li><a href="/machinelist">Machine</a></li>
                <li><a href="/orderManagement">Order Manage</a></li>
                <li><a href="/driverlist">Driver</a></li>
                <li><a href="/deliverlist">Deliver</a></li>
            </ul> <br></br><br></br>
        </div> 
    </>
    );
}


export default MainHeader;