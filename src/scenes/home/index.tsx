import ActionButton from '@/shared/ActionBtn'
import { SelectedPage } from '@/shared/Types'
import React from 'react'
import HomePageText from '@/assets/HomePageText.png'
import HomePageGraphic from '@/assets/HomePageGraphic.png'
import SponsorForbes from '@/assets/SponsorForbes.png'
import SponserFortune from '@/assets/SponserFortune.png'
import SponserRedBull from '@/assets/SponserRedBull.png'
import useMediaQuery from '@/hooks/UseMediaQuery'
type Props = {
    setselectedPage: (value: SelectedPage) => void
}

const Home = ({ setselectedPage }: Props) => {
    const isAboveMediumScreen = useMediaQuery("(min-width:1060px)")
    return (
        <section id='home' className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'>
            {/* IMAGE AND MAIN HEADER */}
            <div>
                {/* MAIN HEADER */}
                <div>
                    {/* HEADING */}
                    <div>
                        <div>
                            <div>
                                <img src={HomePageText} alt='home-page-text' />
                            </div>
                        </div>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti inventore, consequuntur quos incidunt modi in odit, natus quidem non earum maiores dolore ipsam error obcaecati aliquid corporis quis distinctio vel!
                        </p>
                    </div>
                    {/* ACTIONS */}
                    <div>
                        <ActionButton setselectedPage={setselectedPage}>
                            join now
                        </ActionButton>
                    </div>
                </div>
                {/* IMAGE */}
                <div>

                </div>
            </div>
        </section>
    )
}

export default Home