/* eslint-disable react/prop-types */

import axios from "axios";
import { toast } from "react-hot-toast";

const CartItems = ({ cart, refetch }) => {
    const { _id, image, productName, price } = cart;

    const handleDeleteCart = (id) => {
        axios
            .delete(`http://localhost:5000/carts/${id}`)
            .then((res) => {
                const data = res.data;
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success('Items Removed');
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };
    return (
        <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
            <div className="flex w-full space-x-2 sm:space-x-4">
                <img className="flex-shrink-0 object-cover  w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-gray-500" src={image} alt="product_image" />
                <div className="flex flex-col justify-between w-full pb-4">
                    <div className="flex justify-between w-full pb-2 space-x-2">
                        <div className="space-y-1">
                            <h3 className="text-lg font-semibold sm:pr-8">{productName}</h3>
                        </div>
                        <div className="text-right">
                            <p className="text-lg font-semibold">${(price - (0.05 * price)).toFixed(2)}</p>
                            <p className="text-sm line-through text-red-500">${price}</p>
                        </div>
                    </div>
                    <div className="flex justify-end text-sm divide-x">
                        <button
                            onClick={() => handleDeleteCart(_id)}
                            className="flex items-center px-2 py-1 space-x-1 bg-red-600 text-white rounded-sm hover:bg-red-700">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                                <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                                <rect width="32" height="200" x="168" y="216"></rect>
                                <rect width="32" height="200" x="240" y="216"></rect>
                                <rect width="32" height="200" x="312" y="216"></rect>
                                <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                            </svg>
                            <span>Remove</span>
                        </button>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default CartItems;