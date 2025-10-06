import { createSlice } from "@reduxjs/toolkit";

const storeData ={
    allProducts: [],
    filteredData: [],
    woodType: [],
    price: [],
    checked: true,
    wishlist: [],
    cart: [],
    cartToggle: false,
    product: '',
    quantity: 1
}
const AllProductsSlice = createSlice({
    name: "AllProducts",
    initialState: storeData,
    reducers:{
        setAllProducts: (state, action) => {state.allProducts = action.payload},
        getWood: (state, action)=> {
            let exist = state.woodType.find(item => item === action.payload)
            if(exist){
                state.woodType = state.woodType.filter(data => data !== action.payload)
            }else{
                state.woodType.push(action.payload)
            }

            let data = state.woodType.map((item)=>{
                return state.allProducts?.data?.filter((ittem)=> ittem.wood_type === item)
            })

            state.filteredData = [].concat(...data)
        },
        getPrice: (state, action) => {
            let exist = state.price.find(item => item.id === action.payload.id)
            if(exist){
                state.price = state.price.map((item)=>{
                    if(item.id === exist.id){
                        return {...item, price: action.payload.price}
                    }else{
                        return item
                    }
                })
            }else{
                state.price.push(action.payload)
            }
            let start = Number(state.price.find((item)=> item.id === 'start')?.price ?? 0)
            let last = Number(state.price.find((item)=> item.id === 'last')?.price ?? Infinity)
            state.filteredData = state.allProducts?.data?.filter((item)=> item.price >= start && item.price <= last)
        },
        clearAll: (state) => {state.filteredData = []; state.checked === false},
        searchProduct: (state, action) => {
            if(action.payload === ''){
                state.filteredData = []     
            }else{
                state.filteredData = state.allProducts?.data?.filter((item)=> item.name.toLowerCase().includes(action.payload.toLowerCase()))
            }
        },
        addWishlist: (state, action)=>{
            let exist = state.wishlist.find(item=> item === action.payload)
            if(exist){
                state.wishlist = state.wishlist.filter(item => item !== action.payload)
            }else{
                state.wishlist.push(action.payload)
            }
        },
        addCart: (state, action) => {
            let exist = state.cart.find(item => item === action.payload)
            if(exist){
                state.cart = state.cart.filter(item => item !== action.payload) 
            }else{
                state.cart.push(action.payload)
            }
        },
        removeCart: (state, action) => {
            state.cart = state.cart.filter(item => item !== action.payload)
        },
        cartToggle: (state, action) => {state.cartToggle = action.payload},
        product: (state, action) => {state.product = action.payload},
        handleIncrement: (state) => {state.quantity += 1},
        handleDecrement: (state) => {state.quantity -= 1},
        addToCartWithQuantity: (state, action) =>{
            let exist = state.cart.find(item => item === action.payload)
            if(exist){
                state.cart.map((item)=>{
                    if(item === exist){
                        return {...item, quantity: item.quantity + 1}
                    }else{
                        return item
                    }
                })
            }else{
                state.cart.push(action.payload)
            }
        }
    }
})

export const selectWoodTypes = (state) => state.products.allProducts?.data?.map((item)=> item.wood_type)
export const {setAllProducts, getWood, getPrice, clearAll, searchProduct, addWishlist, addCart, removeCart, cartToggle, product, handleIncrement, handleDecrement} = AllProductsSlice.actions
export default AllProductsSlice.reducer