import { useState, useRef, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUser, FaRegBell, FaRegHeart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LiaTimesSolid } from "react-icons/lia";
import { cartToggle, searchProduct } from "../Store/Slices/AllProducts";
import { useDispatch, useSelector } from "react-redux";


export const Navbar = () => {
    const dispatch = useDispatch()
    const [toggle, setToggle] = useState(false)
    const [toggleSearch, setToggleSearch] = useState(false)
    const searchRef = useRef(null)
    const cartItems = useSelector((state)=> state.products.cart)
    const wishlistItems = useSelector((state)=> state.products.wishlist)
    useEffect(()=>{
        if(toggleSearch && searchRef.current){
            searchRef.current.focus()
        }
    },[toggleSearch])
    return (
        <nav className={`flex justify-between items-center w-full z-10 h-[80px] border-b-[1px] bg-white border-gray-300 lg:px-20 md:px-10 px-5`}>
            <div className="md:hidden flex">
                {!toggle && (<GiHamburgerMenu className="text-xl" onClick={()=> setToggle(true)}/>)}
                {toggle && (<FaTimes className="text-xl" onClick={()=> setToggle(false)}/>)}
            </div>
            <div className="brand">
                <Link to="/"><b className="md:text-2xl text-xl cursor-pointer">KP Furnish</b></Link>
            </div>
            <div className={`flex flex-col md:flex-row md:items-center md:p-0 p-5 items-start md:justify-center justify-start lg:gap-10 md:gap-5 uppercase md:h-auto h-[calc(100vh_-_80px)] bg-white md:bg-transparent fixed md:static top-[80px] transition-all duration-300 ${toggle ? 'left-0' : '-left-[400px]'} md:w-auto w-[350px] z-10`}>
                    <Link to="/" className="cursor-pointer md:border-0 border-b-[1px] md:w-auto w-full hover:bg-[#4C7766] hover:text-white transition-all duration-300 p-3">Home</Link>
                    <a href="#" className="cursor-pointer md:border-0 border-b-[1px] md:w-auto w-full hover:bg-[#4C7766] hover:text-white transition-all duration-300 p-3">Shops</a>
                    <a href="#" className="cursor-pointer md:border-0 border-b-[1px] md:w-auto w-full hover:bg-[#4C7766] hover:text-white transition-all duration-300 p-3">Blog</a>
                    <Link to="/products" className="cursor-pointer md:border-0 border-b-[1px] md:w-auto w-full hover:bg-[#4C7766] hover:text-white transition-all duration-300 p-3">Prodcuts</Link>
                    <a href="#" className="cursor-pointer md:border-0 border-b-[1px] md:w-auto w-full hover:bg-[#4C7766] hover:text-white transition-all duration-300 p-3">Pages</a>
                    <div className="flex items-center justify-center w-full md:hidden mt-10">
                        <button className="bg-white border-[1px] border-gray-400 px-10 py-2 cursor-pointer group">
                            <FaRegBell className="group-hover:scale-115 transition-all duration-300" />
                        </button>
                        <button className="bg-[#4C7766] border-[1px] border-gray-400 px-10 py-2 hover:bg-[#3a5d51] cursor-pointer group">
                            <FaRegUser className="text-white group-hover:scale-115 transition-all duration-300" />
                        </button>
                    </div>
            </div>
            <div className="icons flex items-center justify-center gap-5 text-xl lg:text-2xl">
                <div className={`overflow-hidden ${toggleSearch ? 'w-55' : 'w-0'} transition-all duration-300`}>
                    <input type="text" ref={searchRef} placeholder="Search Product..." id="search" onChange={(e)=> dispatch(searchProduct(e.target.value))} className="px-2 py-1 border-[1px] rounded text-[18px] ml-auto"/>
                </div>
                {!toggleSearch && (
                    <label htmlFor="search" onClick={()=> setToggleSearch(true)} className="cursor-pointer">
                        <IoSearch />
                    </label>
                )}
                {toggleSearch && (<LiaTimesSolid className="cursor-pointer" onClick={()=> setToggleSearch(false)}/>)}
                <Link to="/wishlist" >
                    <div className="relative">
                        <FaRegHeart className="cursor-pointer md:flex hidden" />
                        {wishlistItems.length > 0 && <sup className="text-sm absolute -top-3 -right-2 bg-red-600 text-white px-1 rounded-full">{wishlistItems.length}</sup>}
                    </div>
                </Link>
                <div className="relative">
                    <MdOutlineShoppingCart className="cursor-pointer" onClick={()=> dispatch(cartToggle(true))}/>
                    {cartItems.length > 0 && <sup className="text-sm absolute -top-3 -right-2 bg-red-600 text-white px-1 rounded-full">{cartItems.length}</sup>}
                </div>
                <FaRegUser className="cursor-pointer md:flex hidden" />
            </div>
        </nav>
    )
}