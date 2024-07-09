import React from 'react'
import Sidebar from '../components/Sidebar'

const Home = ({children}) => {
  return (
    <div className='py-0 px-[10%] min-h-screen bg-[#FFFFFF] flex'>
        <div className='w-[20%]'>
           <Sidebar />
        </div>
        <div className='flex-1'>
            {children}
        </div>
    </div>
  )
}

export default Home