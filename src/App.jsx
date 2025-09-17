import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './components/Landing'
import ProductListing from './components/ProductListing'
import CartPage from './components/CartPage'
import Header from './components/Header'


export default function App() {
return (
<div className="min-h-screen bg-slate-50">
<Header />
<main className="max-w-6xl mx-auto p-4">
<Routes>
<Route path="/" element={<Landing />} />
<Route path="/products" element={<ProductListing />} />
<Route path="/cart" element={<CartPage />} />
</Routes>
</main>
</div>
)
}