import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import AuthProvider from './Contexts/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import MyOrders from './pages/MyOrders/MyOrders';
import ManageAllOrders from './pages/ManageAllOrders/ManageAllOrders';
import AddNewService from './pages/AddNewService/AddNewService';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/placeorder/:exploreCity">
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
          <PrivateRoute path="/myOrders">
            <MyOrders></MyOrders>
          </PrivateRoute>
          <PrivateRoute path="/manageAllOrders">
            <ManageAllOrders></ManageAllOrders>
          </PrivateRoute>
          <PrivateRoute path="/addNewService">
            <AddNewService></AddNewService>
          </PrivateRoute>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
