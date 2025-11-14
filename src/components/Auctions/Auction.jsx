import React from 'react';

const Auction = ({items}) => {
    const {image,title, description, currentBidPrice, timeLeft} = items;
    return (
        <div className='flex justify-between w-[60%] items-start'>
           <div className="overflow-x-auto">
  
    {/* head */}
    
  
      {/* row 1 */}
      <tr>
       
        <td className=''>
          <div className="flex items-center gap-3">
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
        <td>
          {currentBidPrice}
          <br />
          
        </td>
        <td>{timeLeft}</td>
        <th>
          <button className="btn btn-ghost btn-xs">Bid</button>
        </th>
      </tr>
     
    
    {/* foot */}
    
  </div>
        </div>
    );
};

export default Auction;