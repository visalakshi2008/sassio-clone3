import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './auto.css';
import { Autoplay, Navigation } from 'swiper/modules';
import student1 from '../../assests/stu1 (1).png'
import student2 from '../../assests/stu1 (2).png'
import student3 from '../../assests/stu1 (3).png'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { useMediaQuery } from 'react-responsive';


const Autocarosal = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 1020px)' });
  return (
    <>
    <Swiper
    slidesPerView={isMobile ? 1 : 3} 
      spaceBetween={3}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      // pagination={{
      //   clickable: true,
      // }}
      navigation={true}
      modules={[Autoplay, Navigation]}
      className="wiper"
    >
      <SwiperSlide className='swiperrr-slide'>
       <div className='flex flex-col items-center justify-center gap-2'>
       <div className='relative'>
        <div className=' absolute w-[100%] h-[100%] bg-none rounded-full left-10 border-2 border-[#6f42c1] z-10 '>
        <div className=' relative w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center left-[180px] top-[20px] shadow-lg'>
        <FaFacebookF className=' text-[#118bfc] '/></div>
        <div className=' relative w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center left-[205px] top-[20px] p-3 shadow-lg'>
        <FaLinkedin className=' text-[#03a9f4] '/></div>
        <div className=' relative w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center left-[215px] top-[20px] p-3 shadow-lg'>
        <FaBehance className=' text-[#dc3545] '/></div>
        <div className=' relative w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center left-[205px] top-[20px] py-3 shadow-lg'>
        <FaTwitter className='text-[#007bf]  '/></div>
        </div>
        
        <img  className =' mainu relative z-20' src={student1} alt='st1'></img>
        
        
       </div>
       <div className=''>
        <h2 className='text-3xl font-bold'>Mark Aterr</h2>
        <p className='text-[15px] color-[gray]'>windows developer</p>
        </div>
        </div>

      </SwiperSlide>
      <SwiperSlide className='swiperrr-slide'>
       <div className='flex flex-col items-center justify-center gap-2'>
       <div className='relative'>
        <div className=' absolute w-[100%] h-[100%] bg-none rounded-full left-10 border-2 border-[#6f42c1] z-10 '>
        <div className=' relative w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center left-[180px] top-[20px] shadow-lg'>
        <FaFacebookF className=' text-[#118bfc] '/></div>
        <div className=' relative w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center left-[205px] top-[20px] p-3 shadow-lg'>
        <FaLinkedin className=' text-[#03a9f4] '/></div>
        <div className=' relative w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center left-[215px] top-[20px] p-3 shadow-lg'>
        <FaBehance className=' text-[#dc3545] '/></div>
        <div className=' relative w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center left-[205px] top-[20px] py-3 shadow-lg'>
        <FaTwitter className='text-[#007bf]  '/></div>
        </div>
        
        <img  className =' mainu relative z-20' src={student1} alt='st1'></img>
        
        
       </div>
       <div className=''>
        <h2 className='text-3xl font-bold'>Mark Aterr</h2>
        <p className='text-[15px] color-[gray]'>windows developer</p>
        </div>
        </div>

      </SwiperSlide>
      <SwiperSlide className='swiperrr-slide'>
       <div className='flex flex-col items-center justify-center gap-2'>
       <div className='relative'>
        <div className=' absolute w-[100%] h-[100%] bg-none rounded-full left-10 border-2 border-[#6f42c1] z-10 '>
        <div className=' relative w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center left-[180px] top-[20px] shadow-lg'>
        <FaFacebookF className=' text-[#118bfc] '/></div>
        <div className=' relative w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center left-[205px] top-[20px] p-3 shadow-lg'>
        <FaLinkedin className=' text-[#03a9f4] '/></div>
        <div className=' relative w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center left-[215px] top-[20px] p-3 shadow-lg'>
        <FaBehance className=' text-[#dc3545] '/></div>
        <div className=' relative w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center left-[205px] top-[20px] py-3 shadow-lg'>
        <FaTwitter className='text-[#007bf]  '/></div>
        </div>
        
        <img  className =' mainu relative z-20' src={student2} alt='st1'></img>
        
        
       </div>
       <div className=''>
        <h2 className='text-3xl font-bold'>Mark Aterr</h2>
        <p className='text-[15px] color-[gray]'>windows developer</p>
        </div>
        </div>

      </SwiperSlide>
      <SwiperSlide className='swiperrr-slide'>
       <div className='flex flex-col items-center justify-center gap-2'>
       <div className='relative'>
        <div className=' absolute w-[100%] h-[100%] bg-none rounded-full left-10 border-2 border-[#6f42c1] z-10 '>
        <div className=' relative w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center left-[180px] top-[20px] shadow-lg'>
        <FaFacebookF className=' text-[#118bfc] '/></div>
        <div className=' relative w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center left-[205px] top-[20px] p-3 shadow-lg'>
        <FaLinkedin className=' text-[#03a9f4] '/></div>
        <div className=' relative w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center left-[215px] top-[20px] p-3 shadow-lg'>
        <FaBehance className=' text-[#dc3545] '/></div>
        <div className=' relative w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center left-[205px] top-[20px] py-3 shadow-lg'>
        <FaTwitter className='text-[#007bf]  '/></div>
        </div>
        
        <img  className =' mainu relative z-20' src={student3} alt='st1'></img>
        
        
       </div>
       <div className=''>
        <h2 className='text-3xl font-bold'>Mark Aterr</h2>
        <p className='text-[15px] color-[gray]'>windows developer</p>
        </div>
        </div>

      </SwiperSlide>
      <SwiperSlide className='swiperrr-slide'>
       <div className='flex flex-col items-center justify-center gap-2'>
       <div className='relative'>
        <div className=' absolute w-[100%] h-[100%] bg-none rounded-full left-10 border-2 border-[#6f42c1] z-10 '>
        <div className=' relative w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center left-[180px] top-[20px] shadow-lg'>
        <FaFacebookF className=' text-[#118bfc] '/></div>
        <div className=' relative w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center left-[205px] top-[20px] p-3 shadow-lg'>
        <FaLinkedin className=' text-[#03a9f4] '/></div>
        <div className=' relative w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center left-[215px] top-[20px] p-3 shadow-lg'>
        <FaBehance className=' text-[#dc3545] '/></div>
        <div className=' relative w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center left-[205px] top-[20px] py-3 shadow-lg'>
        <FaTwitter className='text-[#007bf]  '/></div>
        </div>
        
        <img  className =' mainu relative z-20' src={student1} alt='st1'></img>
        
        
       </div>
       <div className=''>
        <h2 className='text-3xl font-bold'>Mark Aterr</h2>
        <p className='text-[15px] color-[gray]'>windows developer</p>
        </div>
        </div>

      </SwiperSlide>
      <SwiperSlide className='swiperrr-slide'>
       <div className='flex flex-col items-center justify-center gap-2'>
       <div className='relative'>
        <div className=' absolute w-[100%] h-[100%] bg-none rounded-full left-10 border-2 border-[#6f42c1] z-10 '>
        <div className=' relative w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center left-[180px] top-[20px] shadow-lg'>
        <FaFacebookF className=' text-[#118bfc] '/></div>
        <div className=' relative w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center left-[205px] top-[20px] p-3 shadow-lg'>
        <FaLinkedin className=' text-[#03a9f4] '/></div>
        <div className=' relative w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center left-[215px] top-[20px] p-3 shadow-lg'>
        <FaBehance className=' text-[#dc3545] '/></div>
        <div className=' relative w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center left-[205px] top-[20px] py-3 shadow-lg'>
        <FaTwitter className='text-[#007bf]  '/></div>
        </div>
        
        <img  className =' mainu relative z-20' src={student2} alt='st1'></img>
        
        
       </div>
       <div className=''>
        <h2 className='text-3xl font-bold'>Mark Aterr</h2>
        <p className='text-[15px] color-[gray]'>windows developer</p>
        </div>
        </div>

      </SwiperSlide>
      <SwiperSlide className='swiperrr-slide'>
       <div className='flex flex-col items-center justify-center gap-2'>
       <div className='relative'>
        <div className=' absolute w-[100%] h-[100%] bg-none rounded-full left-10 border-2 border-[#6f42c1] z-10 '>
        <div className=' relative w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center left-[180px] top-[20px] shadow-lg'>
        <FaFacebookF className=' text-[#118bfc] '/></div>
        <div className=' relative w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center left-[205px] top-[20px] p-3 shadow-lg'>
        <FaLinkedin className=' text-[#03a9f4] '/></div>
        <div className=' relative w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center left-[215px] top-[20px] p-3 shadow-lg'>
        <FaBehance className=' text-[#dc3545] '/></div>
        <div className=' relative w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center left-[205px] top-[20px] py-3 shadow-lg'>
        <FaTwitter className='text-[#007bf]  '/></div>
        </div>
        
        <img  className =' mainu relative z-20' src={student1} alt='st1'></img>
        
        
       </div>
       <div className=''>
        <h2 className='text-3xl font-bold'>Mark Aterr</h2>
        <p className='text-[15px] color-[gray]'>windows developer</p>
        </div>
        </div>

      </SwiperSlide>
      
    </Swiper>
  </>
);
}

export default Autocarosal