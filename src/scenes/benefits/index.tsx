import { BenefitType, SelectedPage } from '@/shared/Types'
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import Htext from '@/shared/Htext'
import Benefit from './Benefit'
import ActionButton from '@/shared/ActionBtn'
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'
const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className='h-6 w-6' />,
        title: 'State of the Art Facilities',
        description: "all coatches waiting to train peaple harder "
    },
    {
        icon: <UserGroupIcon className='h-6 w-6' />,
        title: "100's of Divers classes",
        description: "all coatches waiting to train peaple harder "
    },
    {
        icon: <AcademicCapIcon className='h-6 w-6' />,
        title: 'Expert and pro trainers',
        description: "all coatches waiting to train peaple harder "
    },
]

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}
type props = {
    setselectedPage: (value: SelectedPage) => void
}
const Benefits = ({ setselectedPage }: props) => {

    return (
        <section id='benefits' className='mx-auto min-h-full w-5/6 py-20'>
            <motion.div
                onViewportEnter={() => { setselectedPage(SelectedPage.Benefits) }}
            >
                {/* HEADER */}
                <motion.div className='md:my-5 md:w-3/5'
                    initial='hidden'
                    whileInView={'visible'}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <Htext>
                        MORE THAN JUST GYM
                    </Htext>
                    <p className='my-5 text-sm'>come to us to know all classes come
                        to us to know all classcome to us to
                        know all classcome to us to know all
                        classcome to us to know all classcome to
                        us to know all classcome to us to know all class </p>
                </motion.div>
                {/* BENEFITS */}
                <motion.div className='md:flex items-center justify-between gap-8 mt-5'
                    initial="hiden"
                    whileInView={"visible"}
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                >
                    {benefits.map((benefit: BenefitType) => {
                        return (
                            <Benefit
                                key={benefit.title}
                                icon={benefit.icon}
                                title={benefit.title}
                                description={benefit.description}
                                setselectedPage={setselectedPage}
                            />
                        )
                    })}
                </motion.div>
                {/* GRAPHICS AND DESCRIPTION  */}
                <div className='mt-16 items-center md:flex justify-between gap-20 md:mt-28'>
                    {/* GRAPHIC */}
                    <img className='mx-auto' alt='benefits-page-graphic' src={BenefitsPageGraphic} />

                    {/* description */}
                    <div>
                        {/* TITLE */}
                        <div className='relative'>
                            <div className='before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves'>
                                <motion.div
                                    initial='hidden'
                                    whileInView={'visible'}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.5 }}
                                    variants={{
                                        hidden: { opacity: 0, x: 50 },
                                        visible: { opacity: 1, x: 0 }
                                    }}
                                >
                                    <Htext>
                                        MILLION OF HAPPY MEMBERS GETTING {" "}
                                        <span className='text-primary-500'>Fit</span>
                                    </Htext>
                                </motion.div>
                            </div>
                        </div>
                        {/* DESCRIPt */}
                        <motion.div
                        initial='hidden'
                        whileInView={'visible'}
                        viewport={{once:true,amount:0.5}}
                        transition={{delay:0.2,duration:0.5}}
                        variants={{
                            hidden:{opacity:0,x:50},
                            visible:{opacity:1,x:0}
                        }}
                        >
                            <p className='my-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore odio officiis mollitia laboriosam sint sed voluptatque tempora libero quos.</p>
                            <p className='my-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore odio officiis mollit</p>
                        </motion.div>
                        {/* BUTTON */}
                        <div className='relative mt-15'>
                            <div className='before:absolute before:-bottom-20 before:right-40 before:z-[1] before:content-sparkles'>
                                <ActionButton setselectedPage={setselectedPage}>
                                    Join Now
                                </ActionButton>
                            </div>
                        </div>
                    </div>
                </div>

            </motion.div>
        </section>
    )
}
export default Benefits