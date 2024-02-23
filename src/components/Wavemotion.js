import React from 'react'
import { motion } from 'framer-motion'

function Wavemotion() {
    const wave1Variants = {
        hidden: {
            backgroundPositionX: "0px",
            opacity: 0.6
        },
        visible: {
            backgroundPositionX: "500px",
            zIndex: 100,
            opacity: 0.6,
            transition: {
                repeat: Infinity,
                ease: "linear",
                duration: 15,
            }
        }
    };

    const wave2Variants = {
        hidden: {
            backgroundPositionX:"0px",
            opacity: 0.5
        },
        visible: {
            backgroundPositionX:"-500px",
            zIndex: 999,
            opacity: 0.5,
            transition: {
                repeat: Infinity,
                    ease: "linear",
                    duration: 15,
                
            }
        }
    }
    const wave3Variants = {
        hidden: {
            backgroundPositionX:"0px",
            opacity: 0.3
        },
        visible: {
            backgroundPositionX:"-500px",
            zIndex: 998,
            opacity: 0.3,
            transition: {
                   repeat: Infinity,
                    ease: "linear",
                    duration: 10,
                
            }
        }
    }
    const wave4Variants = {
        hidden: {
            backgroundPositionX:"0px",
            opacity: 0.1
        },
        visible: {
            backgroundPositionX:"500px",
            zIndex: 997,
            opacity: 0.1,
            transition: {
                repeat: Infinity, 
                ease: "linear",
                duration: 10,
                
            }
        }
    }
    return (
            <div className='relative w-[100%] h-[200px] overflow-hidden bg-wavee bg-cover ' >
                <motion.div
                variants={wave1Variants}
                initial="hidden"
                animate="visible"
                className='absolute left-0 bottom-[20px] w-full h-300 bg-wave1'
                style={{ backgroundSize: "2000px 300px" }}
                
            ></motion.div>
                <motion.div 
                variants={wave2Variants}
                initial="hidden"
                animate="visible"
                className='absolute  left-0 w-[100%] h-[300px] bg-wave1 bg-no-repeat  '
                    style={{backgroundSize:"2000px 200px"}}
                    
                ></motion.div>
                <motion.div 
                variants={wave3Variants}
                initial="hidden"
                animate="visible"
                className='absolute  left-0 w-[100%] h-[300px] bg-wave1 bg-no-repeat z-[-1] '
                    style={{backgroundSize:"2000px 200px"}}
                    
                ></motion.div>
                <motion.div 
                variants={wave4Variants}
                initial="hidden"
                animate="visible"
                className='absolute  left-0 w-[100%] h-[300px] bg-wave1 bg-no-repeat  '
                    style={{backgroundSize:"2000px 200px"}}
                    
                ></motion.div>
            
        </div>
    )
}

export default Wavemotion;
