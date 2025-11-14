import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Auctions from './components/Auctions/Auctions'
import './App.css'



function App() {
  const [bidding, setBidding] = useState([]);
  const [bidAmount, setBidAmount] = useState('0000');

  const handleAddBidding = (Car) => {
    setBidding([...bidding, Car]);
    const bidAmountToInt = parseInt(bidAmount);
    const add = bidAmountToInt + Car.currentBidPrice;
    const newBid = add.toString();
    setBidAmount(newBid);
  };


  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className='bg-blue-100'>
        <h1 className='text-2xl'>Auctions</h1>
        <p>Discover and bid on cars</p>
      </div>

      <div className='flex gap-3 justify-between bg-blue-100 w-full max-w-full mx-auto px-2 md:px-6 lg:px-8 xl:px-16 py-7'>
        <div className='left-container w-[70%]'>
          <Auctions handleAddBidding={handleAddBidding}></Auctions>
        </div>
        <div className='right-container text-center w-[30%] py-7 bg-blue-100'>

          <div className='bg-white rounded-3xl py-3'>
            <h1 className='text-3xl font-medium py-6'>Bidding Cars</h1>
            <hr className='text-gray-100'></hr>

            {bidAmount == 0 ? <div className='py-3'>
              <p className='font-medium text-2xl py-3'>Not Bidding yet</p>
              <p className=' text-gray-600 textarea-lg max-w-2xs mx-auto pb-3'>Click the $ sign on any Car to add it to your bidding list</p>
            </div> : (<div className='px-5 py-5'>{
              bidding.map((bidCars) =>
                <table key={bidCars.id}>
                  <tbody >
                    <tr >
                      <td className='w-[45%]'>
                        <div className="flex items-center gap-3 space-y-5">
                          <div className="avatar">
                            <div className="mask mask-squircle h-24 w-24">
                              <img
                                src={bidCars.image}
                                alt="Avatar Tailwind CSS Component" />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{bidCars.title}</div>
                            <div className="text-sm opacity-50">{bidCars.description}</div>
                          </div>
                          <button>X</button>
                        </div>
                      </td>
                    </tr>
                  </tbody>

                </table>

              )
            }</div>)}

            <hr className='text-gray-100'></hr>
            <div className='flex justify-between items-center text-2xl p-6'>
              <h3 className=''>Total bids Amount</h3> <h3>${bidAmount}</h3>
            </div>

          </div>

        </div>

      </div>

    </>
  )
}

export default App
