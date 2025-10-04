import React, { useEffect, useState } from 'react'
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegEye, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { addCart, addWishlist, product } from '../Store/Slices/AllProducts';
import { useNavigate } from 'react-router-dom';


function ProductCard({ image, brand, price, className, id, sku }) {
  const icons = [
    {icon:CiHeart, value: "Add to Wishlist", remove: "Remove from Wishlist"}, 
    {icon:MdOutlineShoppingCart, value: "Add to Cart", remove: "Remove from Cart"},
    {icon:FaRegEye, value: "Quick Shop"} ]
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleGetId = (id) => {
    dispatch(addWishlist(id))
  }
  const handleCart = (id) => {
    dispatch(addCart(id))
  }
  const handleProduct = (sku) => {
    navigate(`/${sku}`)
  }
  const wishlistItems = useSelector((state)=> state.products.wishlist)
  const cartItems = useSelector((state)=> state.products.cart)
  return (
    <div className={`md:w-[18rem] w-[10rem] group flex ${className}`}>
      <div className="card">
        <div className="img-back bg-[#f2f2f2] md:p-10 p-5 relative overflow-hidden">
          <div className="absolute flex justify-center w-full h-full left-0 top-0 
                          bg-black/50 z-2 text-2xl gap-6 
                          opacity-0 group-hover:opacity-100 
                          transition-all duration-300">
            
            <div className="flex absolute bottom-6 md:gap-6 gap-2">
              {icons.map((Item, key)=>{
                return <div key={key} className="relative group/icon">
                <Item.icon className={`
                ${wishlistItems.includes(id) && Item.icon === CiHeart ? 'bg-red-600 hover:bg-red-600 text-white' : 'bg-[#f2f2f2] hover:bg-[#000006]'} 
                ${cartItems.includes(id) && Item.icon === MdOutlineShoppingCart ? 'bg-green-600 hover:bg-green-600 text-white' : 'bg-[#f2f2f2] hover:bg-[#000006]'}
                md:h-10 md:w-10 h-8 w-8  rounded-full flex items-center justify-center hover:text-white transition-all duration-300 p-2`} 
                onClick={()=> {Item.icon === MdOutlineShoppingCart ? handleCart(id) : '', Item.icon === CiHeart ? handleGetId(id) : '', Item.icon === FaRegEye ? handleProduct(sku) : '' }}/>
                <div className="absolute left-1/2 -translate-x-1/2 -top-8 
                                md:px-2 px-1 py-1 md:text-[10px] text-[8px] rounded bg-white text-black 
                                whitespace-nowrap opacity-0 
                                group-hover/icon:opacity-100 
                                transition-opacity duration-300">
                                  {
                                  wishlistItems.includes(id) && Item.icon === CiHeart || 
                                  cartItems.includes(id) && Item.icon === MdOutlineShoppingCart ? Item.remove : Item.value
                                  }
                  <span className="absolute text-white w-2 h-2 rotate-45 bg-white left-1/2 -translate-x-1/2 -bottom-1"></span>
                </div>
              </div>
              })}
            </div>
          </div>
          <img className="m-auto" src={image} alt={brand} />
          <div className="sale-badge bg-red-600 text-white text-center rotate-45 
                          absolute top-2 w-[5rem] -right-5">
            <p>Sale</p>
          </div>
        </div>
        <div className="text-center py-3">
          <p>{brand}</p>
          <p className="text-orange-300">$ {price}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
