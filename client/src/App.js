import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
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
// import AddProducts from "./core/AddProducts";

function App() {

  const cookies = new Cookies();

  return (
    <Router>
      <div className="App">
        
        
        <switch> 
          <Route path="/signin" exact component={SignIn}/>
          <Route path="/signup" exact component={SignUp}/>
          <Route path="/verify/:token" exact component={Verify}/>
          <Route path="/landedpage" exact component={LandedPage}/>

          <Route path="/section" component={MainHeader}/>
          <Route path="/errorpage" component={ErrorPage}/>
          
          <Route path="/section/product" exact component={cookies.get("designation") === 'product' ? AddProduct : ""}/>
          <Route path="/section/productlist" exact component={cookies.get("designation") === 'product' ? ProductList : ""}/>
          <Route path="/section/productcategory" exact component={cookies.get("designation") === 'product' ? ProductCategory : ""}/>
          <Route path="/section/update-product/:id" exact component={cookies.get("designation") === 'product' ? UpdateProduct : ""}/>          
          <Route path="/section/product-summary" exact component={cookies.get("designation") === 'product' ? ProductSummary : ""}></Route>

          <Route path="/section/customer" exact component={cookies.get("designation") === 'customer' ? Customer : ""}></Route>
          <Route path="/section/customerlist" exact component={cookies.get("designation") === 'customer' ? CustomerList : ""}/>
          <Route path="/section/customer-profile/:id" exact component={cookies.get("designation") === 'customer' ? CustomerProfile : ""}></Route>
          <Route path="/section/update-customer/:id" exact component={cookies.get("designation") === 'customer' ? UpdateCustomer : ""}></Route>
          <Route path="/section/login" exact component={cookies.get("designation") === 'customer' ? Login : ""}></Route>

          <Route path="/section/driver" exact component={cookies.get("designation") === 'transport' ? Driver : ""}></Route>
          <Route path="/section/deliver/:id" exact component={cookies.get("designation") === 'transport' ? Deliver : ""}></Route>
          <Route path="/section/update-driver/:id" exact component={cookies.get("designation") === 'transport' ? UpdateDriver : ""}></Route>
          <Route path="/section/driverlist" exact component={cookies.get("designation") === 'transport' ? DriverList : ""}></Route>
          <Route path="/section/driver-profile/:id" exact component={cookies.get("designation") === 'transport' ? DriverProfile : ""}></Route>
          <Route path="/section/deliverlist" exact component={cookies.get("designation") === 'transport' ? DeliverList : ""}></Route>

          <Route path="/section/outlet" exact component={cookies.get("designation") === 'outlet' ? AddOutlet : ""}></Route>
          <Route path="/section/outletlist" exact component={cookies.get("designation") === 'outlet' ? OutletList : ""}></Route>
          <Route path="/section/update-outlet/:id" exact component={cookies.get("designation") === 'outlet' ? UpdateOutlet : ""}></Route>
          <Route path="/section/outlet-order/:id" exact component={cookies.get("designation") === 'outlet' ? OutletOrder : ""}></Route>
          <Route path="/section/outletorderlist" exact component={cookies.get("designation") === 'outlet' ? OutletOrderList : ""}></Route>
          <Route path="/section/outlet-summary" exact component={cookies.get("designation") === 'outlet' ? OutletSummary : ""}></Route>

          <Route path="/section/machine" exact component={cookies.get("designation") === 'machine' ? AddMachine : ""}></Route>
          <Route path="/section/machinelist" exact component={cookies.get("designation") === 'machine' ? MachineList : ""}></Route>
          <Route path="/section/update-machine/:id" exact component={cookies.get("designation") === 'machine' ? UpdateMachine : ""}></Route>
          <Route path="/section/machineCategory" exact component={cookies.get("designation") === 'machine' ? MachineCategory : ""}></Route>
          <Route path="/section/machine-profile/:id" exact component={cookies.get("designation") === 'machine' ? MachineProfile : ""}></Route>

          <Route path="/section/employeelist"  component={cookies.get("designation") === 'employee' ? HomeTest : ""}></Route>
          <Route path="/section/user-add" exact component={cookies.get("designation") === 'employee' ? AddUser : ""}></Route>
          <Route path="/section/test-edit/:id" exact component={cookies.get("designation") === 'employee' ? EditUser : ""}></Route>
          <Route path="/section/User/:id" exact component={cookies.get("designation") === 'employee' ? User : ""}></Route>
          <Route path="/section/attendance" exact component={cookies.get("designation") === 'employee' ? TodayAttds : ""}></Route>
          <Route path="/section/attendance/:id" exact component={cookies.get("designation") === 'employee' ? Attendance : ""}></Route>
          <Route path="/section/editattds/:id" exact component={cookies.get("designation") === 'employee' ? EditAttds : ""}></Route>
          
          <Route path="/section/myorder/:id" exact component={cookies.get("designation") === 'order' ? MyOrder : ""}></Route>
          <Route path="/section/mycart" exact component={cookies.get("designation") === 'order' ? MyCart : ""}></Route>
          <Route path="/section/orderManagement" exact component={cookies.get("designation") === 'order' ? OrderManagement : ""}></Route>
          <Route path="/section/updateorder/:id" exact component={cookies.get("designation") === 'order' ? UpdateOrder : ""}></Route>
          <Route path="/section/payment/:id" exact component={cookies.get("designation") === 'order' ? Payment : ""}></Route>
          <Route path="/section/summary/" exact component={cookies.get("designation") === 'order' ? Summary : ""}></Route>
          
        </switch>
        
    </div>    
    </Router>
    
  )
}

export default App;
