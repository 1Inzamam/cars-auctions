import React from 'react';

const Footer = () => {
    return (
        <div className='flex flex-col items-center justify-center py-14 space-y-6'>
            <h1 className='text-3xl text-[#00a2ff]'>Auction<span className='font-bold text-gray-400'>Zone</span></h1>
            <div className='flex text-center '>
                <h2>Bid.</h2>
                <h2>Win.</h2>
                <h2>Own.</h2>
            </div>
            <div className='flex gap-3'>
                <h3>Home</h3>
                <h3>Auctions</h3>
                <h3>Categories</h3>
                <h3>How to work</h3>
            </div>
            <p>&copy; 2025 AuctionHub. All rights reserved.</p>
        </div>
    );
};

export default Footer;