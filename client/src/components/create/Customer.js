import React, { useRef, useState } from "react";
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Customer() {

    let history = useHistory();
    const { id } = useParams();

    const [customer, setCustomer] = useState({
        firstName: "", 
        lastName: "", 
        userName: "", 
        birthDate: "", 
        phone: "", 
        address: "", 
        email: "", 
        gender: "", 
        password: "", 
    });

    const { firstName, lastName, userName, birthDate, phone, address, email, gender, password, rePassword, isChecked } = customer;

    const onInputChange = e => {
        setCustomer({...customer, [e.target.name]: e.target.value});
    }

    console.log(isChecked);

    const onSubmit = async e => {
        e.preventDefault();
        const valid = formValidation();
        if(valid){
            await axios.post('http://localhost:5000/user/add/', customer).then(() => {
                alert("customer added successfully");
            }).catch((err) => {
                alert(err);
            })    
            history.push("/");
        }
                  
    }

    const formValidation = () =>{
  
        let isValid = true;

        if(firstName.trim().length === 0){
            toast.error("Please insert color");
            isValid = false;
        }
        else if(lastName.trim().length === 0){
            toast.error("Please insert size");
            isValid = false;
        }

        else if(userName.trim().length === 0){
            toast.error("Please insert user name");
            isValid = false;
        }

        else if(birthDate.trim().length === 0){
            toast.error("Please insert Birth Date");
            isValid = false;
        }

        else if(phone.trim().length === 0){
            toast.error("Please insert quantity1");
            isValid = false;
        }

        else if(address.trim().length === 0){
            toast.error("Please insert quantity2");
            isValid = false;
        } 
    
        else if(!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
            toast.error("Please insert quantity3");
            isValid = false;
        }

        else if(gender.trim().length === 0){
            toast.error("Please insert Gender");
            isValid = false;
        } 

        else if(!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)){
            toast.error("Please insert valid Password");
            isValid = false;
        }
        else if(password !== rePassword){
            toast.error("Password Mismatched");
            isValid = false;
        }
  
        return isValid;
      }

    return(
        <div class="driver-include">
            <form onSubmit={e => onSubmit(e)}>

                <ToastContainer style={{ width: "450px", textAlign: 'center', fontSize: '17px', fontFamily: 'fantasy' }}
                    position="top-center"
                    theme='light'
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    limit={1}
                />

                <br/><br/><center><h3>Customer Add Page</h3></center><br/>

                <table class="driver-table">
                    <tr>
                        <td>
                            First Name
                            <input type="text" name="firstName" value={firstName} placeholder="Enter Full Name" onChange={ e => onInputChange(e)}/>
                        </td>
                        <td className="tb-right">
                            Last Name
                            <input type="text" name="lastName" value={lastName} placeholder="Enter Phone Number" onChange={ e => onInputChange(e)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            User name
                            <input type="text" name="userName" value={userName} placeholder="Enter Your E-mail" onChange={ e => onInputChange(e)}/>
                        </td>
                        <td className="tb-right">
                            Birth Date
                            <input type="text" name="birthDate" value={birthDate} placeholder="Enter Your E-mail" onChange={ e => onInputChange(e)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Contact Number
                            <input type="text" name="phone" value={phone} placeholder="Enter Your city" onChange={ e => onInputChange(e)}/>
                        </td>
                        <td className="tb-right">
                            Address
                            <input type="text" name="address" value={address} placeholder="Enter Street Address" onChange={ e => onInputChange(e)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            E-mail
                            <input type="text" name="email" value={email} placeholder="Enter Your Posatal Code" onChange={ e => onInputChange(e)}/>
                        </td>
                        <td className="tb-right">
                            Gender
                            <select name="gender" value={gender} onChange={ e => onInputChange(e)} >
                                <option>Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </td>
                    </tr>  
                    <tr>
                        <td>
                            Password
                            <input type="password" id="psw-input-field" name="password" value={password} placeholder="Enter Your Password" onChange={ e => onInputChange(e)}/>
                        </td>
                        <td className="tb-right">
                            Re Enter Password
                            <input type="password" id="psw-input-field" name="rePassword" value={rePassword} placeholder="Enter Your Password" onChange={ e => onInputChange(e)}/>
                        </td>
                    </tr>
                    <tr className="d-flex">
                        <td>
                            I agree to the terms abd conditions.
                        </td>
                        <td className="px-4">
                            <input type="checkbox" name="isChecked" value={isChecked} onChange={ e => onInputChange(e)}/>
                        </td>
                    </tr>
                    
                </table><br/>

                <center>
                    <table>
                        <tr>
                            <td>
                                <button type = "reset" class="button">Reset</button>                            
                            </td>
                            <td>
                                <button type = "submit" onclick="" class="button">Confirm</button>
                            </td>
                        </tr>
                    </table>
                </center> 
            </form>
        </div>
    );
}