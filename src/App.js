import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './views/HomePage';
import NavBar from './views/NavBar';
import SignUp from './views/SignUp';
import Search from './views/Search';
import Product from './views/Product';
import ContactUs from './views/ContactUs';
import Transaction from './views/Transaction';
import MyOrders from './views/MyOrders';
import Header from './Header';
import Login from './views/Login';

function App() {
  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <div className="main-content">
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/search' element={<Search />}/>
        <Route path='/product' element={<Product />}/>
        <Route path='/contact' element={<ContactUs />}/>
        <Route path='/transaction' element={<Transaction />}/>
        <Route path='/orders' element={<MyOrders />}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;