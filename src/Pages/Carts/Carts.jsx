/* eslint-disable no-unused-vars */
import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthProvider"
import { useQuery } from "@tanstack/react-query";
import CartItems from "./CartItems";
import Loading from "../Shared/Loading/Loading";

const Carts = () => {
    const { phone } = useContext(AuthContext);
    console.log(phone);
    const url = `https://e-commerce-task-server-mu.vercel.app/carts?phone=${phone}`

    const { data: carts = [], isLoading, refetch } = useQuery({
        queryKey: ['carts'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    });
    // console.log(carts);

    const totalPrice = carts.reduce((acc, curr) => acc + ((curr.price) - (0.05 * curr.price)), 0);

    if (isLoading) {
        return <Loading />
    }
    return (
        <section className="container mx-auto flex justify-center my-20">
            <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 bg-white shadow-md rounded-lg">
                <h2 className="text-xl font-semibold text-center">Your cart</h2>
                <ul className="flex flex-col divide-y divide-gray-700">
                    {
                        carts.map(cart => <CartItems
                            key={cart._id}
                            cart={cart}
                            refetch={refetch}
                            isLoading={isLoading}
                        ></CartItems>)
                    }
                </ul>
                <div className="space-y-1 text-right">
                    <p className="text-xl">Total amount:
                        <span className="font-semibold text-green-600"> ${(totalPrice).toFixed(2)}</span>
                    </p>
                    <p className="text-sm text-gray-400">Not including taxes and shipping costs</p>
                </div>
                <div className="flex justify-end space-x-4">
                    <Link to='/products' type="button" className="px-6 py-2 border rounded-md border-violet-400 hover:bg-violet-400 hover:text-white">Back
                        <span className="sr-only sm:not-sr-only">to shop</span>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Carts