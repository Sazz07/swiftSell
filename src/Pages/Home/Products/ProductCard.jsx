/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Link } from "react-router-dom"
import { AuthContext } from "../../../contexts/AuthProvider";
import axios from "axios";
import { toast } from "react-hot-toast";

const ProductCard = ({ product }) => {
    const { phone } = useContext(AuthContext);
    const { _id, category, title, image, price } = product;
    // console.log(user?.phoneNumber);

    const handleCarts = (id) => {
        const cartData = {
            phone: phone,
            productId: id,
            category,
            productName: title,
            image,
            price
        }
        axios.post("https://e-commerce-task-server-mu.vercel.app/carts", cartData, {
            headers: {
                "content-type": "application/json",
            }
        })
            .then((res) => {
                const data = res.data;
                if (data.acknowledged) {
                    toast.success("Added to Carts");
                } else {
                    toast.error(data.message);
                }
            })
            .catch((error) => {
                console.error(error);
                toast.error("An error occurred while adding to carts");
            });
    }
    return (
        <div className="bg-white border shadow-md duration-500 hover:scale-105 hover:shadow-xl p-5 rounded-lg">
            <div>
                <img className="h-72 w-full rounded-lg border p-2" src={image} alt="" />
            </div>
            <div className="space-y-2">
                <div className="mt-4 flex justify-between items-center">
                    <span className="text-gray-100 uppercase font-semibold text-xs bg-yellow-400 px-3 py-1 rounded-sm">{category}</span>
                    <span className="text-gray-100 font-semibold text-xs bg-red-600 px-3 py-1 rounded-sm">5% Discount</span>
                </div>
                <p className="text-lg font-bold text-black truncate block capitalize">{title.length > 16 ? `${title.slice(0, 16)}...` : title}</p>
                <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto">${(price - (0.05 * price)).toFixed(2)}</p>
                    <del className="text-red-700">
                        <p className="text-sm text-red-600 cursor-auto ml-2">${price}</p>
                    </del>
                </div>
            </div>
            <div className="mt-2 flex justify-between items-center flex-wrap">
                <Link
                    to={`/products/${_id}`}
                    className=''>
                    <button type="button" className="px-6 py-2 font-semibold border border-black rounded hover:text-white hover:bg-rose-600 hover:border-rose-600">Show Details</button>
                </Link>
                <button
                    onClick={() => handleCarts(_id)}
                    className="hover:bg-rose-500 hover:text-white rounded-full p-3"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default ProductCard;