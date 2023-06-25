import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('https://e-commerce-task-server-mu.vercel.app/products')
            .then(res => {
                setProducts(res.data);
            })
            .catch(error => {
                console.error('Error fetching services:', error);
            });
    }, []);
    return (
        <section className='my-24 container mx-auto'>
            <div>
                <h1 className='text-4xl my-10'>Products</h1>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {/* Products card */}
                {
                    products.map(product => <ProductCard
                        key={product._id}
                        product={product}
                    ></ProductCard>)
                }
            </div>
        </section>
    )
}

export default AllProducts;