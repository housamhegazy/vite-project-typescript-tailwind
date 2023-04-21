import { BenefitType, SelectedPage } from '@/shared/Types'
import {HomeModernIcon,UserGroupIcon,AcademicCapIcon} from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import Htext from '@/shared/Htext'
import Benefit from './Benefit'
 const benefits : Array<BenefitType>= [
        {icon:<HomeModernIcon className='h-6 w-6'/>,
        title:'State of the Art Facilities',
        description:"all coatches waiting to train peaple harder "
        },
        {icon:<UserGroupIcon className='h-6 w-6'/>,
        title:"100's of Divers classes",
        description:"all coatches waiting to train peaple harder "
        },
        {icon:<AcademicCapIcon className='h-6 w-6'/>,
        title:'Expert and pro trainers',
        description:"all coatches waiting to train peaple harder "
        },
    ]
type props = {
    setselectedPage : (value:SelectedPage)=>void
}
const Benefits = ({setselectedPage}:props)=>{
   
    return (
        <section id='benefits' className='mx-auto min-h-full w-5/6 py-20'>
            <motion.div
            onViewportEnter={()=>{setselectedPage(SelectedPage.Benefits)}}
            >
                {/* HEADER */}
                <div className='md:my-5 md:w-3/5'>
                   <Htext>
                       MORE THAN JUST GYM
                   </Htext>
                   <p className='my-5 text-sm'>come to us to know all classes come 
                       to us to know all classcome to us to 
                       know all classcome to us to know all 
                       classcome to us to know all classcome to 
                       us to know all classcome to us to know all class </p>
                </div>
                {/* BENEFITS */}
                <div className='md:flex items-center justify-between gap-8 mt-5'>
                    {benefits.map((benefit:BenefitType)=>{
                        return(
                        <Benefit
                        key={benefit.title}
                        icon = {benefit.icon}
                        title = {benefit.title}
                        description = {benefit.description}
                        setselectedPage={setselectedPage}
                        />
                        )
                    })}
                </div>
            </motion.div>
        </section>
    )
}
export default Benefits