import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../Components/ProductCard'

function Wishlist() {
    const wishlistItems = useSelector((state) => state.products.wishlist)
    const allProducts = useSelector((state) => state.products.allProducts)
    const [wishlistedProducts, setWishlistedProducts] = useState([])
    useEffect(() => {
        if (allProducts?.data) {
            const filtered = allProducts.data.filter(item => wishlistItems.includes(item.id))
            setWishlistedProducts(filtered)
        }
    }, [wishlistItems])
    console.log('wishlistedProducts', wishlistedProducts)
    return (
        <div className='min-h-[calc(80vh_-_80px)]'>
          <p className='border-b-[1px] border-orange-400 text-2xl uppercase w-fit m-auto my-20'>Wishlist</p>
            <div className='flex justify-center items-center min-h-[300px]'>
                {wishlistItems.length === 0 ? (
                    <div>
                        <p>Wishlist is empty</p>
                    </div>
                )
                    :
                    (
                        <div className='flex gap-10 justify-center flex-wrap'>
                            {wishlistedProducts.map((item, key) => {
                                return <ProductCard key={key} image={item.image_path} price={item.price} id={item.id} brand={item.name} className={'shrink'} />
                            })
                            }
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Wishlist