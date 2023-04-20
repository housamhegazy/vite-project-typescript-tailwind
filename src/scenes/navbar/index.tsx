import { useState } from "react"
import {Bars3Icon,XMarkIcon} from '@heroicons/react/24/solid';
import logo from '@/assets/logo.png'
import Link from "./Link";
import { SelectedPage } from "@/shared/Types";
import useMediaQuery from "@/hooks/UseMediaQuery";
import ActionButton from "@/shared/ActionBtn";

type Props = {
    selectedPage:SelectedPage,
    setselectedPage:(value:SelectedPage)=>void;
    isTopOfPage:boolean
}

const Navbar = ({isTopOfPage,selectedPage,setselectedPage}: Props) => {

const flexBetween = 'flex items-center justify-between';
const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
const [isMenuToggled,setIsMenuToggled] = useState<boolean>(false)
const navbackround  = isTopOfPage? "" : 'bg-primary-100 drop-shadow'
  return (
    <nav>
        <div className={`${navbackround} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>
                    {/* left side */}
                    <img src={logo} alt="logo"/>
                    {/* right side */}
                    {isAboveMediumScreens ? 
                    <div className={`${flexBetween}`}>
                    <div className={`${flexBetween} gap-8 text-sm`}>
                        <Link 
                        selectedPage={selectedPage}
                        setselectedPage={setselectedPage}
                        page = 'Home'
                        />
                        <Link 
                        selectedPage={selectedPage}
                        setselectedPage={setselectedPage}
                        page = 'About'
                        />
                        <Link 
                        selectedPage={selectedPage}
                        setselectedPage={setselectedPage}
                        page = 'Benefits'
                        />
                        <Link 
                        selectedPage={selectedPage}
                        setselectedPage={setselectedPage}
                        page = 'Our Classes'
                        /> 
                        <Link 
                        selectedPage={selectedPage}
                        setselectedPage={setselectedPage}
                        page = 'Contact Us'
                        />
                    </div>
                    <div className={`${flexBetween} gap-8`}>
                        <p>Sign In </p>
                        <ActionButton setselectedPage={setselectedPage}>Become a member</ActionButton>
                    </div>
                </div>
                :
                (<button className="rounded-full bg-secondary-500 p-2"
                onClick={()=>{setIsMenuToggled(!isMenuToggled)}}
                >
                    <Bars3Icon className="h-6 w-6 text-white"/>
                </button>)
                
                }
                    
                </div>
            </div>

        </div>
        {/* mobile menu MODAL */}
        {!isAboveMediumScreens && isMenuToggled && (
            <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
                {/* CLOSE ICON */}
                <div className="flex justify-end p-12">
                    <button onClick={()=>{setIsMenuToggled(false)}}>
                        <XMarkIcon className="w-6 h-6 text-gray-400"/>
                        </button>
                </div>
                {/* MENU ITEMS */}
                <div className={`ml-[33%] flex flex-col gap-10 text-2xl`}>
                        <Link 
                        selectedPage={selectedPage}
                        setselectedPage={setselectedPage}
                        page = 'Home'
                        />
                        <Link 
                        selectedPage={selectedPage}
                        setselectedPage={setselectedPage}
                        page = 'About'
                        />
                        <Link 
                        selectedPage={selectedPage}
                        setselectedPage={setselectedPage}
                        page = 'Benefits'
                        />
                        <Link 
                        selectedPage={selectedPage}
                        setselectedPage={setselectedPage}
                        page = 'Our Classes'
                        /> 
                        <Link 
                        selectedPage={selectedPage}
                        setselectedPage={setselectedPage}
                        page = 'Contact Us'
                        />
                    </div>
            </div>
        )}
    </nav>
  )
}

export default Navbar