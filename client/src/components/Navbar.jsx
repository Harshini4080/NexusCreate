import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'

const Navbar = () => {

  const navigate = useNavigate()
  const { user } = useUser()
  const { openSignIn } = useClerk()

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 
                 backdrop-blur-2xl 
                 flex items-center justify-between 
                 h-16 px-4 sm:px-20 xl:px-32"
    >

      {/* Logo */}
      <img
        src={assets.logo}
        alt="NexusCreate Logo"
        className="w-36 sm:w-48 cursor-pointer object-contain"
        onClick={() => navigate('/')}
      />

      {/* Authentication Section */}
      {user ? (
        <UserButton
          appearance={{
            elements: { avatarBox: "w-10 h-10" }
          }}
        />
      ) : (
        <button
          onClick={openSignIn}
          className="flex items-center gap-2 rounded-full text-sm 
                     bg-primary text-white px-10 py-2.5 
                     hover:opacity-90 transition"
        >
          Get started
          <ArrowRight className="w-4 h-4" />
        </button>
      )}

    </nav>
  )
}

export default Navbar