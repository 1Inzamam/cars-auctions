import React, { useEffect, useState } from 'react';
import Auction from './Auction';
const Auctions = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch("cars.json")
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])

    return (
        <div className='w-full max-w-full mx-auto px-2 md:px-6 lg:px-8 xl:px-16 py-7 bg-blue-100'>
            <h1 className='text-2xl'>Auctions</h1>
            <p>Discover and bid on cars</p>
            <div className='flex gap-4'>
                <div className=' w-[60%]'>
                    <table className="table w-full">
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
                        <Auction key={items.id} items={items}></Auction>
                    ))
                }
            </tbody>
                    </table>

                </div>
                <div className='text-center w-[35%]'>
                    <h1>Favorite Items</h1>
                </div>
            </div>

            

        </div>
    );
};

export default Auctions;