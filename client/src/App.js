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
// import AddProducts from "./core/AddProducts";

function App() {
  return (
    <Router>
      <div className="App">
        
        
        <switch>
          <MainHeader/>
          <Route path="/product" exact component={AddProduct}/>
          <Route path="/productlist" exact component={ProductList}/>
          <Route path="/productcategory" exact component={ProductCategory}/>
          <Route path="/update-product/:id" exact component={UpdateProduct}/>
          <Route path="/attendance/:id" exact component={Attendance}></Route>
          <Route path="/product-summary" exact component={ProductSummary}></Route>

          <Route path="/driver" exact component={Driver}></Route>
          <Route path="/deliver/:id" exact component={Deliver}></Route>
          <Route path="/update-driver/:id" exact component={UpdateDriver}></Route>
          <Route path="/driverlist" exact component={DriverList}></Route>
          <Route path="/driver-profile/:id" exact component={DriverProfile}></Route>
          <Route path="/deliverlist" exact component={DeliverList}></Route>

          <Route path="/outlet" exact component={AddOutlet}></Route>
          <Route path="/outletlist" exact component={OutletList}></Route>
          <Route path="/update-outlet/:id" exact component={UpdateOutlet}></Route>
          <Route path="/outlet-order/:id" exact component={OutletOrder}></Route>
          <Route path="/outletorderlist" exact component={OutletOrderList}></Route>
          <Route path="/outlet-summary" exact component={OutletSummary}></Route>

          <Route path="/employeelist"  component={HomeTest}></Route>
          <Route path="/user-add" exact component={AddUser}></Route>
          <Route path="/test-edit/:id" exact component={EditUser}></Route>
          <Route path="/User/:id" exact component={User}></Route>
          <Route path="/attendance" exact component={TodayAttds}></Route>
          <Route path="/editattds/:id" exact component={EditAttds}></Route>
          <Route path="/myorder" exact component={MyOrder}></Route>
          <Route path="/mycart" exact component={MyCart}></Route>
          <Route path="/orderManagement" exact component={OrderManagement}></Route>
          <Route path="/updateorder/:id" exact component={UpdateOrder}></Route>
          <Route path="/payment/:id" exact component={Payment}></Route>
          <Route path="/summary/" exact component={Summary}></Route>
          
        </switch>
        
    </div>    
    </Router>
    
  )
}

export default App;
