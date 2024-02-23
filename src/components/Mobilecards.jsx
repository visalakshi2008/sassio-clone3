import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../mobile.css'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import slide_image_1 from '../assests/mb6.png'
import slide_image_2 from '../assests/mb2.png'
import slide_image_3 from '../assests/mb3.png'
import slide_image_4 from '../assests/mb4.png'
import slide_image_5 from '../assests/mb5.png'
import slide_image_6 from '../assests/mbl1.png'
import slide_image_7 from '../assests/mb8.png'

const Mobilecards = () => {
  return (
   <>
   <div className="container">
      <Swiper 
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      > 
      <div className='coverimg'></div>
        <SwiperSlide className='swiperslide3 ' >
          <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className='swiperslide3 '>
          <img src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className='swiperslide3 '>
          <img src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className='swiperslide3 '>
          <img src={slide_image_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className='swiperslide3 '>
          <img src={slide_image_5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide  className='swiperslide3 '>
          <img src={slide_image_6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className='swiperslide3 '>
          <img src={slide_image_7} alt="slide_image" />
        </SwiperSlide>

        {/* <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div> */}
      </Swiper>
    </div>

   </>
  )
}

export default Mobilecards