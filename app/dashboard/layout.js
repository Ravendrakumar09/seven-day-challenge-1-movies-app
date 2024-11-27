import React from 'react'
import Sidebar from './components/sidebar' 
import Rightbar from './components/rightbar'
import Mainbar from './components/mainbar' 

export default function layout({children}) {
  return (
    <div className='flex h-screen w-full p-2'>
    <div className='flex p-2 w-1/5'><Sidebar/>
    </div>
    <div className='flex p-2 w-3/5'><Mainbar/></div>
    <div className='flex p-2 w-1/5'><Rightbar/></div>
  </div>
  )
}
