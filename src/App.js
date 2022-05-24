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






function App() {

  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/blogs' element={<Blog></Blog>} ></Route>
        <Route path='/login' element={<Login></Login>} ></Route>
        <Route path='/signup' element={<Signup></Signup>} ></Route>
        <Route path='/products' element={<Allproductsshow></Allproductsshow>} ></Route>
        <Route path='/checkout/:id' element={<Checkout></Checkout>} ></Route> 


        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
        <Route path='users' element={<Users></Users>} ></Route>
        <Route path='profile' element={<Profile></Profile>} ></Route>
        </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;


