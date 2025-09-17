import React from 'react'
import plants from '../data/plants'
import ProductCard from './ProductCard'


export default function ProductListing(){
const categories = [...new Set(plants.map(p => p.category))]
return (
<div>
<h1 className="text-3xl font-bold mb-4">Plants</h1>
<div className="space-y-8">
{categories.map(cat => (
<section key={cat}>
<h2 className="text-2xl font-semibold mb-3">{cat}</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
{plants.filter(p => p.category === cat).map(p => (
<ProductCard key={p.id} plant={p} />
))}
</div>
</section>
))}
</div>
</div>
)
}