import ActionButton from '@/shared/ActionBtn'
import { SelectedPage } from '@/shared/Types'
import React from 'react'
import HomePageText from'@/assets/HomePageText.png'
type Props = {
setselectedPage :(value:SelectedPage)=>void
}

const Home = ({setselectedPage}: Props)=> {
  return (
    <div>index</div>
  )
}

export default Home