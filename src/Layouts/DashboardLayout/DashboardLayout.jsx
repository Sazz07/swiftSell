import Navbar from '../../Pages/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar />
            <section className='w-full h-screen grid md:grid-cols-6 gap-4'>
                <div className='w-full h-full'>
                    <ul className='md:mt-0 text-2xl md:fixed w-full'>
                        <li className='flex justify-evenly items-center hover:bg-violet-100 w-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 inline">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                            <span>Carts</span>
                        </li>
                        <li>CCCCCC</li>
                    </ul>
                </div>
                <div className='w-full h-full bg-red-600 md:col-span-5'>
                    <Outlet></Outlet>
                </div>
            </section>
        </div>
    )
}

export default DashboardLayout;