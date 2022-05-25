import logo from './logo.svg';
import './App.css';
import Hero from './Components/HomepageComponents/Hero';
import Home from './Pages/Homepage/Home';
import { Route, Routes } from 'react-router-dom';
import Nav from './Components/Sharecomponents/Nav';
import Footer from './Components/Sharecomponents/Footer/Footer';
import Blog from './Pages/Blog/Blog';
import Login from './Components/Sharecomponents/Login/Login';
import Signup from './Components/Sharecomponents/Signup/Signup';
import Dashboard from './Pages/Dashboard/Dashboard';
import Users from './Components/DashboardComponents/Users';
import Allproductsshow from './Components/AllproductsShow/Allproductsshow';
import Checkout from './Components/Checkoutpages/Checkout';
import Profile from './Components/DashboardComponents/Profile';
import Myorders from './Components/DashboardComponents/Myorders';
import Require from './Components/Require page/Require';
import Addreview from './Components/DashboardComponents/Add review section/Addreview';
import Notfound from './Pages/Notfound page/Notfound';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './Components/Fire key/Firekey';
import Loading from './Components/Loading/Loading';
import Manageorders from './Components/DashboardComponents/Manage products/Manageproducts';
import Addproducts from './Components/DashboardComponents/Addproducts/Addproducts';






function App() {
const [user, loading] = useAuthState(auth)



  return (

      <div className="App">
      <Nav></Nav>

    { loading ? <Loading></Loading> :
       <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/blogs' element={<Blog></Blog>} ></Route>
        <Route path='/login' element={<Login></Login>} ></Route>
        <Route path='/signup' element={<Signup></Signup>} ></Route>
        <Route path='/products' element={<Allproductsshow></Allproductsshow>} ></Route>
        <Route path='/checkout/:id' element={ <Require><Checkout></Checkout></Require> } ></Route> 


        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
        <Route path='users' element={<Users></Users>} ></Route>
        <Route path='profile' element={<Profile></Profile>} ></Route>
        <Route path='myorders' element={<Myorders></Myorders>} ></Route>
        <Route path='addreview' element={<Addreview></Addreview>} ></Route>
        <Route path='manage' element={<Manageorders></Manageorders>} ></Route>
        <Route path='addproducts' element={<Addproducts></Addproducts>} ></Route>
        </Route>
        {/* <Route path='*' element={<Notfound></Notfound>} ></Route> */}
      </Routes>}

      <Footer></Footer>
    </div>
  

  );
}

export default App;


