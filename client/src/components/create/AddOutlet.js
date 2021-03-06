import React, { useState } from "react";
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddOutlet() {

    let history = useHistory();
    const { id } = useParams();

    const [outlet, setOutlet] = useState({
        ownerName: "",
        NIC: "",
        outletName: "",
        ownerAddress: "",
        ownerPhone: "",
        date: "",
        email: "",
        password: "",
        outletID: "",
        outletPhone: ""
    });

    const { ownerName, NIC, outletName, ownerAddress, ownerPhone, date, email, password, outletID, outletPhone } = outlet;

    const onInputChange = e => {
        setOutlet({...outlet, [e.target.name]: e.target.value});
    }

    const onSubmit = async e => {
        e.preventDefault();
        const valid = formValidation();
        if(valid){
            await axios.post('http://localhost:5000/outlet/add/', outlet).then(() => {
                alert("Outlet Added Successfully");
            }).catch((err) => {
                alert(err);
            })
            history.push("/section/outletlist");
        }                      
    }

    const formValidation = () =>{
  
        let isValid = true;

        if(ownerName.trim().length === 0){
            toast.error("Please insert color");
            isValid = false;
        }
        else if(NIC.trim().length === 0){
            toast.error("Please insert size");
            isValid = false;
        }
    
        else if(outletName.trim().length === 0){
            toast.error("Please insert quantity");
            isValid = false;
        }

        else if(ownerAddress.trim().length === 0){
            toast.error("Please insert quantity");
            isValid = false;
        }

        else if(ownerPhone.trim().length === 0){
            toast.error("Please insert quantity");
            isValid = false;
        }

        else if(date.trim().length === 0){
            toast.error("Please insert quantity");
            isValid = false;
        }

        else if(!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
            toast.error("Please insert quantity");
            isValid = false;
        }

        else if(!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)){
            toast.error("Please insert quantity");
            isValid = false;
        }

        else if(outletID.trim().length === 0){
            toast.error("Please insert quantity");
            isValid = false;
        } 
        else if(outletPhone.trim().length === 0){
            toast.error("Please insert quantity");
            isValid = false;
        }
  
        return isValid;
      }

    return(
        <div class="outlet-include">
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

                <br/><center><h3>Add Outlet</h3></center><br/>

                <table class="payment-table">
                    <tr>
                        <td>
                            Outlet Owner Name
                            <input type="text" name="ownerName" value={ownerName} placeholder="Enter Code" onChange={ e => onInputChange(e)}/><br/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Outlet Owner NIC
                            <input type="text" name="NIC" value={NIC} placeholder="Enter Product Name" onChange={ e => onInputChange(e)}/><br/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Outlet Name
                            <input type="text" name="outletName" value={outletName} placeholder="Enter Product Name" onChange={ e => onInputChange(e)}/><br/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Outlet Owner Address
                            <input type="text" name="ownerAddress" value={ownerAddress} placeholder="Enter Price" onChange={ e => onInputChange(e)}/><br/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Outlet Owner Telephone No
                            <input type="text" name="ownerPhone" value={ownerPhone} placeholder="Enter Price" onChange={ e => onInputChange(e)}/><br/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Register Date
                            <input type="text" name="date" value={date} placeholder="Enter Price" onChange={ e => onInputChange(e)}/><br/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Outlet/Owner E-mail
                            <input type="text" name="email" value={email} placeholder="Enter Your Color" onChange={ e => onInputChange(e)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Password
                            <input type="password" id="psw-input-field" name="password" value={password} placeholder="Enter Your Color" onChange={ e => onInputChange(e)}/><br/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Outlet ID
                            <input type="text" name="outletID" value={outletID} placeholder="Enter Date" onChange={ e => onInputChange(e)}/><br/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Outlet Phone No
                            <input type="text" name="outletPhone" value={outletPhone} placeholder="Enter Date" onChange={ e => onInputChange(e)}/><br/>
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