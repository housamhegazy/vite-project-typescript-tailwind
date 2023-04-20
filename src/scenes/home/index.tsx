import ActionButton from '@/shared/ActionBtn'
import { SelectedPage } from '@/shared/Types'
import React from 'react'
import HomePageText from '@/assets/HomePageText.png'
import HomePageGraphic from '@/assets/HomePageGraphic.png'
import SponsorForbes from '@/assets/SponsorForbes.png'
import SponsorFortune from '@/assets/SponsorFortune.png'
import SponsorRedBull from '@/assets/SponsorRedBull.png'
import useMediaQuery from '@/hooks/UseMediaQuery'
import AnchorLink from 'react-anchor-link-smooth-scroll'
type Props = {
    setselectedPage: (value: SelectedPage) => void
}

const Home = ({ setselectedPage }: Props) => {
    const isAboveMediumScreen = useMediaQuery("(min-width:1060px)")
    return (
        <section id='home' className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'>
            {/* IMAGE AND MAIN HEADER */}
            <div className=' md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'>
                {/* MAIN HEADER */}
                <div className='z-10 mt-32 md:basis-3/5'>
                    {/* HEADING */}
                    <div className='md:mt-20'>
                        <div className='relative'>
                            <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext'>
                                <img src={HomePageText} alt='home-page-text' />
                            </div>
                        </div>
                        <p className='mt-8 text-sm '>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti inventore, consequuntur quos incidunt modi in odit, natus quidem non earum maiores dolore ipsam error obcaecati aliquid corporis quis distinctio vel!
                        </p>
                    </div>
                    {/* ACTIONS */}
                    <div className='mt-8 flex items-center gap-8 md:justify-start'>
                        <ActionButton setselectedPage={setselectedPage}>
                            join now
                        </ActionButton>
                        <AnchorLink className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
                        onClick={()=>setselectedPage(SelectedPage.ContactUs)}
                        href={`#${SelectedPage.ContactUs}`}
                        ><p>learn more</p></AnchorLink>
                    </div>
                </div>
                {/* IMAGE */}
                <div className='flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end'>
                    <img src={HomePageGraphic} alt='home-page-graphic'/>
                </div>
            </div>
            {/* SPONSORS */}
            {isAboveMediumScreen && 
            (
                <div>
                    <img alt='SponsorFortune' src={SponsorFortune}/>
                    <img alt='SponsorRedBull' src={SponsorRedBull}/>
                    <img alt='SponsorForbes' src={SponsorForbes}/>
                </div>
            )}
        </section>
    )
}

export default Home