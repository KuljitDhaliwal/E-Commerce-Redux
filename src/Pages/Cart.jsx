import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ProductCard from '../Components/ProductCard'
import { LiaTimesSolid } from "react-icons/lia";
import Quantity from '../Components/Quantity';
import { removeCart, cartToggle } from '../Store/Slices/AllProducts';

function Cart() {
    const cartItems = useSelector((state) => state.products.cart)
    const allProducts = useSelector((state) => state.products.allProducts)
    const cartToggleaction = useSelector((state) => state.products.cartToggle)
    const [cartProducts, setCartProducts] = useState([])
    useEffect(() => {
        if (allProducts?.data) {
            let item = allProducts?.data?.filter(product => cartItems.includes(product.id))
            setCartProducts(item)
        }
    }, [cartItems])
    const dispatch = useDispatch();
    return (
        <div className={`min-h-screen fixed w-[500px] bg-white shadow-2xl top-0 ${cartToggleaction ? 'right-0' : '-right-[500px]'} p-8 transition-all duration-300 z-10`}>
            <div className="flex justify-between items-center">
                <p className='text-2xl'>Shopping Cart</p>
                <LiaTimesSolid className='cursor-pointer' onClick={() => dispatch(cartToggle(false))} />
            </div>
            <p className='border-b-[1px] border-orange-400 text-2xl uppercase w-fit m-auto my-20'>Cart</p>
            <div>
                {cartItems.length === 0 ? (
                    <div className='flex justify-center min-h-[300px]'>
                        <p>Cart is empty</p>
                    </div>
                )
                    :
                    (
                        <div className='flex gap-10 justify-center flex-wrap'>
                            {cartProducts.map((item, key) => {
                                return <div key={key} className="cart-card w-full flex justify-between items-end py-3">
                                    <div className='flex gap-5'>
                                        <img src={item.image_path} alt="" className='h-25' />
                                        <div>
                                            <p>{item.name}</p>
                                            <p className='font-bold py-1'>${item.price}</p>
                                            <Quantity />
                                        </div>
                                    </div>
                                    <p className='text-gray-400 underline text-[12px] cursor-pointer' onClick={() => dispatch(removeCart(item.id))}>Remove</p>
                                </div>
                            })}
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Cart