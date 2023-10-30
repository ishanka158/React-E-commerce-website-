import './App.css';
import Navbar from './Component/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop.jsx';
import ShopCategory from './Pages/ShopCategory.jsx';
import Product from './Pages/Product.jsx';
import Cart from './Pages/Cart.jsx';
import LoginSighnup from './Pages/LoginSighnup';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Shop/>}></Route>
            <Route path='/mens' element={<ShopCategory category='men'/>}></Route>
            <Route path='/womens' element={<ShopCategory category='women'/>}></Route>
            <Route path='/kids' element={<ShopCategory category='kid'/>}></Route>
            <Route path='/product' element={<Product/>}>
              <Route path=':productID' element={<Product/>}/>
            </Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/login' element={<LoginSighnup/>}></Route>


          </Routes>
          <Footer/>
      </BrowserRouter>      
    </div>
  );
}

export default App;
