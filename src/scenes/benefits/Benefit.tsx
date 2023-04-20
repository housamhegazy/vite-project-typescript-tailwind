import { BenefitType,SelectedPage } from "@/shared/Types"
import AnchorLink from "react-anchor-link-smooth-scroll"

type props = {
    setselectedPage :(value:SelectedPage)=>void,
     icon:JSX.Element,
    title:string,
    description:string
}
const Benefit = ({setselectedPage,icon,title,description}:props)=>{
    return(
        <div className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center">
            <div className="mb-4 flex justify-center">
                <div className="rounded-full border-2 border-gray-100 p-4">
                    {icon}
                </div>
            </div>
            <h4 className="font-bold">{title}</h4>
            <p className="my-3">{description}</p>
            <AnchorLink className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
                onClick={() => setselectedPage(SelectedPage.ContactUs)}
                href={`#${SelectedPage.ContactUs}`}
                >
                <p>learn more</p>
           </AnchorLink>
        </div>
    )
}
export default Benefit