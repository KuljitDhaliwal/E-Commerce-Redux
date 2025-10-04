import React from 'react'
import Home from './Pages/Home'
import API from './Services/API'
import { Route, Routes } from 'react-router-dom'
import Products from './Pages/Products'
import { Navbar } from './Components/Navbar'
import Footer from './Components/Footer'
import { useSelector } from 'react-redux'
import Wishlist from './Pages/Wishlist'
import Cart from './Pages/Cart'
import Product from './Pages/Product'
function App() {
  const searchedData = useSelector((state)=> state.products.allProducts)
  console.log('searchedData', searchedData)
  return (
    <div>
      <API/>
      <Navbar/>
      <Cart/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/wishlist' element={<Wishlist/>}/>
          <Route path=':sku' element={<Product/>}/>
        </Routes>
      <Footer/>
    </div>
    
  )
}

export default App