import React, {useState, useEffect} from "react";
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import '../css/styles.css';
import '../css/css1.css';

export default function CustomerList() {

    const [customers, setCustomers] = useState([]);
    useEffect(() => {
        loadCustomer();
    }, []);

    const loadCustomer = async() => {
        const result = await axios.get('http://localhost:5000/customer/');
        setCustomers(result.data.reverse());
    }

    const deleteCustomer = async id => {
        await axios.delete("http://localhost:5000/customer/delete/" + id);
        loadCustomer();
    }

    const [searchText, setSearchText] = useState('');


    const handlesearchArea = value => {
        setSearchText(value);
        filterData(value);   
    }

    const filterData = value => {
        const lowerCaseValue = value.toLowerCase().trim();
        if(!lowerCaseValue){
            loadCustomer();
        }
        else{      
            const filteredData = customers.filter(item => {
                return Object.keys(item).some(key => {
                    return item[key].toString().toLowerCase().includes(lowerCaseValue);
                })
            });
            setCustomers(filteredData);
        }
    }

    let history = useHistory();

    const goToAddCustomer = () => {
        history.push("/section/customer");
    }

    return(
        <div>
            <div className="searchPanel">
                <div className="searchPanel_addNew">
                <div className="searchPanel_addNew d-flex">
                    <button className="newCustomer_btn" onClick={goToAddCustomer}>
                        Add Cuatomer
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
                <th scope="col">Index</th>
                <th scope="col">User Name</th>
                <th scope="col">Birth Date</th>
                <th scope="col">Phone</th>                
                <th scope="col">Address</th>
                <th scope="col">E-mail</th>
                <th scope="col">action</th>
            </tr>
        </thead>
        <tbody>
    {customers.map((customer, index) => (
            <tr>
                <center><td >{index + 1}</td></center>
                <td><center>{customer.userName}</center></td>
                <td><center>{customer.birthDate}</center></td> 
                <td><center>{customer.phone}</center></td> 
                <td><center>{customer.address}</center></td> 
                <td><center>{customer.email}</center></td>          
                <td scope="col"><center>
                    <Link to={`/section/customer-profile/${customer._id}`}><button class="table_btns">View</button></Link>&nbsp;
                    <Link to={`/section/update-customer/${customer._id}`}><button class="table_btns">Update</button></Link>&nbsp;
                    <button onClick={() => {deleteCustomer(customer._id)}} class="table_btns">Delete</button></center>
                </td>
            </tr> 
        ))
    }
  </tbody>
</table>
{/* </div> */}
</div>
    {customers.length === 0 && <span>no records found to display</span>}
        </div>
    )
}