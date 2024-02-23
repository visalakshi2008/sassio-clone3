import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import image1 from '../assests/zoompic.jpg';
import image2 from '../assests/zoompic2.jpg';
import '../swiper.css';
import { FaStar } from "react-icons/fa6";
import { useMediaQuery } from 'react-responsive';


const Touchslider = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 1020px)' });
  return (
   <>
   <Swiper 
         slidesPerView={isMobile ? 1 : 2} 
        spaceBetween={30}
        // pagination={{
        //   clickable: true,
        // }}
        // modules={[Pagination]}
        className="mySwiper miper"
      >
        <SwiperSlide className='swiperslider2'>
           <div className='flex gap-3 '>
            <div className='grid grid-cols-3 rounded-full p-8 px-12'>
              <img className='image' src={image1} alt='m1'></img>
              <div className=' col-span-2'>
              <div className=' flex flex-col items-start justify-start'>
              <h2 className='text-4xl font-bold'>Liana Zhu</h2>
              <p className='text-[blue] text-[13px] '>Senior Director</p>
              <p className='text-start text-[17px]'>As a app developer exper, i help oraganizations adjust to the expanding significance os internet promoting</p>
              <div className='flex gap2 '>
              <FaStar className='text-[#ffc107]'/>
              <FaStar className='text-[#ffc107]'/>
              <FaStar className='text-[#ffc107]'/>
              <FaStar className='text-[#ffc107]'/>
              <FaStar className='text-[#ffc107]'/>
              
              </div>
            </div>
              </div>
            </div>
           </div>
        </SwiperSlide>
        <SwiperSlide  className='swiperslider2'>
           <div className='flex gap-3 '>
            <div className='grid grid-cols-3 rounded-full p-8 px-12'>
              <img className='image' src={image2} alt='m1'></img>
              <div className=' col-span-2'>
              <div className=' flex flex-col items-start justify-start'>
              <h2 className='text-4xl font-bold'>Liana Zhu</h2>
              <p className='text-[blue] text-[13px] '>Senior Director</p>
              <p className='text-start text-[17px]'>As a app developer exper, i help oraganizations adjust to the expanding significance os internet promoting</p>
              <div className='flex gap2 '>
              <FaStar className='text-[#ffc107]'/>
              <FaStar className='text-[#ffc107]'/>
              <FaStar className='text-[#ffc107]'/>
              <FaStar className='text-[#ffc107]'/>
              <FaStar className='text-[#ffc107]'/>
              
              </div>
            </div>
              </div>
            </div>
           </div>
        </SwiperSlide>
        <SwiperSlide  className='swiperslider2'>
           <div className='flex gap-3 '>
            <div className='grid grid-cols-3 rounded-full p-8 px-12'>
              <img className='image' src={image1} alt='m1'></img>
              <div className=' col-span-2'>
              <div className=' flex flex-col items-start justify-start'>
              <h2 className='text-4xl font-bold'>Liana Zhu</h2>
              <p className='text-[blue] text-[13px] '>Senior Director</p>
              
              <p className='text-start text-[17px]'>As a app developer exper, i help oraganizations adjust to the expanding significance os internet promoting</p>
              <div className='flex gap2 '>
              <FaStar className='text-[#ffc107]'/>
              <FaStar className='text-[#ffc107]'/>
              <FaStar className='text-[#ffc107]'/>
              <FaStar className='text-[#ffc107]'/>
              <FaStar className='text-[#ffc107]'/>
              
              </div>
            </div>
              </div>
            </div>
           </div>
        </SwiperSlide>
        <SwiperSlide  className='swiperslider2'>
           <div className='flex gap-3 '>
            <div className='grid grid-cols-3 rounded-full p-8 px-12'>
              <img className='image' src={image2} alt='m1'></img>
              <div className=' col-span-2'>
              <div className=' flex flex-col items-start justify-start'>
              <h2 className='text-4xl font-bold'>Liana Zhu</h2>
              <p className='text-[blue] text-[13px] '>Senior Director</p>
              <p className='text-start text-[17px]'>As a app developer exper, i help oraganizations adjust to the expanding significance os internet promoting</p>
              <div className='flex gap2 '>
              <FaStar className='text-[#ffc107]'/>
              <FaStar className='text-[#ffc107]'/>
              <FaStar className='text-[#ffc107]'/>
              <FaStar className='text-[#ffc107]'/>
              <FaStar className='text-[#ffc107]'/>
              
              </div>
            </div>
              </div>
            </div>
           </div>
        </SwiperSlide>
        <SwiperSlide  className='swiperslider2'>
           <div className='flex gap-3 '>
            <div className='grid grid-cols-3 rounded-full p-8 px-12'>
              <img className='image' src={image1} alt='m1'></img>
              <div className=' col-span-2'>
              <div className=' flex flex-col items-start justify-start'>
              <h2 className='text-4xl font-bold'>Liana Zhu</h2>
              <p className='text-[blue] text-[13px] '>Senior Director</p>
              <p className='text-start text-[17px]'>As a app developer exper, i help oraganizations adjust to the expanding significance os internet promoting</p>
              <div className='flex gap2 '>
              <FaStar className='text-[#ffc107]'/>
              <FaStar className='text-[#ffc107]'/>
              <FaStar className='text-[#ffc107]'/>
              <FaStar className='text-[#ffc107]'/>
              <FaStar className='text-[#ffc107]'/>
              
              </div>
            </div>
              </div>
            </div>
           </div>
        </SwiperSlide>
        <SwiperSlide  className='swiperslider2'>
           <div className='flex gap-3 '>
            <div className='grid grid-cols-3 rounded-full p-8 px-12'>
              <img className='image' src={image2} alt='m1'></img>
              <div className=' col-span-2'>
              <div className=' flex flex-col items-start justify-start'>
              <h2 className='text-4xl font-bold'>Liana Zhu</h2>
              <p className='text-[blue] text-[13px] '>Senior Director</p>
              <p className='text-start text-[17px]'>As a app developer exper, i help oraganizations adjust to the expanding significance os internet promoting</p>
              <div className='flex gap2 '>
              <FaStar className='text-[#ffc107]'/>
              <FaStar className='text-[#ffc107]'/>
              <FaStar className='text-[#ffc107]'/>
              <FaStar className='text-[#ffc107]'/>
              <FaStar className='text-[#ffc107]'/>
              
              </div>
            </div>
              </div>
            </div>
           </div>
        </SwiperSlide>
        <SwiperSlide  className='swiperslider2'>
           <div className='flex gap-3 '>
            <div className='grid grid-cols-3 rounded-full p-8 px-12'>
              <img className='image' src={image1} alt='m1'></img>
              <div className=' col-span-2'>
              <div className=' flex flex-col items-start justify-start'>
              <h2 className='text-4xl font-bold'>Liana Zhu</h2>
              <p className='text-[blue] text-[13px] '>Senior Director</p>
              <p className='text-start text-[17px]'>As a app developer exper, i help oraganizations adjust to the expanding significance os internet promoting</p>
              <div className='flex gap2 '>
              <FaStar className='text-[#ffc107]'/>
              <FaStar className='text-[#ffc107]'/>
              <FaStar className='text-[#ffc107]'/>
              <FaStar className='text-[#ffc107]'/>
              <FaStar className='text-[#ffc107]'/>
              
              </div>
            </div>
              </div>
            </div>
           </div>
        </SwiperSlide>
        
        
      </Swiper>
   </>
  )
}

export default Touchslider