import { useState } from "react"
import {Bars3Icon,XMarkIcon} from '@heroicons/react/24/solid';
import logo from '@/assets/logo.png'
import Link from "./Link";
type Props = {
    selectedPage:string,
    setselectedPage:(value:string)=>void
}

const Navbar = ({selectedPage,setselectedPage}: Props) => {

const flexBetween = 'flex items-center justify-between';

  return (
    <nav>
        <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>
                    {/* left side */}
                    <img src={logo} alt="logo"/>
                    {/* right side */}
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
                            <button>Become a member</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </nav>
  )
}

export default Navbar