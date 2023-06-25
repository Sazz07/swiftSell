import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('https://e-commerce-task-server-mu.vercel.app/products')
            .then(res => {
                setProducts(res.data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);
    // console.log(products);

    return (
        <section className='my-24 container mx-auto'>
            <div>
                <h1 className='text-4xl my-10'>Products</h1>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {/* Products card */}
                {
                    products.slice(0, 3).map(product => <ProductCard
                        key={product._id}
                        product={product}
                    ></ProductCard>)
                }
            </div>
            <Link
                to='/products'
                className='w-full flex justify-center mt-10'>
                <button type="button" className="px-8 py-3 font-semibold border border-black rounded hover:text-white hover:bg-violet-600 hover:border-violet-600">Show more products</button>
            </Link>
        </section>
    )
}

export default Products;