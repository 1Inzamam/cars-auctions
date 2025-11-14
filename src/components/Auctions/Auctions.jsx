import React, { useEffect, useState } from 'react';
import Auction from './Auction';
const Auctions = ({ handleAddBidding }) => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch("cars.json")
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])

    return (
        <div className='w-full max-w-full mx-auto px-2 md:px-6 lg:px-8 xl:px-16 py-7 bg-blue-100'>
            
            <div className='flex gap-4'>
                <div className=' '>
                    <table className="table w-full bg-white rounded-3xl">
                        <thead className=''>
                            <tr>
                                <th className='w-[45%]'>Items</th>
                                <th className='w-[20%] text-center'>Current Bid</th>
                                <th className='w-[20%] text-center'>Time Left</th>
                                <th className='w-[15%] text-center'> Bid Now</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cars.map((items) => (
                                    <Auction key={items.id} items={items} handleAddBidding={handleAddBidding}></Auction>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                
            </div>
        </div>
    );
};

export default Auctions;