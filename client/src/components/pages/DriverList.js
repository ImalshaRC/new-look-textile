import React, {useState, useEffect} from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../css/styles.css';
import '../css/css1.css';

export default function DriverList() {

    const [drivers, setDrivers] = useState([]);
    useEffect(() => {
        loadDriver();
    }, []);

    const loadDriver = async() => {
        const result = await axios.get('http://localhost:5000/driver/');
        setDrivers(result.data.reverse());
    }

    const deleteUser = async id => {
        await axios.delete("http://localhost:5000/driver/delete/" + id);
        loadDriver();
    }

    return(
        <div>
            <i></i>
            <div className="tableContent">

            {/* <div> */}

            <table id="table">
        <thead>
            <tr>
                <th scope="col">Driver ID</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">E-mail</th>
                <th scope="col">Phone</th>                
                <th scope="col">Address</th>
                <th scope="col">Lisen No</th>
                <th scope="col">Vehicle Reg</th>
                <th scope="col">Vehicle Type</th>
                <th scope="col">Vehicle Model</th>
                <th scope="col">Vehicle Color</th>
                <th scope="col">Vehicle Year</th>
                <th scope="col">Vehicle Ins Com</th>
                <th scope="col">Vehicle Ins ID</th>
                <th scope="col">action</th>
            </tr>
        </thead>
        <tbody>
    {
        drivers.map((driver, index) => (
            <tr>
                <center><td >{index + 1}</td></center>
                <td><center>{driver.firstName}</center></td>   
                <td><center>{driver.lastName}</center></td>
                <td><center>{driver.email}</center></td>
                <td><center>{driver.phone}</center></td> 
                <td><center>{driver.address}</center></td> 
                <td><center>{driver.lisenNo}</center></td> 
                <td><center>{driver.vehicleReg}</center></td> 
                <td><center>{driver.vType}</center></td> 
                <td><center>{driver.vModel}</center></td> 
                <td><center>{driver.vColor}</center></td> 
                <td><center>{driver.vYear}</center></td> 
                <td><center>{driver.vInsCom}</center></td> 
                <td><center>{driver.vInsID}</center></td>          
                <td scope="col"><center>
                    <Link to={`/driver-profile/${driver._id}`}><button class="table_btns">View</button></Link>&nbsp;
                    <Link to={`/update-driver/${driver._id}`}><button class="table_btns">Update</button></Link>&nbsp;
                    <button onClick={() => {deleteUser(driver._id)}} class="table_btns">Delete</button></center>
                </td>
            </tr> 
        ))
    }
  </tbody>
</table>
{/* </div> */}
</div>
    {drivers.length === 0 && <span>no records found to display</span>}
        </div>
    )
}