import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import HomeTest from './components/pages/EmployeeList';
import AddUser from './components/create/AddUser';
import EditUser from './components/update/EditUser';
import User from './components/pages/User';
import Attendance from './components/create/Attendance';
import TodayAttds from './components/pages/TodayAttds';
import EditAttds from './components/update/EditAttds';
import MainHeader from './components/pages/MainHeader';
import MyOrder from "./components/pages/MyOrder";
import MyCart from "./components/pages/MyCart";
import UpdateOrder from "./components/update/UpdateOrder";
import Payment from "./components/pages/Payment";
import Summary from "./components/pages/Summary";
import AddProduct from "./components/create/AddProduct";
import ProductList from "./components/pages/ProductList";
import UpdateProduct from "./components/update/UpdateProduct";
import ProductCategory from "./components/pages/ProductCategory";
import ProductSummary from "./components/pages/ProductSummary";
import Driver from "./components/create/Driver";
import OrderManagement from "./components/pages/OrderManagement";
import Deliver from "./components/pages/Deliver";
import UpdateDriver from "./components/update/UpdateDriver";
import DriverList from "./components/pages/DriverList";
import DriverProfile from "./components/pages/DriverProfile";
import AddOutlet from "./components/create/AddOutlet";
import OutletList from "./components/pages/OutletList";
import UpdateOutlet from "./components/update/UpdateOutlet";
import OutletOrder from "./components/pages/OutletOrder";
import OutletOrderList from "./components/pages/OutletOrdersList";
import DeliverList from "./components/pages/DeliverList";
import OutletSummary from "./components/pages/OutletSummary";
import AddMachine from "./components/create/Machine";
import MachineList from "./components/pages/MachineList";
import UpdateMachine from "./components/update/UpdateMachine";
import MachineCategory from "./components/pages/MachineCategory";
import MachineProfile from "./components/pages/MachineProfile";
import Customer from "./components/create/Customer";
import CustomerList from "./components/pages/CustomerList";
import CustomerProfile from "./components/pages/CustomerProfile";
import UpdateCustomer from "./components/update/UpdateCustomer";
import Login from "./components/register/SignIn";
import SignIn from "./components/register/SignIn";
import SignUp from "./components/register/SignUp";
import Verify from "./components/register/Verify";
import LandedPage from "./components/register/LandedPage";
import Cookies from 'universal-cookie';
import ErrorPage from "./components/pages/ErrorPage";
import DeliverSummary from "./components/pages/DeliverSummary";
import EmployeeSummary from "./components/pages/EmployeeSummary";
import CustomerSummary from "./components/pages/CustomerSummary";
import AddDeliverTable from "./components/pages/AddDeliverTable";
// import AddProducts from "./core/AddProducts";

function App() {

  const cookies = new Cookies();

  return (
    <Router>
      <div className="App">
        
        
        <switch> 
          <Route exact path="/"><Redirect to="/signin"/></Route>
          <Route path="/signin" exact component={SignIn}/>
          <Route path="/signup" exact component={SignUp}/>
          <Route path="/verify/:token" exact component={Verify}/>
          <Route path="/landedpage" exact component={LandedPage}/>

          <Route path="/section" component={MainHeader}/>
          <Route path="/errorpage" component={ErrorPage}/>
          
          <Route path="/section/product" exact component={AddProduct}/>
          <Route path="/section/productlist" exact component={ProductList}/>
          <Route path="/section/productcategory" exact component={ProductCategory}/>
          <Route path="/section/update-product/:id" exact component={UpdateProduct}/>          
          <Route path="/section/product-summary" exact component={ProductSummary}></Route>

          <Route path="/section/customer" exact component={Customer}></Route>
          <Route path="/section/customerlist" exact component={CustomerList}/>
          <Route path="/section/customer-profile/:id" exact component={CustomerProfile}></Route>
          <Route path="/section/update-customer/:id" exact component={UpdateCustomer}></Route>
          <Route path="/section/login" exact component={Login}></Route>
          <Route path="/section/customer-summary" exact component={CustomerSummary}></Route>

          <Route path="/section/driver" exact component={Driver}></Route>
          <Route path="/section/deliver/:id" exact component={Deliver}></Route>
          <Route path="/section/update-driver/:id" exact component={UpdateDriver}></Route>
          <Route path="/section/driverlist" exact component={DriverList}></Route>
          <Route path="/section/driver-profile/:id" exact component={DriverProfile}></Route>
          <Route path="/section/deliverlist" exact component={DeliverList}></Route>
          <Route path="/section/deliver-summary" exact component={DeliverSummary}></Route>
          <Route path="/section/addDeliverTable" exact component={AddDeliverTable}></Route>

          <Route path="/section/outlet" exact component={AddOutlet}></Route>
          <Route path="/section/outletlist" exact component={OutletList}></Route>
          <Route path="/section/update-outlet/:id" exact component={UpdateOutlet}></Route>
          <Route path="/section/outlet-order/:id" exact component={OutletOrder}></Route>
          <Route path="/section/outletorderlist" exact component={OutletOrderList}></Route>
          <Route path="/section/outlet-summary" exact component={OutletSummary}></Route>

          <Route path="/section/machine" exact component={AddMachine}></Route>
          <Route path="/section/machinelist" exact component={MachineList}></Route>
          <Route path="/section/update-machine/:id" exact component={UpdateMachine}></Route>
          <Route path="/section/machineCategory" exact component={MachineCategory}></Route>
          <Route path="/section/machine-profile/:id" exact component={MachineProfile}></Route>

          <Route path="/section/employeelist"  component={HomeTest}></Route>
          <Route path="/section/user-add" exact component={AddUser}></Route>
          <Route path="/section/test-edit/:id" exact component={EditUser}></Route>
          <Route path="/section/User/:id" exact component={User}></Route>
          <Route path="/section/attendance" exact component={TodayAttds}></Route>
          <Route path="/section/attendance/:id" exact component={Attendance}></Route>
          <Route path="/section/editattds/:id" exact component={EditAttds}></Route>
          <Route path="/section/employee-summary" exact component={EmployeeSummary}></Route>
          
          <Route path="/section/myorder/:id" exact component={MyOrder}></Route>
          <Route path="/section/mycart" exact component={MyCart}></Route>
          <Route path="/section/orderManagement" exact component={OrderManagement}></Route>
          <Route path="/section/updateorder/:id" exact component={UpdateOrder}></Route>
          <Route path="/section/payment/:id" exact component={Payment}></Route>
          <Route path="/section/summary/" exact component={Summary}></Route>
          
        </switch>
        
    </div>    
    </Router>
    
  )
}

export default App;
