import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function OutletSummary(){

    const [summary, setSummary] = useState([]);
    useEffect(() => {
        loadSummary();
    }, []);

    const loadSummary = async() => {
        const result = await axios.get('http://localhost:5000/outletOrder/find');
        setSummary(result.data.reverse());
    }
    
    var maxSum = 0;
    var currentSum = 0;
    var previousSum = 0;
    var outletID = "";
    var designCode = "";

    function calc (callback){ 
    
        summary.map((summary) => {

            currentSum = summary.sum;

            if(currentSum > previousSum){
                outletID = summary._id.outletID;  
                designCode = summary._id.designCode;    
                maxSum = currentSum;       
            }
            previousSum = currentSum;
        }) 
        callback(outletID, designCode, maxSum);  
    }

    calc((v1, v2, v3) => {
        outletID = v1;
        designCode = v2;
        maxSum = v3;
    });

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    return(
        <div class="product-summary">            

            <br/><center><h3>Product Summary</h3></center><br/>
            <div className="container">
                <table class="summary-table ">
                    <div className="row d-flex align-content-center">
                        <div className="col-15">
                            <tr>
                                <td>
                                    <h6><b>Date:</b></h6>
                                </td> 
                                <td>
                                    <h6><b>{today}</b></h6>
                                </td> 
                            </tr>
                            <tr>
                                <td>
                                    <h6><b>Outlet ID:</b></h6>
                                </td>
                                <td>
                                    <h6><b>{outletID}</b></h6>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h6><b>Design code:</b></h6>
                                </td>
                                <td>
                                    <h6><b>{designCode}</b></h6>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h6><b>Quantity:</b></h6>
                                </td>
                                <td>
                                    <h6><b>{maxSum}</b></h6>
                                </td>
                            </tr>    
                        </div>    
                        </div>          
                    </table><br/>
                </div>

            <center>
                <table>
                    <tr>
                        <td>
                            <button type = "reset" class="button">Close</button>                            
                        </td>
                        <td>
                            <button onclick="" class="button">Print PDF</button>
                        </td>
                    </tr>
                </table>
            </center>  
        </div>
    )
}