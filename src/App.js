import './App.css';
import Navbar from './Component/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop.jsx';
import ShopCategory from './Pages/ShopCategory.jsx';
import Product from './Pages/Product.jsx';
import Cart from './Pages/Cart.jsx';
import LoginSighnup from './Pages/LoginSighnup';
import Footer from './Component/Footer/Footer';
import men_banner from './Component/Assets/banner_mens.png'
import women_banner from './Component/Assets/banner_women.png'
import kid_banner from './Component/Assets/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Shop/>}></Route>
            <Route path='/mens' element={<ShopCategory banner={men_banner} category='men'/>}></Route>
            <Route path='/womens' element={<ShopCategory banner={women_banner} category='women'/>}></Route>
            <Route path='/kids' element={<ShopCategory banner={kid_banner} category='kid'/>}></Route>
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
