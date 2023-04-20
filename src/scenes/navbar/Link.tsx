import { SelectedPage } from "@/shared/Types";
import AnchorLink from "react-anchor-link-smooth-scroll"


type Props = {
    page: string;
    selectedPage: SelectedPage,
    setselectedPage: (value: SelectedPage) => void
}

const Link = ({ page, selectedPage, setselectedPage }: Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage // replace any space
    return (
        <AnchorLink
            className={`${selectedPage === lowerCasePage} ? "text-primary-500" : "" 
    transition duration-500 hover:text-primary-300
    `}
            href={`#${lowerCasePage}`}
            onClick={() => setselectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    )
}

export default Link