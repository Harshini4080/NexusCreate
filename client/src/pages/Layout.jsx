import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { Menu, X } from 'lucide-react'
import Sidebar from '../components/Sidebar'
import { SignIn, useUser } from '@clerk/clerk-react'

const Layout = () => {

  const navigate = useNavigate()
  const { user } = useUser()
  const [sidebar, setSidebar] = useState(false)

  // Redirect to auth if user is not signed in
  if (!user) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <SignIn />
      </div>
    )
  }

  return (
    <div className='flex flex-col h-screen'>

      {/* Top Navigation */}
      <nav className='w-full h-16 px-8 flex items-center justify-between border-b border-gray-200 bg-white'>
        <img
          src={assets.logo}
          alt="NexusCreate Logo"
          className='cursor-pointer w-36 sm:w-44 object-contain'
          onClick={() => navigate('/')}
        />

        {/* Mobile Sidebar Toggle */}
        {sidebar ? (
          <X
            onClick={() => setSidebar(false)}
            className='w-6 h-6 text-gray-600 sm:hidden cursor-pointer'
          />
        ) : (
          <Menu
            onClick={() => setSidebar(true)}
            className='w-6 h-6 text-gray-600 sm:hidden cursor-pointer'
          />
        )}
      </nav>

      {/* Main Layout */}
      <div className='flex flex-1 overflow-hidden'>
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />

        {/* Page Content */}
        <main className='flex-1 bg-[#F4F7FB] overflow-y-auto'>
          <Outlet />
        </main>
      </div>

    </div>
  )
}

export default Layout