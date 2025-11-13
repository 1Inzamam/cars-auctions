import { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination, Autoplay } from 'swiper/modules';


const Banner = () => {
    const [cars, setCars] = useState([])
    useEffect(() => {
        fetch("banner.json")
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])
    // console.log(cars)

    return (
        <div>
            <Swiper autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }} 
        pagination={true} 
        modules={[Autoplay, Pagination]} 
        className="mySwiper">
            {
                cars.map((items, index) => (
                    <div key={index}>
                        
                        
                            <SwiperSlide><img className='h-[70vh] w-full' src={items.image_url} alt=""/></SwiperSlide>
                        
                    </div>
                ))

            }
            </Swiper>
        </div>
    );
};

export default Banner;