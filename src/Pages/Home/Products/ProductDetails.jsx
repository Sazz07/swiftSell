import { useLoaderData } from "react-router-dom"

const ProductDetails = () => {
    const { category, title, price, description, image } = useLoaderData();
    return (
        // <section className="container mx-auto grid md:grid-cols-2 gap-10">
        //     <div>
        //         <img src={image} alt="" />
        //     </div>
        //     <div className="bg-white">
        //         asds
        //     </div>
        // </section>
        <div>
            <div className="container p-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap shadow-xl">
                    <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto object-cover object-center rounded" src={image} />
                        <div className="bg-white lg:w-1/2 w-full px-10 py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">ON SALE</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{title}</h1>
                            <p className="leading-relaxed">{description}</p>
                            <div className="mt-6 flex border-t-2 pt-6">
                                <span className="title-font font-bold text-2xl text-red-600">${(price - (0.02 * price)).toFixed(2)}</span>
                                <button className="flex ml-auto text-white bg-rose-600 border-0 py-2 px-6 focus:outline-none hover:bg-rose-700 rounded">Buy</button>
                                <button className="rounded-full w-10 h-10 bg-gray-200 hover:bg-rose-400 p-0 border-0 inline-flex items-center justify-center text-gray-500 hover:text-white ml-4">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails