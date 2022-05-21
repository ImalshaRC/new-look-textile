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

export default function OutletList() {

    const [outlets, setOutlet] = useState([]);
    useEffect(() => {
        loadOutlet();
    }, []);

    const loadOutlet = async() => {
        const result = await axios.get('http://localhost:5000/outlet/');
        setOutlet(result.data.reverse());
    }

    

    const [searchText, setSearchText] = useState('');


    const handlesearchArea = value => {
        setSearchText(value);
        filterData(value);   
    }

    const filterData = value => {
        const lowerCaseValue = value.toLowerCase().trim();
        if(!lowerCaseValue){
            loadOutlet();
        }
        else{      
            const filteredData = outlets.filter(item => {
                return Object.keys(item).some(key => {
                    return item[key].toString().toLowerCase().includes(lowerCaseValue);
                })
            });
            setOutlet(filteredData);
        }
    }

    let history = useHistory();

    const goToCategory = () => {
        history.push("/section/outlet");
    }

    const goToOutletOrderList = () => {
        history.push("/section/outletorderlist");
    }

    const goToOutletSummary = () => {
        history.push("/section/outlet-summary");
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

    const deleteUser = async () => {
        await axios.delete("http://localhost:5000/outlet/delete/" + customerID);
        loadOutlet();
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
                <Button onClick={deleteUser} autoFocus>
                    Agree
                </Button>
                </DialogActions>
            </Dialog>


            <div className="searchPanel">
                <div className="searchPanel_addNew">
                <div className="d-flex">
                    <button className="newCustomer_btn" onClick={goToCategory}>
                        Add Outlet
                    </button>
                    <button onClick={goToOutletOrderList} className="newCustomer_btn mx-4">
                        Outlet Orders
                    </button> 
                    <button onClick={goToOutletSummary} className="newCustomer_btn mx-4">
                        Outlet Summary
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
                <th scope="col">Owner Name</th>
                <th scope="col">NIC</th>
                <th scope="col">Outlet Name</th>
                <th scope="col">Owner Address</th>
                <th scope="col">Owner Phone</th>
                <th scope="col">Date</th>
                <th scope="col">E-mail</th>
                <th scope="col">Outlet ID</th>
                <th scope="col">Outlet Phone</th>
                <th scope="col">action</th>
            </tr>
        </thead>
        <tbody>
    {
        outlets.map((outlet, index) => (
            <tr>
                <td scope="row"><center>{index + 1}</center></td>
                <td><center>{outlet.ownerName}</center></td>
                <td><center>{outlet.NIC}</center></td>
                <td><center>{outlet.outletName}</center></td>
                <td><center>{outlet.ownerAddress}</center></td>
                <td><center>{outlet.ownerPhone}</center></td>
                <td><center>{outlet.date}</center></td>
                <td><center>{outlet.email}</center></td>
                <td><center>{outlet.outletID}</center></td>
                <td><center>{outlet.outletPhone}</center></td>
                <td scope="col"><center>
                    {/* <Link to={`/User/${outlet._id}`}><button class="table_btns">View</button></Link>&nbsp; */}
                    <Link to={`/section/outlet-order/${outlet._id}`}><button class="table_btns">Order</button></Link>&nbsp;
                    <Link to={`/section/update-outlet/${outlet._id}`}><button class="table_btns">Update</button></Link>&nbsp;
                    <button class="table_btns" onClick={() => {handleClickOpen(outlet._id)}}>Delete</button>
                    </center></td>
            </tr> 
        ))
    }
  </tbody>
</table>
{/* </div> */}
</div>
    {outlets.length === 0 && <span>no records found to display</span>}
        </div>
    )
}