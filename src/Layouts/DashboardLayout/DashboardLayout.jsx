import React from 'react'
import Navbar from '../../Pages/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar />
            <section className='w-full h-screen grid md:grid-cols-6 gap-4'>
                <div className='w-full h-full'>
                    <ul className='md:mt-0 text-2xl md:fixed'>
                        <li>CCCCCC</li>
                        <li>CCCCCC</li>
                    </ul>
                </div>
                <div className='w-full h-full bg-red-600 md:col-span-5'>
                    
                </div>
            </section>
        </div>
    )
}

export default DashboardLayout;