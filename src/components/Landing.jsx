import React from 'react'
import { Link } from 'react-router-dom'


export default function Landing(){
return (
<section className="rounded-lg overflow-hidden shadow-lg">
<div className="h-80 bg-[url('https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1600&q=60')] bg-cover bg-center flex items-center">
<div className="bg-black/40 w-full p-6 text-white">
<h1 className="text-4xl font-extrabold">GreenThumb Co.</h1>
<p className="mt-2 max-w-xl">We bring life to your spaces — handpicked houseplants for every room and level of care. Fast delivery and eco-friendly packaging.</p>
<Link to="/products" className="inline-block mt-4 bg-green-600 px-4 py-2 rounded text-white">Get Started</Link>
</div>
</div>
<div className="p-6">
<h2 className="text-xl font-semibold">About Us</h2>
<p className="mt-2">GreenThumb Co. curates beautiful, healthy houseplants for beginners and plant parents alike. From low-light champions to dramatic tropicals, our selection is vetted for quality and sustainability.</p>
</div>
</section>
)
}