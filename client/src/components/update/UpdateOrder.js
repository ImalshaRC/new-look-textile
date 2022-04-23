import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

export default function UpdateOrder() {

    let history = useHistory();
    const { id } = useParams();

    const [order, setOrder] = useState({
        color: "",
        size: "",
        quantity: "",
        total: ""
    });

    const { color, size, quantity, total } = order;

    const onInputChange = e => {
        setOrder({...order, [e.target.name]: e.target.value});
    }

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put('http://localhost:5000/order/update/' + id, order).then(() => {
        alert("order updated successfully");
        }).catch((err) => {
            alert(err);
        })
    
        history.push("/");          
    }

    useEffect(() => {
        loadUser();
      }, []);
  
      const loadUser = async () => {
          const result = await axios.get("http://localhost:5000/order/get/" + id);
          setOrder(result.data);
      }

      return(
        <div class="myOrder">
            <form onSubmit={e => onSubmit(e)}>

                <br/><center><h3>My Order Page</h3></center>

                <table class="payment-table">
                    <tr>
                        <td>
                            Color
                            <select name="color" value={color} onChange={ e => onInputChange(e)} >
                                <option>Select Color</option>
                                <option value="White">White</option>
                                <option value="Black">Black</option>
                            </select><br/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Size
                            <select name="size" value={size} onChange={ e => onInputChange(e)} >
                                <option>Select Size</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                            </select><br/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Quantity
                            <select name="quantity" value={quantity} onChange={ e => onInputChange(e)} >
                                <option>Select Quantity</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select><br/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Total
                            <input type="text" name="total" placeholder="Enter Total" value={total} onChange={ e => onInputChange(e)}/><br/>
                        </td>
                    </tr>
                    <tr>
                        <center>
                            <td>
                                <button type = "submit" onclick="" class="button">Update Order</button>
                            </td>
                        </center>
                    </tr>
                </table>    
                
            </form>
        </div>
    );
}