import logo from './logo.svg';
import './App.css';
import Hero from './Components/HomepageComponents/Hero';
import Home from './Pages/Homepage/Home';
import { Route, Routes } from 'react-router-dom';
import Nav from './Components/Sharecomponents/Nav';
import Footer from './Components/Sharecomponents/Footer/Footer';
import Blog from './Pages/Blog/Blog';
import Login from './Components/Sharecomponents/Login/Login';






function App() {

  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/blogs' element={<Blog></Blog>} ></Route>
        <Route path='/login' element={<Login></Login>}  ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;


