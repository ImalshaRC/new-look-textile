import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

function SignIN() {

  let history = useHistory();

    const [signin, setSignIn] = useState({
        userID: "",
        psw: ""
    });

    

    const { userID, psw } = signin;

    const onInputChange = e => {
        setSignIn({...signin, [e.target.name]: e.target.value});
    }

    const abc  = Object(userID);

    const onSubmit = async e => {
      
      
        console.log(userID);
        history.push("/test");
      
    };

return(
    <div class="include1">
      <form onSubmit={e => onSubmit(e)}>
        <center><h1>Sign in</h1></center><br/>
        <center>
        <b>User ID</b><br/>
        <input type="text" name="userID" value={userID} class="insert1" placeholder="User ID"  onChange={ e => onInputChange(e)} required /><br/><br/>
        <b>Password</b><br/>
        <input type="text" name="psw" value={psw} class="insert1" placeholder="Password"  onChange={ e => onInputChange(e)} required /><br/><br/>
        
        <button type = "submit" onclick="" class="button">Submit</button>
        <button type = "reset" onclick="" class="button">reset</button>
             
      </center>
      </form>
  </div> 
  )
}
export default SignIN;