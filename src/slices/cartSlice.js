import { createSlice } from '@reduxjs/toolkit'


const initialState = {
items: {} // key: plantId, value: { ...plant, qty }
}


const cartSlice = createSlice({
name: 'cart',
initialState,
reducers: {
addToCart: (state, action) => {
const plant = action.payload
if (state.items[plant.id]) return // if already added from listing, do not add duplicate here
state.items[plant.id] = { ...plant, qty: 1 }
},
increment: (state, action) => {
const id = action.payload
if (state.items[id]) state.items[id].qty += 1
},
decrement: (state, action) => {
const id = action.payload
if (state.items[id]) {
state.items[id].qty -= 1
if (state.items[id].qty <= 0) delete state.items[id]
}
},
removeItem: (state, action) => {
const id = action.payload
delete state.items[id]
},
clearCart: (state) => {
state.items = {}
}
}
})


export const { addToCart, increment, decrement, removeItem, clearCart } = cartSlice.actions
export default cartSlice.reducer