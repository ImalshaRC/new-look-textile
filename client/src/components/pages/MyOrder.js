import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useHistory } from 'react-router';

export default function MyOrder() {

    let history = useHistory();

    const price = 2000;

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
        const isValid = formValidation();
        if(isValid){
            await axios.post('http://localhost:5000/order/add/', order).then(() => {
            alert("order added successfully");
            }).catch((err) => {
                alert(err);
            })
        
            history.push("/");     
        }     
    }

    console.log(price * quantity);

    const [colorErr, setColorErr] = useState({});
    const [sizeErr, setSizeErr] = useState({});
    const [quantityErr, setQuantityErr] = useState({});
    const [totalErr, setTotalErr] = useState({});

    const formValidation = () =>{

        const colorErr = {};
        const sizeErr = {};
        const quantityErr = {};
  
        let isValid = true;

        if(color.trim().length === 0){
            colorErr.colorNull = "Please insert color";
            isValid = false;
        }
        else if(size.trim().length === 0){
            sizeErr.sizeNull = "Please insert size";
            isValid = false;
        }
    
        else if(quantity.trim().length === 0){
            quantityErr.quantityNull = "Please insert quantity";
            isValid = false;
        }

        else if(total.trim().length === 0){
            totalErr.totalNull = "Please insert total";
            isValid = false;
        }
  
        setColorErr(colorErr);
        setSizeErr(sizeErr);
        setQuantityErr(quantityErr); 
        setTotalErr(totalErr); 
  
        return isValid;
      }

    return(
        <div class="myOrder">
            <form onSubmit={e => onSubmit(e)}>

                <br/><center><h3>My Order Page</h3></center>

                <table class="payment-table">
                    <tr>
                        <td>
                            Color
                            <select name="color" value={color} onChange={ e => onInputChange(e)} required>
                                <option>Select Color</option>
                                <option value="White">White</option>
                                <option value="Black">Black</option>
                            </select>
                            {Object.keys(colorErr).map((key)=>{
                                return <div style={{color: "#ff2b2b"}}>{colorErr[key]}</div>
                                })}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Size
                            <select name="size" value={size} onChange={ e => onInputChange(e)} >
                                <option>Select Size</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                            </select>
                            {Object.keys(sizeErr).map((key)=>{
                                return <div style={{color: "#ff2b2b"}}>{sizeErr[key]}</div>
                                })}
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
                            </select>
                            {Object.keys(quantityErr).map((key)=>{
                                return <div style={{color: "#ff2b2b"}}>{quantityErr[key]}</div>
                                })}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Total
                            <input type="text" name="total" placeholder="Enter Total" value={total} onChange={ e => onInputChange(e)}/>
                            {Object.keys(totalErr).map((key)=>{
                                return <div style={{color: "#ff2b2b"}}>{totalErr[key]}</div>
                                })}
                        </td>
                    </tr>
                    <tr>
                        <center>
                            <td>
                                <button type = "submit" onclick="" class="button">Add To Cart</button>
                            </td>
                        </center>
                    </tr>
                </table>    
                
            </form>
        </div>
    );
}