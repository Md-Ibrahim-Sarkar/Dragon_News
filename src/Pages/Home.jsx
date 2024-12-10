import React from 'react'
import Sidebar from '../Components/Sidebar'
import NewsCard from '../Components/NewsCard'
import LoginWith from '../Components/LogInWith'
import FindUsOn from '../Components/FindUsOn'
import Q_zone from '../Components/Q_zone'

function Home() {
  return (
    <div className='container grid grid-cols-12 gap-4 mx-auto'>
      <Sidebar className='h-full lg:col-span-3 max-md:hidden' />

      <div className=' lg:col-span-6 md:col-span-6'>
        <NewsCard />
      </div>
      <div className='lg:col-span-3 md:col-span-6 flex  flex-col justify-center'>
        <LoginWith />
        <FindUsOn />
        <Q_zone />
      </div>
    </div>
  )
}

export default Home