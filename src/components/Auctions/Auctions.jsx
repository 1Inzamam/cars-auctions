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
            <div className='flex justify-between'>
                <div className='flex justify-between w-[60%]'>
                    <h1 className='text-2xl'>Cars</h1>
                    <div className='flex gap-4'>
                        <h1 className='text-2xl'>Current Bid</h1>
                        <h1 className='text-2xl'>Time Left</h1>
                        <h1 className='text-2xl'>Bid Now</h1>
                    </div>
                </div>
                <div>
                    <h1>Favorite Items</h1>
                </div>
            </div>

            <div>
                {
                    cars.map((items) => (
                        <Auction key={items.id} items={items}></Auction>
                    ))
                }
            </div>

        </div>
    );
};

export default Auctions;