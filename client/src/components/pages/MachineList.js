import React, {useState, useEffect} from "react";
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import '../css/styles.css';
import '../css/css1.css';

export default function MachineList() {

    const [machine, setMachine] = useState([]);
    
    useEffect(() => {
        loadMachine();
    }, []);

    const loadMachine = async() => {
        const result = await axios.get('http://localhost:5000/machine/');
        setMachine(result.data.reverse());
    }

    const deleteMachine = async (id) => {
        await axios.delete("http://localhost:5000/machine/delete/" + id);
        loadMachine();
    }

    const [searchText, setSearchText] = useState('');


    const handlesearchArea = value => {
        setSearchText(value);
        filterData(value);   
    }

    const filterData = value => {
        const lowerCaseValue = value.toLowerCase().trim();
        if(!lowerCaseValue){
            loadMachine();
        }
        else{      
            const filteredData = machine.filter(item => {
                return Object.keys(item).some(key => {
                    return item[key].toString().toLowerCase().includes(lowerCaseValue);
                })
            });
            setMachine(filteredData);
        }
    }

    let history = useHistory();

    const goToMachine = () => {
        history.push("/machine");
    }

    const goToCategories = () => {
        history.push("/machineCategory");
    }

    // const goToOutletSummary = () => {
    //     history.push("/outlet-summary");
    // }

    return(
        <div>
            <div className="searchPanel">
                <div className="searchPanel_addNew">
                <div className="d-flex">
                    <button className="newCustomer_btn" onClick={goToMachine}>
                        Add Machine
                    </button>
                    <button onClick={goToCategories} className="newCustomer_btn mx-4">
                        Categories
                    </button> 
                    {/* <button onClick={goToOutletSummary} className="newCustomer_btn mx-4">
                        Outlet Summary
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
                <th scope="col">Machine ID</th>
                <th scope="col">Machine Name</th>
                <th scope="col">Date</th>
                <th scope="col">Description</th>
                <th scope="col">Content</th>
                <th scope="col">Category</th>
                <th scope="col">action</th>
            </tr>
        </thead>
        <tbody>
    {
        machine.map((machine, index) => (
            <tr>
                <td scope="row"><center>{index + 1}</center></td>
                <td><center>{machine.machineID}</center></td>
                <td><center>{machine.machineName}</center></td>
                <td><center>{machine.date}</center></td>
                <td><center>{machine.description}</center></td>
                <td><center>{machine.content}</center></td>
                <td><center>{machine.category}</center></td>
                <td scope="col"><center>
                    <Link to={`/update-machine/${machine._id}`}><button class="table_btns">Update</button></Link>&nbsp;
                    <button class="table_btns" onClick={() => {deleteMachine(machine._id)}}>Delete</button>
                    </center></td>
            </tr> 
        ))
    }
  </tbody>
</table>
{/* </div> */}
</div>
    {machine.length === 0 && <span>no records found to display</span>}
        </div>
    )
}