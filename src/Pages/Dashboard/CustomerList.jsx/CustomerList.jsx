import { useQuery } from "@tanstack/react-query";

const CustomerList = () => {
    const { data: customers = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    });
    // console.log(customers);
    return (
        <div className="flex flex-col mt-5">
            <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full">
                            <thead className="bg-violet-200 border-b">
                                <tr>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        #
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mr-2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                        </svg>
                                        <span>Customer Number</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    customers.map((customer,i) => <tr
                                    key={customer._id}
                                    className="bg-white border-b"
                                    >
                                    <th className="py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-left pl-5" >{i + 1}</th>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">+{customer?.phone}</td>
                                </tr>)
                                }
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        // <div>
        //     <h2 className="text-3xl">All Users</h2>
        //     <div className="overflow-x-auto">
        //         <table className="table w-full">
        //             <thead>
        //                 <tr>
        //                     <th></th>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 {
        //                     customers.map((customer, i) => <tr key={customer._id}>
        //                         <th>{i + 1}</th>
        //                         <td>{customer.phone}</td>
        //                     </tr>)
        //                 }

        //             </tbody>
        //         </table>
        //     </div>
        // </div>
    )
}

export default CustomerList