import React from 'react';

const Footer = () => {
    return (
        <div className='text-center'>
            <h1>Auction<span>Gallery</span></h1>
            <div className='flex text-center'>
                <h2>Bid.</h2>
                <h2>Win.</h2>
                <h2>Own.</h2>
            </div>
            <div className='flex'>
                <h3>Home</h3>
                <h3>Auctions</h3>
                <h3>Categories</h3>
                <h3>How to work</h3>
            </div>
            <p>&copy; 2025 AuctionHub. All rights reserved.</p>
        </div>
    );
};

export default Footer;