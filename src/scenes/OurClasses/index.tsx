import { ClassType, SelectedPage } from '@/shared/Types'
import React from 'react';
import image1 from "@/assets/image1.png"
import image2 from "@/assets/image2.png"
import image3 from "@/assets/image3.png"
import image4 from "@/assets/image4.png"
import image5 from "@/assets/image5.png"
import image6 from "@/assets/image6.png"
import { motion } from 'framer-motion';
import Htext from '@/shared/Htext';
import Class from './Class';
const classes:Array<ClassType> = [
    {
        name:'weight training classes',
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis pariatur blanditiis excepturi fugit nobis tempora earum magni voluptates, repellendus doloribus ut ipsa numquam nihil dolor non vero aperiam perspiciatis nulla. ",
        image:image1
    },
    {
        name:'adventure training ',
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis pariatur blanditiis excepturi fugit nobis tempora earum magni voluptates, repellendus doloribus ut ipsa numquam nihil dolor non vero aperiam perspiciatis nulla. ",
        image:image2
    },
    {
        name:'very hard training',
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis pariatur blanditiis excepturi fugit nobis tempora earum magni voluptates, repellendus doloribus ut ipsa numquam nihil dolor non vero aperiam perspiciatis nulla. ",
        image:image3
    },
    {
        name:'weight training2 classes',
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis pariatur blanditiis excepturi fugit nobis tempora earum magni voluptates, repellendus doloribus ut ipsa numquam nihil dolor non vero aperiam perspiciatis nulla. ",
        image:image4
    },
    {
        name:'easy level training',
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis pariatur blanditiis excepturi fugit nobis tempora earum magni voluptates, repellendus doloribus ut ipsa numquam nihil dolor non vero aperiam perspiciatis nulla. ",
        image:image5
    },
    {
        name:'weight training3 classes',
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis pariatur blanditiis excepturi fugit nobis tempora earum magni voluptates, repellendus doloribus ut ipsa numquam nihil dolor non vero aperiam perspiciatis nulla. ",
        image:image6
    },
]
type Props = {
    setselectedPage:(value:SelectedPage)=>void
}

const OurClasses = ({setselectedPage}: Props)=> {
  return (
    <section id='ourclasses' className='w-full bg-primary-100 py-40'>
        <motion.div
         onViewportEnter={()=>{setselectedPage(SelectedPage.OurClasses)}}
        >
            <motion.div className='mx-auto w-5/6'
             initial='hidden'
             whileInView={'visible'}
             viewport={{once:true,amount:0.5}}
             transition={{duration:0.5}}
             variants={{
                 hidden:{opacity:0,x:-100},
                 visible:{opacity:1,x:0}
             }}>
                <div className='md:w-3/5'>
                    <Htext>Our Classes</Htext>
                    <p className='py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis pariatur blanditiis excepturi fugit nobis tempora earum magni voluptates, repellendus doloribus ut ipsa numquam nihil dolor non vero aperiam perspiciatis nulla.
                        
                    </p>
                </div>
            </motion.div>
            <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
             <ul className='w-[2800px] whitespace-nowrap'>
                {classes.map((item,index)=>{
                    return(
                        <Class
                        key={`${item.name}-${index}`}
                        name={item.name}
                        description= {item.description}
                        image={item.image}
                        
                        />
                    )
                })}
             </ul>
            </div>
        </motion.div>
    </section>
  )
}

export default OurClasses