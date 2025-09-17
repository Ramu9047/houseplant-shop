/// FILE: src/components/ProductCard.jsx
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../slices/cartSlice'


export default function ProductCard({ plant }){
const dispatch = useDispatch()
const cartItems = useSelector(s => s.cart.items)
const alreadyAdded = Boolean(cartItems[plant.id])


const handleAdd = () => {
if (!alreadyAdded) dispatch(addToCart(plant))
}


return (
<div className="bg-white rounded shadow p-4 flex flex-col">
<img src={plant.image} alt={plant.name} className="h-40 w-full object-cover rounded" />
<h3 className="mt-3 font-semibold">{plant.name}</h3>
<p className="mt-1">${plant.price.toFixed(2)}</p>
<div className="mt-auto pt-3">
<button onClick={handleAdd} disabled={alreadyAdded} className={`w-full py-2 rounded ${alreadyAdded ? 'bg-gray-300 text-gray-600' : 'bg-green-600 text-white'}`}>
{alreadyAdded ? 'Added' : 'Add to Cart'}
</button>
</div>
</div>
)
}