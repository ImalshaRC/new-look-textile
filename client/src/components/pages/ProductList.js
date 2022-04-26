import React, {useState, useEffect} from "react";
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import '../css/styles.css';
import '../css/css1.css';
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function ProductList() {

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

    const [products, setProducts] = useState([]);
    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async() => {
        const result = await axios.get('http://localhost:5000/product/');
        setProducts(result.data.reverse());
    }

    const deleteProduct = async id => {
        await axios.delete("http://localhost:5000/product/delete/" + id);
        loadProducts();
    }

    const [searchText, setSearchText] = useState('');


    const handlesearchArea = value => {
        setSearchText(value);
        filterData(value);   
    }

    const filterData = value => {
        const lowerCaseValue = value.toLowerCase().trim();
        if(!lowerCaseValue){
            loadProducts();
        }
        else{      
            const filteredData = products.filter(item => {
                return Object.keys(item).some(key => {
                    return item[key].toString().toLowerCase().includes(lowerCaseValue);
                })
            });
            setProducts(filteredData);
        }
    }

    let history = useHistory();

    const goToCategory = () => {
        history.push("/productcategory");
    }

    const goToAddProduct = () => {
        history.push("/product");
    }

    const goToProductSummary = () => {
        history.push("/product-summary");
    }

    return(
        <div>

            <div className="searchPanel">
                <div className="searchPanel_addNew">
                <div className="d-flex">
                    <button className="newCustomer_btn" onClick={goToAddProduct}>
                        Add Product
                    </button>
                    {/* <button onClick={goToCategory} className="newCustomer_btn mx-4">
                        Product Category
                    </button>  */}
                    <button onClick={goToProductSummary} className="newCustomer_btn mx-4">
                        Product Summary
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
                <th scope="col">Index No</th>
                <th scope="col">Product ID</th>
                <th scope="col">Product Name</th>
                <th scope="col">Category</th>
                <th scope="col">Price</th>
                <th scope="col">Size</th>    
                <th scope="col">Status</th> 
                <th scope="col">Quantity</th> 
                <th scope="col">Color</th> 
                <th scope="col">Date</th>             
                <th scope="col">action</th>
            </tr>
        </thead>
        <tbody>
    {
        products.map((product, index) => (
            <tr>
                <center><td >{index + 1}</td></center>
                <td><center>{product.pID}</center></td>   
                <td><center>{product.pName}</center></td>
                <td><center>{product.category}</center></td>
                <td><center>{product.price}</center></td>
                <td><center>{product.size}</center></td>   
                <td><center>{product.status}</center></td>   
                <td><center>{product.quantity}</center></td>   
                <td><center>{product.color}</center></td>   
                <td><center>{product.date}</center></td>             
                <td scope="col"><center>
                    <Link to={`/update-product/${product._id}`}><button class="table_btns">Update</button></Link>&nbsp;
                    {/* <Link to={`/payment/${product._id}`}><button class="table_btns">Payment</button></Link>&nbsp; */}
                    <button onClick={() => {deleteProduct(product._id)}} class="table_btns">Delete</button></center>
                </td>
            </tr> 
        ))
    }
  </tbody>
</table>
{/* </div> */}
</div>
    {products.length === 0 && <span>no records found to display</span>}
        </div>
    )
}