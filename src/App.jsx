import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Auctions from './components/Auctions/Auctions'
import './App.css'



function App() {
  const [bidding, setBidding] = useState([]);
  const [bidAmount, setBidAmount] =useState(0);

  const handleAddBidding = (Car) => {
    setBidding([...bidding, Car])
    setBidAmount(bidAmount+Car.currentBidPrice)
  };


  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className='bg-blue-100'>
        <h1 className='text-2xl'>Auctions</h1>
        <p>Discover and bid on cars</p>
      </div>

      <div className='parent flex bg-blue-100'>
        <div className='left-container w-[60%]'>
          <Auctions handleAddBidding={handleAddBidding}></Auctions>
        </div>
        <div className='right-container text-center w-[35%] py-7 bg-blue-100'>

          <div className='bg-white rounded-3xl'>
            <h1 className='text-3xl font-medium'>Bidding Cars</h1>

            {bidAmount == 0 ?  <div><p>Not Bidding yet</p></div> : (<div className='px-5 py-5'>{
              bidding.map((bidCars) =>
                <table >
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
            

            <h3>Total bids Amount: {bidAmount}  </h3>
          </div>

        </div>

      </div>

    </>
  )
}

export default App
