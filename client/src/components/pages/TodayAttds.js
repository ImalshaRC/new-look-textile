import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../css/styles.css';
import '../css/css1.css';
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function TodayAttds() {

//generate pdf

  let docToPrint = React.createRef();

  const printDocument = () => {
    const input = docToPrint.current;
    html2canvas(input).then(canvas => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [600, 660]
      });
      pdf.addImage(imgData, "JPEG", 0, 0);
      // pdf.output("dataurlnewwindow");
      pdf.save("Attendance_2021-2-3.pdf");
    });
  };

  //end generate pdf

    const [attds, setAttds] = useState([]);
    useEffect(() => {
        loadUser();
    }, []);

    const [searchText, setSearchText] = useState('');

    const handlesearchArea = value => {
        setSearchText(value);
        filterData(value);   
    }

    const filterData = value => {
        const lowerCaseValue = value.toLowerCase().trim();
        if(!lowerCaseValue){
            loadUser();
        }
        else{      
            const filteredData = attds.filter(item => {
                return Object.keys(item).some(key => {
                    return item[key].toString().toLowerCase().includes(lowerCaseValue);
                })
            });
            setAttds(filteredData);
        }
    }

    const [user, setUser] = useState({
        searchDate: ""
    });

    const { searchDate } = user;

    const onInputChange = e => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    const loadUser = async() => {
        const result = await axios.get('http://localhost:5000/attendance1/');
        setAttds(result.data.reverse());
    }

    const onSubmit = async e => {
        e.preventDefault();
        const result = await axios.get('http://localhost:5000/attendance1/date/' + searchDate).then(() => {
            //alert("staff member added successfully");
            console.log(result);
        }).catch((err) => {
            alert(err);
        })
    }

    return(
        <div >
            <div className="searchPanel">
                <div className="searchPanel_addNew">
                <div className="searchPanel_addNew">
                    <button className="newCustomer_btn" onClick={printDocument}>
                        Generate PDF
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

            <div ref={docToPrint}>

            <table id="table" >
  <thead>
    <tr>
        <th scope="col">ID</th>
        <th scope="col">User ID</th>
        <th scope="col">Date</th>
        <th scope="col">Start time</th>
        <th scope="col">Leave time</th>
        <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        attds.map((attd, index) => (
            <tr>
                <td scope="row"><center>{index + 1}</center></td>
                <td><center>{attd.userID}</center></td>
                <td><center>{attd.date}</center></td>
                <td><center>{attd.startTime}</center></td>
                <td><center>{attd.leaveTime}</center></td>
                <td>
                    <center><Link to={`/editattds/${attd._id}`}><button class="table_btns">Add Leave time</button></Link></center>
                </td>
            </tr>
        ))
    }
  </tbody>
</table>
</div>
</div>
    {attds.length === 0 && <span>no records found to display</span>}
    
        </div>
    )
}

export default TodayAttds;