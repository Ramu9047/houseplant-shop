/// FILE: src/components/CartPage.jsx
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, removeItem } from '../slices/cartSlice'
import { Link } from 'react-router-dom'


export default function CartPage(){
const items = useSelector(s => s.cart.items)
const dispatch = useDispatch()
const entries = Object.values(items)
const totalCount = entries.reduce((s, it) => s + it.qty, 0)
const totalPrice = entries.reduce((s, it) => s + it.qty * it.price, 0)


return (
<div>
<h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
<div className="mb-4">Total items: <strong>{totalCount}</strong></div>
<div className="mb-6">Total cost: <strong>${totalPrice.toFixed(2)}</strong></div>


{entries.length === 0 ? (
<div className="p-6 bg-white rounded shadow text-center">
<p>Your cart is empty.</p>
<Link to="/products" className="inline-block mt-3 bg-green-600 text-white px-4 py-2 rounded">Continue Shopping</Link>
</div>
) : (
<div className="space-y-4">
{entries.map(item => (
<div key={item.id} className="bg-white p-4 rounded shadow flex items-center gap-4">
<img src={item.thumbnail} alt={item.name} className="h-24 w-24 object-cover rounded" />
<div className="flex-1">
<h3 className="font-semibold">{item.name}</h3>
<p>Unit price: ${item.price.toFixed(2)}</p>
</div>
<div className="flex items-center gap-2">
<button onClick={() => dispatch(decrement(item.id))} className="px-3 py-1 border rounded">-</button>
<div>{item.qty}</div>
<button onClick={() => dispatch(increment(item.id))} className="px-3 py-1 border rounded">+</button>
</div>
<div className="ml-6">
<button onClick={() => dispatch(removeItem(item.id))} className="px-3 py-1 border rounded">Delete</button>
</div>
</div>
))}


<div className="flex justify-between items-center">
<div>
<button onClick={() => alert('Coming Soon')} className="bg-blue-600 text-white px-4 py-2 rounded">Checkout</button>
</div>
<div>
<Link to="/products" className="bg-green-600 text-white px-4 py-2 rounded">Continue Shopping</Link>
</div>
</div>
</div>
)}


</div>
)
}