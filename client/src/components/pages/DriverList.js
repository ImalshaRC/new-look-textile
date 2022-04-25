import React, {useState, useEffect} from "react";
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
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

    const [searchText, setSearchText] = useState('');


    const handlesearchArea = value => {
        setSearchText(value);
        filterData(value);   
    }

    const filterData = value => {
        const lowerCaseValue = value.toLowerCase().trim();
        if(!lowerCaseValue){
            loadDriver();
        }
        else{      
            const filteredData = drivers.filter(item => {
                return Object.keys(item).some(key => {
                    return item[key].toString().toLowerCase().includes(lowerCaseValue);
                })
            });
            setDrivers(filteredData);
        }
    }

    let history = useHistory();

    const goToAddDriver = () => {
        history.push("/driver");
    }

    return(
        <div>


            <div className="searchPanel">
                <div className="searchPanel_addNew">
                <div className="searchPanel_addNew d-flex">
                    <button className="newCustomer_btn" onClick={goToAddDriver}>
                        Add Driver
                    </button>
                    {/* <button onClick={goToOutletOrderList} className="newCustomer_btn mx-4">
                        All Outlet Orders
                    </button>                     */}
                </div>
                </div>
                <form className="searchBar">
                <input type="text" onChange={ e => handlesearchArea(e.target.value)} placeholder="Search here..."/>
                    <button type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                    </button>
                </form>
            </div>


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