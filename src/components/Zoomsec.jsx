import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'; 
import image1 from '../assests/zoompic.jpg';
import image2 from '../assests/zoompic2.jpg';
import image3 from '../assests/zoompic3.jpg';
import image4 from '../assests/zoompic2.jpg';
import image5 from '../assests/zoompic5.jpg';
import gradienticon from '../assests/gradienticon.png'
import Touchslider from './Touchslider';


const Zoomsec = () => {
    const zoomVariants ={
        animated:{
            scale:[1, 1.1, 1, 1.1],
            opacity: 0.6,
            transition: {
                repeat: Infinity,
                ease: "linear",
                duration: 2,
            }
        }
    }
    const [images, setImages] = useState([]);

    useEffect(() => {
        const sampleImages = [
            { id: 1, src: image1 },
            { id: 2, src: image2 },
            { id: 3, src: image3 },
            { id: 4, src: image4 },
            { id: 5, src: image5 },
            { id: 2, src: image5 },
            { id: 3, src: image3 },
        ];

        const imagesWithPosition = sampleImages.map(image => ({
            ...image,
            position: {
                top: `${Math.random() * 80}vh`, 
                left: `${Math.random() * 80}vw`, 
            },
        }));

        setImages(imagesWithPosition);
    }, []);

    return (
        <div className='relative w-full h-screen p-10 bg-zoombg bg-cover z-[2] '>
            {images.map(({ id, src, position }) => (
                <motion.img 
                    key={id}
                    src={src}
                    alt={`Image ${id}`}
                    className="absolute w-[70px] h-[70px] rounded-full object-cover z-[2]  "
                    style={{ top: position.top, left: position.left,border: '8px solid #e6e1e1',  opacity: 0.5 }}
                    variants={zoomVariants} 
                    animate="animated" 
                />
            ))}
            <div className='w-full flex  flex-col items-center justify-center z-[1]'>
            <div className='lg:w-[40vw] flex  flex-col items-center justify-center px-10 gap-8'>
                 <div className='flex gap-3 '>
                  <img src={gradienticon} alt='gradienticon'></img>
                  <p className='text-3xl'>Testimonials</p>
                  </div>
                  <h1 className='text-6xl text-center '>
                  <span className='text-6xl font-bold text-center'>Client’s review for </span> work satisfaction.
                  </h1>
                  <p className='text-[15px] text-[gray] text-center'>As a SAAS web crawler expert, I help organizations adjust to the expanding significance of internet promoting.</p>
                  </div>    
                  <div className='w-[75vw] py-10 flex justify-center items-center'>
                  </div>
                  <div className='w-[75vw]  flex justify-center items-center'>
                  </div></div>
                  <div className='w-[75vw]  m-auto'>
                  <Touchslider/>
                  </div>
        </div>
    );
}

export default Zoomsec;
