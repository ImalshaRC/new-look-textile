import React, {useState, useEffect} from "react";
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import '../css/styles.css';
import '../css/css1.css';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function DeliverList() {

    const [delivers, setDelivers] = useState([]);
    useEffect(() => {
        loadDeliver();
    }, []);

    const loadDeliver = async() => {
        const result = await axios.get('http://localhost:5000/deliver/');
        setDelivers(result.data.reverse());
    }

    

    const [searchText, setSearchText] = useState('');


    const handlesearchArea = value => {
        setSearchText(value);
        filterData(value);   
    }

    const filterData = value => {
        const lowerCaseValue = value.toLowerCase().trim();
        if(!lowerCaseValue){
            loadDeliver();
        }
        else{      
            const filteredData = delivers.filter(item => {
                return Object.keys(item).some(key => {
                    return item[key].toString().toLowerCase().includes(lowerCaseValue);
                })
            });
            setDelivers(filteredData);
        }
    }

    let history = useHistory();

    const goToDeliverSummary = () => {
        history.push("/section/deliver-summary");
    }

    const  [customerID, setCustomerID] = useState("");

    const [open, setOpen] = useState(false); 

    const handleClickOpen = (id) => {
        setOpen(true);
        setCustomerID(id);
    };
  
    const onCancel = () => {
        setOpen(false);
    };

    const deleteDeliver = async () => {
        await axios.delete("http://localhost:5000/deliver/delete/" + customerID);
        loadDeliver();
        setOpen(false);
    }

    return(
        <div>

            <Dialog
                open={open}
                onClose={onCancel}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                {"Are you sure you want to delete this?"}
                </DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Please confirm Here
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={onCancel}>Cancel</Button>
                <Button onClick={deleteDeliver} autoFocus>
                    Agree
                </Button>
                </DialogActions>
            </Dialog>


            <div className="searchPanel">
                <div className="searchPanel_addNew">
                <div className="searchPanel_addNew d-flex">
                    <Link to="/section/addDeliverTable" style={{textDecoration: 'none'}}><button className="newCustomer_btn mx-2">
                        Add Deliver
                    </button></Link>
                    <Link to="/section/deliverlist" style={{textDecoration: 'none'}}><button className="newCustomer_btn mx-2">
                        Deliver List
                    </button></Link>
                    <button className="newCustomer_btn mx-2 px-2" onClick={goToDeliverSummary}>
                        Summary
                    </button>                                       
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
                <th scope="col">Customer Name</th>
                <th scope="col">Customer Country</th>
                <th scope="col">Customer City</th>
                <th scope="col">Customer E-mail</th>
                <th scope="col">Customer Phone</th>                
                <th scope="col">Postal Code</th>
                <th scope="col">Driver Name</th>
                <th scope="col">Vehicle No</th>
                <th scope="col">Driver ID</th>
                <th scope="col">Delivery Time</th>
                <th scope="col">Driver Phone</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
    {
        delivers.map((deliver, index) => (
            <tr>
                <center><td >{index + 1}</td></center>
                <td><center>{deliver.cusName}</center></td>   
                <td><center>{deliver.cusCountry}</center></td>
                <td><center>{deliver.cusCity}</center></td>
                <td><center>{deliver.cusEmail}</center></td> 
                <td><center>{deliver.cusPhone}</center></td> 
                <td><center>{deliver.cusPCode}</center></td> 
                <td><center>{deliver.driverName}</center></td> 
                <td><center>{deliver.vehicleNo}</center></td> 
                <td><center>{deliver.driverID}</center></td> 
                <td><center>{deliver.deliveryTime}</center></td> 
                <td><center>{deliver.driverPhone}</center></td>          
                <td scope="col"><center>
                    <button onClick={() => {handleClickOpen(deliver._id)}} class="table_btns">Delete</button></center>
                </td>
            </tr> 
        ))
    }
  </tbody>
</table>
{/* </div> */}
</div>
    {delivers.length === 0 && <span>no records found to display</span>}
        </div>
    )
}