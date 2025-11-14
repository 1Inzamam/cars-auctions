import React from 'react';
import { BiDollar } from "react-icons/bi";

const Auction = ({items,handleAddBidding}) => {
    const {image,title, description, currentBidPrice, timeLeft} = items;
    return (
      <tr>
        <td className='lg:w-[45%]'>
          <div className="flex flex-col lg:flex-row items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={image}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{title}</div>
              <div className="text-sm opacity-50">{description}</div>
            </div>
          </div>
        </td>
        <td className='lg:w-[20%] text-center' >
          {currentBidPrice}
          <br />
          
        </td>
        <td className='lg:w-[20%] text-center'>{timeLeft}</td>
        <td className='lg:w-[15%] text-center'>
          <button 
          className="btn btn-ghost btn-xs" 
          onClick={()=>handleAddBidding(items)}>
            <BiDollar className='text-lg' />
          </button>
        </td>
      </tr>
    );
};

export default Auction;