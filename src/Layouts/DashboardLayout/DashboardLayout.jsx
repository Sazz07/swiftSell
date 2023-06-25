import { Link, Outlet } from 'react-router-dom';
import Navbar from '../../Pages/Shared/Navbar/Navbar';
import { useQuery } from '@tanstack/react-query';

const DashboardLayout = () => {
    const { data: customers = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    });
    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/products');
            const data = await res.json();
            return data;
        }
    });

    return (
        <div>
            <Navbar />
            <div className='grid md:grid-cols-6 gap-3'>
                <div className="flex flex-col h-screen p-3 w-full md:w-60 bg-gray-200">
                    <div className="space-y-3">
                        <div className="flex items-center justify-between bg-gray-300 py-4 rounded">
                            <h2 className='text-lg pl-2 font-bold text-gray-600'>Dashboard</h2>
                        </div>
                        <div className="flex-1">
                            <ul className="pt-2 pb-4 space-y-1 text-sm">
                                <li className="rounded-sm hover:bg-gray-300">
                                    <Link to="/dashboard/customerlist" className="flex items-center p-2 space-x-3 rounded-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-gray-400">
                                            <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                                        </svg>
                                        <span>Customer list</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='bg-white md:col-span-5'>
                    <div>
                        <h1 className='text-center my-5 text-5xl'>Welcome to Admin Dashboard</h1>
                    </div>
                    <div className='container mx-auto'>
                        <div className='grid md:grid-cols-2 gap-20'>
                            <div className='bg-emerald-300 py-2 rounded-xl shadow-xm'>
                                <h1 className='text-center text-4xl mt-2'>Total Customer</h1>
                                <div className='flex justify-between p-10 items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                                    </svg>
                                    <div>
                                        <h1 className='text-4xl font-semibold'>{customers.length}</h1>
                                    </div>
                                </div>

                            </div>
                            <div className='bg-rose-300 py-2 rounded-xl shadow-xm'>
                                <h1 className='text-center text-4xl mt-2'>Total Products</h1>
                                <div className='flex justify-between p-10 items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                                    </svg>
                                    <div>
                                        <h1 className='text-4xl font-semibold'>{products.length}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout;