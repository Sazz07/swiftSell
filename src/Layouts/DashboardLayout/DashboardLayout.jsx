import { Link } from 'react-router-dom';
import Navbar from '../../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
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
                                    <Link to="" className="flex items-center p-2 space-x-3 rounded-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-gray-400">
                                            <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                                        </svg>
                                        <span>Wishlist</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='bg-white md:col-span-5'>
                    <div className='container mx-auto'>
                        <div className='grid '>
                            <div className='border-2 border-black py-2'>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout;