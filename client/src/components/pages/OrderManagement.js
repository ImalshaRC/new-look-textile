import React, {useState, useEffect} from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../css/styles.css';
import '../css/css1.css';

export default function OrderManagement() {

    const [orders, setOrder] = useState([]);
    useEffect(() => {
        loadOrder();
    }, []);

    const loadOrder = async() => {
        const result = await axios.get('http://localhost:5000/payment/');
        setOrder(result.data.reverse());
    }

    return(
        <div>
            <i></i>
            <div className="tableContent">

            {/* <div> */}

            <table id="table">
        <thead>
            <tr>
                <th scope="col">Order ID</th>
                <th scope="col">Full Name</th>
                <th scope="col">Phone</th>
                <th scope="col">E-mail</th>
                <th scope="col">Country</th>
                <th scope="col">City</th>   
                <th scope="col">Address</th> 
                <th scope="col">Postal Code</th> 
                <th scope="col">Method</th>              
                <th scope="col">action</th>
            </tr>
        </thead>
        <tbody>
    {
        orders.map((order, index) => (
            <tr>
                <center><td >{index + 1}</td></center>
                <td><center>{order.fullName}</center></td>   
                <td><center>{order.phone}</center></td>
                <td><center>{order.email}</center></td>
                <td><center>{order.country}</center></td>
                <td><center>{order.city}</center></td> 
                <td><center>{order.sAddress}</center></td> 
                <td><center>{order.pCode}</center></td> 
                <td><center>{order.method}</center></td>          
                <td scope="col"><center>
                    <Link to={`/section/deliver/${order._id}`}><button class="table_btns">Deliver</button></Link></center>
                </td>
            </tr> 
        ))
    }
  </tbody>
</table>
{/* </div> */}
</div>
    {orders.length === 0 && <span>no records found to display</span>}
        </div>
    )
}