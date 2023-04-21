import { SelectedPage } from '@/shared/Types'
import React from 'react'
import Htext from '@/shared/Htext'
import { motion } from 'framer-motion'
import { useForm, SubmitHandler } from "react-hook-form";
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png'
const inputStyles = 'w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white'
type props={
    setselectedPage:(value:SelectedPage)=>void
}
const ContactUs = ({setselectedPage}:props)=>{
     const { register, trigger, formState: { errors } } = useForm<FormData>();
    const onSubmit = async(e:any)=>{
        const isValid = await trigger()
        if(!isValid){
            e.preventDefault()
        }
    }
    return(
        <section id='contactus' className='pt-24 pb-34 mx-auto w-5/6'>
            <motion.div
            onViewportEnter={()=>{setselectedPage(SelectedPage.ContactUs)}}
            >
                {/* header */}
                <motion.div
                    className='md:w-3/5'
                    initial='hidden'
                    whileInView={'visible'}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                        }}>
                    <Htext>
                        <span className='text-primary-500'>JOIN NOW </span>TO GET IN SHAPE
                    </Htext>
                    <p className='my-5'>come to us to know all classes come
                        to us to know all classcome to us to
                        know all classcome to us to know all
                        classcome to us to know all classcome to
                        us to know all classcome to us to know all class</p>
                </motion.div>
                {/* FORM AND IMAGES */}
                <div className='mt-10 md:flex flex-col align-center justify-between gap-8'>
                    <motion.div className='mt-10 basis-3/5 md:mt-0'
                    initial='hidden'
                    whileInView={'visible'}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                        }}>
                        <form 
                        target='_blank'
                        onSubmit = {onSubmit}
                        method='POST'
                        action='https://formsubmit.co/geohousam@gmail.com'
                        >
                            <input 
                            className={inputStyles}
                            type='text'
                            placeholder='NAME'
                            {...register("name",{ required: true, maxLength: 20 })}
                            />
                            {errors.name && (
                            <p className='mt-1 text-primary-500'>
                                {errors.name.type === required && "input required"}
                                {errors.name.type === maxLength && "max length 20"}
                            </p>})
                            <input 
                            className={inputStyles}
                            type='email'
                            placeholder='EMAIL'
                            
                            {...register("email",{ 
                                required: true, 
                                pattern: '/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i',
                                }
                                )}
                            />
                            {errors.email && (
                            <p classemail='mt-1 text-primary-500'>
                                {errors.email.type === required && "input required"}
                                {errors.email.type === pattern && "invalid email address"}
                            </p>})
                        </form>
                    </motion.div>
                </div>
            </motion.div>
            
        </section>
    )
}
export default ContactUs