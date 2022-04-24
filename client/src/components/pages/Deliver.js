import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

export default function Deliver() {

    let history = useHistory();
    const { id } = useParams();

    const [payment, setPayment] = useState({
        fullName: "",
        phone: "",
        email: "",
        country: "",
        city: "",
        sAddress: "",
        pCode: "",
        method: ""
    });

    const { fullName, phone, email, country, city, sAddress, pCode, method } = payment;

    useEffect(() => {
        loadCustomer();
    }, []);

    
  
    const loadCustomer = async () => {
        await axios.get("http://localhost:5000/payment/get/" + id).then((result) => {
        setPayment(result.data); 
        
        })          
    }   

    const [deliver, setDeliver] = useState({
        cusName: "",
        cusCountry: "",
        cusCity: "",
        cusEmail: "",
        cusPhone: "",
        cusPCode: "",
        driverName: "",
        vehicleNo: "",
        driverID: "",
        deliveryTime: "",
        driverPhone: ""
    });

    const updateDeliver = () => {
        setDeliver(previousState => {
          return { ...previousState, cusName: fullName, cusCountry: country, cusCity: city, cusEmail: email, cusPhone: phone, cusPCode: pCode }
        });
      }

    const { cusName, cusCountry, cusCity, cusEmail, cusPhone, cusPCode, driverName, vehicleNo, driverID, deliveryTime, driverPhone } = deliver;

    const onInputChange = e => {
        setDeliver({...deliver, [e.target.name]: e.target.value});
    }

    

    const onSubmit = async e => {
        updateDeliver();
        e.preventDefault();      
        await axios.post('http://localhost:5000/deliver/add/', deliver).then(() => {
            alert("driver added successfully");
        }).catch((err) => {
            alert(err);
        })
        history.push("/");          
    }

    // console.log(deliver);

    return(
        <div class="driver-include">
            <form onSubmit={e => onSubmit(e)}>

                <br/><center><h3>Delivery Page</h3></center><br/>

                <table class="driver-table">
                    <tr>
                        <td>
                            Customer Name
                            <input type="text" name="cusName" value={fullName} placeholder="Enter Full Name"/>
                        </td>
                        <td className="tb-right">
                            Country
                            <input type="text" name="cusCountry" value={country} placeholder="Enter Phone Number"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            City
                            <input type="text" name="cusCity" value={city} placeholder="Enter Your E-mail"/>
                        </td>
                        <td className="tb-right">
                            E-mail
                            <input type="text" name="cusEmail" value={email} placeholder="Enter Your E-mail"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Customer Phone
                            <input type="text" name="cusPhone" value={phone} placeholder="Enter Your city"/>
                        </td>
                        <td className="tb-right">
                            Postal Code
                            <input type="text" name="cusPCode" value={pCode} placeholder="Enter Street Address"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Driver Name
                            <input type="text" name="driverName" value={driverName} placeholder="Enter Your Posatal Code" onChange={ e => onInputChange(e)}/>
                        </td>
                        <td className="tb-right">                            
                            Vehicle Number
                            <input type="text" name="vehicleNo" value={vehicleNo} placeholder="Enter Your Posatal Code" onChange={ e => onInputChange(e)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Driver ID
                            <input type="text" name="driverID" value={driverID} placeholder="Enter Your Posatal Code" onChange={ e => onInputChange(e)}/>
                        </td>
                        <td className="tb-right">                            
                            Delivery Time
                            <input type="text" name="deliveryTime" value={deliveryTime} placeholder="Enter Your Posatal Code" onChange={ e => onInputChange(e)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>                            
                            Driver Phone
                            <input type="text" name="driverPhone" value={driverPhone} placeholder="Enter Your Posatal Code" onChange={ e => onInputChange(e)}/>
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