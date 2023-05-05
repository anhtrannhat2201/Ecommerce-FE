import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home"

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Login from './pages/Login';
import Signup from './pages/Signup/Signup';
import { useSelector } from 'react-redux';
import NewProduct from './pages/Products/NewProduct/NewProduct';
import ProductPage from './pages/Products/ProductPage/ProductPage';
import CategoryPage from './pages/CategoryPage/CategoryPage';
function App() {
  const user = useSelector((state) => state.user)
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route index element={<Home />} />
          {!user && <>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </>
          }
          <Route path='/product/:id' element={<ProductPage />} />
          <Route path='/category/:category' element={<CategoryPage />} />

          <Route path='/new-product' element={<NewProduct />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
