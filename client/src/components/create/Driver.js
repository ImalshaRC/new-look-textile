import React, { useState } from "react";
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

export default function Driver() {

    let history = useHistory();
    const { id } = useParams();

    const [driver, setDriver] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phone: "",
        address: "",
        lisenNo: "",
        vehicleReg: "",
        vType: "",
        vModel: "",
        vColor: "",
        vYear: "",
        vInsCom: "",
        vInsID: ""
    });

    const { firstName, lastName, email, password, phone, address, lisenNo, vehicleReg, vType, vModel, vColor, vYear, vInsCom, vInsID } = driver;

    const onInputChange = e => {
        setDriver({...driver, [e.target.name]: e.target.value});
    }

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post('http://localhost:5000/driver/add/', driver).then(() => {
            alert("driver added successfully");
        }).catch((err) => {
            alert(err);
        })
    
        history.push("/");          
    }

    return(
        <div class="driver-include">
            <form onSubmit={e => onSubmit(e)}>

                <br/><center><h3>Driver Add Page</h3></center>

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
                            E-mail
                            <input type="text" name="email" value={email} placeholder="Enter Your E-mail" onChange={ e => onInputChange(e)}/>
                        </td>
                        <td className="tb-right">
                            Password
                            <input type="password" name="password" value={password} placeholder="Enter Your E-mail" onChange={ e => onInputChange(e)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Phone
                            <input type="text" name="phone" value={phone} placeholder="Enter Your city" onChange={ e => onInputChange(e)}/>
                        </td>
                        <td className="tb-right">
                            Address
                            <input type="text" name="address" value={address} placeholder="Enter Street Address" onChange={ e => onInputChange(e)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Lisen No
                            <input type="text" name="lisenNo" value={lisenNo} placeholder="Enter Your Posatal Code" onChange={ e => onInputChange(e)}/>
                        </td>
                        <td className="tb-right">                            
                            Vehicle Reg Number
                            <input type="text" name="vehicleReg" value={vehicleReg} placeholder="Enter Your Posatal Code" onChange={ e => onInputChange(e)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Vehicle Type
                            <select name="vType" value={vType} onChange={ e => onInputChange(e)} >
                                <option>Select Vehicle Type</option>
                                <option value="SriLanka">Toyota</option>
                                <option value="India">Nissan</option>
                            </select>
                        </td>
                        <td className="tb-right">
                            Vehicle Color
                            <select name="vColor" value={vColor} onChange={ e => onInputChange(e)} >
                                <option>Select Vehicle Color</option>
                                <option value="SriLanka">Red</option>
                                <option value="India">Blue</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Vehicle Model
                            <select name="vModel" value={vModel} onChange={ e => onInputChange(e)} >
                                <option>Select Vehicle Model</option>
                                <option value="Long weel">Long weel</option>
                                <option value="Short weel">Short weel</option>
                            </select>
                        </td>
                        <td className="tb-right">
                            Vehicle Year
                            <select name="vYear" value={vYear} onChange={ e => onInputChange(e)} >
                                <option>Select Vehicle Year</option>
                                <option value="1999">1999</option>
                                <option value="2000">2000</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Insurance Company
                            <select name="vInsCom" value={vInsCom} onChange={ e => onInputChange(e)} >
                                <option>Select Insurance Company</option>
                                <option value="SriLanka">Sri Lanka Insurance</option>
                            </select>
                        </td>
                        <td className="tb-right">
                            Insurance ID Number
                            <select name="vInsID" value={vInsID} onChange={ e => onInputChange(e)} >
                                <option>Select Insurance Company ID</option>
                                <option value="1023">1023</option>
                                <option value="1024">1024</option>
                            </select>
                        </td>
                    </tr>
                    
                </table><br/><br/>

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