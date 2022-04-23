import React, {useState, useEffect} from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../css/styles.css';
import '../css/css1.css';

export default function MyCart() {

    const [orders, setOrder] = useState([]);
    useEffect(() => {
        loadOrder();
    }, []);

    const loadOrder = async() => {
        const result = await axios.get('http://localhost:5000/order/');
        setOrder(result.data.reverse());
    }

    const deleteUser = async id => {
        await axios.delete("http://localhost:5000/order/delete/" + id);
        loadOrder();
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
                <th scope="col">Color</th>
                <th scope="col">Size</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total Price</th>                
                <th scope="col">action</th>
            </tr>
        </thead>
        <tbody>
    {
        orders.map((order, index) => (
            <tr>
                <center><td >{index + 1}</td></center>
                <td><center>{order.total}</center></td>   
                <td><center>{order.color}</center></td>
                <td><center>{order.size}</center></td>
                <td><center>{order.quantity}</center></td>          
                <td scope="col"><center>
                    <Link to={`/updateorder/${order._id}`}><button class="table_btns">Update</button></Link>&nbsp;
                    <Link to={`/payment/${order._id}`}><button class="table_btns">Payment</button></Link>&nbsp;
                    <button onClick={() => {deleteUser(order._id)}} class="table_btns">Delete</button></center>
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