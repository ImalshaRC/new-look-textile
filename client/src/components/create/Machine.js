import React, { useState } from "react";
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddMachine() {

    let history = useHistory();
    const { id } = useParams();

    const [machine, setMachine] = useState({
        machineID: "", 
        machineName: "", 
        date: "", 
        description: "", 
        content: "", 
        category: ""
    });

    const { machineID, machineName, date, description, content, category } = machine;

    const onInputChange = e => {
        setMachine({...machine, [e.target.name]: e.target.value});
    }

    const onSubmit = async e => {
        e.preventDefault();
        const valid = formValidation();
        if(valid){
            await axios.post('http://localhost:5000/machine/add/', machine).then(() => {
                alert("Machine Added Successfully");
            }).catch((err) => {
                alert(err);
            })
            history.push("/");
        }                  
    }

    const formValidation = () =>{
  
        let isValid = true;

        if(machineID.trim().length === 0){
            toast.error("Please insert color");
            isValid = false;
        }
        else if(machineName.trim().length === 0){
            toast.error("Please insert size");
            isValid = false;
        }
    
        else if(date.trim().length === 0){
            toast.error("Please insert quantity");
            isValid = false;
        }

        else if(description.trim().length === 0){
            toast.error("Please insert quantity");
            isValid = false;
        }

        else if(content.trim().length === 0){
            toast.error("Please insert quantity");
            isValid = false;
        }

        else if(category.trim().length === 0){
            toast.error("Please insert quantity");
            isValid = false;
        }
  
        return isValid;
      }

    return(
        <div class="machine-include">
            <form onSubmit={e => onSubmit(e)}>

                <ToastContainer style={{ width: "450px", textAlign: 'center', fontSize: '17px', fontFamily: 'fantasy' }}
                    position="top-center"
                    theme='light'
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    limit={1}
                />

                <br/><center><h3>Add Machine</h3></center><br/><br/>

                <table class="payment-table">
                    <tr>
                        <td>
                            Machine ID
                            <input type="text" name="machineID" value={machineID} placeholder="Enter Code" onChange={ e => onInputChange(e)}/><br/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Machine Name
                            <input type="text" name="machineName" value={machineName} placeholder="Enter Product Name" onChange={ e => onInputChange(e)}/><br/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Date
                            <input type="text" name="date" value={date} placeholder="Enter Product Name" onChange={ e => onInputChange(e)}/><br/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Description
                            <input type="text" name="description" value={description} placeholder="Enter Price" onChange={ e => onInputChange(e)}/><br/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Content
                            <input type="text" name="content" value={content} placeholder="Enter Price" onChange={ e => onInputChange(e)}/><br/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Category
                            <select name="category" value={category} onChange={ e => onInputChange(e)} >
                                <option>Select Category</option>
                                <option value="category1">Category 1</option>
                                <option value="category2">Category 2</option>
                            </select><br/>
                        </td>
                    </tr>
                        
                    
                </table><br/>

                <center>
                    <table>
                        <tr>
                            <td>
                                <button type = "reset" class="button">Reset</button>                            
                            </td>
                            <td>
                                <button type = "submit" onclick="" class="button">Confirm</button>
                            </td>
                        </tr>
                    </table>
                </center> 
            </form>
        </div>
    );
}