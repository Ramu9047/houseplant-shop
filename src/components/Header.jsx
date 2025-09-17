import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'


export default function Header() {
const location = useLocation()
const items = useSelector(state => state.cart.items)
const totalCount = Object.values(items).reduce((s, it) => s + it.qty, 0)


return (
<header className="bg-white shadow-sm">
<div className="max-w-6xl mx-auto flex items-center justify-between p-4">
<Link to="/" className="text-2xl font-bold">GreenThumb Co.</Link>
<nav className="flex items-center gap-4">
<Link to="/products" className={`px-3 py-2 rounded ${location.pathname === '/products' ? 'bg-green-50' : ''}`}>Products</Link>
<Link to="/cart" className="relative px-3 py-2 rounded">
<span>Cart</span>
<span className="inline-block ml-2 bg-green-600 text-white rounded-full px-2 text-sm">{totalCount}</span>
</Link>
</nav>
</div>
</header>
)
}