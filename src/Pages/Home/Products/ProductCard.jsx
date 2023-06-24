/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

const ProductCard = ({ product }) => {
    const { category, title, image, price } = product;
    return (
        // <div className="w-full shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        //     <div className="">
        //         <img src={image} alt="Product" className="h-80 object-cover rounded-t-xl" />
        //         <div className="px-4 py-3 w-full">
        //             <span className="text-gray-400 mr-3 uppercase text-xs">{category}</span>
        //             <p className="text-lg font-bold text-black truncate block capitalize">{title}</p>
        //             <div className="flex items-center">
        //                 <p className="text-lg font-semibold text-black cursor-auto my-3">${(price - (0.02 * price)).toFixed(2)}</p>
        //                 <del>
        //                     <p className="text-sm text-red-600 cursor-auto ml-2">${price}</p>
        //                 </del>
        //             </div>
        //         </div>
        //         <div className="px-4 py-3 w-full flex items-center">
        //             <Link
        //                 to='/products'
        //                 className='w-full'>
        //                 <button type="button" className="px-6 py-2 font-semibold border border-black rounded hover:text-white hover:bg-violet-600 hover:border-violet-600">Show Details</button>
        //             </Link>
        //             <div className=""><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
        //                 <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
        //                 <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
        //             </svg></div>
        //         </div>
        //     </div>
        // </div>
        <div className="bg-white border shadow-md duration-500 hover:scale-105 hover:shadow-xl p-5 rounded-lg">
            <div>
                <img className="h-72 w-full rounded-lg border p-2" src={image} alt="" />
            </div>
            <div className="mt-2">
                <span className="text-gray-100 uppercase text-xs bg-yellow-400 px-3 py-1 rounded-sm">{category}</span>
                <p className="text-lg font-bold text-black truncate block capitalize">{title.length > 16 ? `${title.slice(0, 16)}...` : title}</p>
                <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto">${(price - (0.02 * price)).toFixed(2)}</p>
                    <del className="text-red-700"> 
                        <p className="text-sm text-red-600 cursor-auto ml-2">${price}</p>
                    </del>
                </div>
            </div>
            <div className="mt-2 flex justify-between items-center flex-wrap">
                <Link
                    to='/'
                    className=''>
                    <button type="button" className="px-6 py-2 font-semibold border border-black rounded hover:text-white hover:bg-rose-600 hover:border-rose-600">Show Details</button>
                </Link>
                <div className="hover:bg-rose-500 hover:text-white cursor-pointer rounded-full p-3"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
                </div>
            </div>
        </div>
    )
}

export default ProductCard