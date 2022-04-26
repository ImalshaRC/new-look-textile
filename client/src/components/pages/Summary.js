import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useHistory, useLocation, useParams } from 'react-router-dom';

export default function Summary() {

    // const { id } = useParams();

    const [order, setOrder] = useState({
        pdName: "",
        oColor: "",
        oSize: "",
        oQuantity: "",
        total: ""
    });

    const { pdName, oColor, oSize, oQuantity, total } = order;

    const search = useLocation().search;
    const fullName = new URLSearchParams(search).get('fullName');
    const phone = new URLSearchParams(search).get('phone');
    const email = new URLSearchParams(search).get('email');
    const country = new URLSearchParams(search).get('country');
    const city = new URLSearchParams(search).get('city');
    const sAddress = new URLSearchParams(search).get('sAddress');
    const pCode = new URLSearchParams(search).get('pCode');
    const method = new URLSearchParams(search).get('method');
    const id = new URLSearchParams(search).get('orderID');

    useEffect(() => {
        loadOrder();
      }, []);
  
      const loadOrder = async () => {
          const result = await axios.get("http://localhost:5000/order/get/" + id);
          setOrder(result.data);
      }

    return(
        <div class="include">            

            <br/><center><h3>Thanks for your order</h3></center><br/>

            <table class="summary-table">
                <tr>
                    <td>
                        <h6><b>Product name:</b> {pdName}</h6>
                    </td>                    
                    <td>
                        <h6><b>Shipping personal details</b></h6>
                        <h6>{fullName}</h6>
                        <h6>{phone}</h6>
                        <h6>{email}</h6>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h6><b>Color:</b> {oColor}</h6>
                        <h6><b>Size:</b> {oSize}</h6>
                        <h6><b>Quantity:</b> {oQuantity}</h6>
                    </td>
                    <td>
                        <h6><b>Shipping address</b></h6>
                        <h6>{country}</h6>
                        <h6>{sAddress}</h6>
                        <h6>{pCode}</h6>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h6><b>Total price</b></h6>
                        <h6>Rs.{total}</h6>
                    </td>
                    <td>
                        <h6><b>Payment method</b></h6>
                        <h6>{method}</h6>
                    </td>
                </tr>              
            </table><br/>

            <center>
                <table>
                    <tr>
                        <td>
                            <button type = "reset" class="button">Close</button>                            
                        </td>
                        <td>
                            <button type = "submit" onclick="" class="button">Print PDF</button>
                        </td>
                    </tr>
                </table>
            </center>  
        </div>
    );
}