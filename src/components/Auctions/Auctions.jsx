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
        
                <div>
                    <table className=" md:table w-full bg-white rounded-3xl">
                        <thead className=''>
                            <tr>
                                <th className='lg:w-[45%]'>Items</th>
                                <th className='lg:w-[20%] text-center'>Current Bid</th>
                                <th className='lg:w-[20%] text-center'>Time Left</th>
                                <th className='lg:w-[15%] text-center'> Bid Now</th>
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
                
       
    );
};

export default Auctions;