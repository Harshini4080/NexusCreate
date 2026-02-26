import { useAuth, useUser } from '@clerk/clerk-react'
import React, { useEffect, useState } from 'react'
import { Heart } from 'lucide-react'
import axios from 'axios'
import toast from 'react-hot-toast'

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL

const Community = () => {

  const [creations, setCreations] = useState([])
  const [loading, setLoading] = useState(true)

  const { user } = useUser()
  const { getToken } = useAuth()

  // Fetch all published creations
  const fetchCreations = async () => {
    try {
      const { data } = await axios.get(
        '/api/user/get-published-creations',
        { headers: { Authorization: `Bearer ${await getToken()}` } }
      )

      if (data.success) {
        setCreations(data.creations)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  // Toggle like on a creation
  const imageLikeToggle = async (id) => {
    try {
      const { data } = await axios.post(
        '/api/user/toggle-like-creation',
        { id },
        { headers: { Authorization: `Bearer ${await getToken()}` } }
      )

      if (data.success) {
        await fetchCreations() 
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if (user) fetchCreations()
  }, [user])

  if (loading) {
    return (
      <div className='flex justify-center items-center h-full'>
        <span className='w-10 h-10 rounded-full border-4 border-primary border-t-transparent animate-spin'></span>
      </div>
    )
  }

  return (
    <div className='flex-1 h-full flex flex-col gap-4 p-6'>

      {/* Section Title */}
      <h2 className='text-lg font-semibold'>Creations</h2>

      {/* Image Grid */}
      <div className='bg-white h-full w-full rounded-xl overflow-y-auto p-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {creations.map((creation) => (
          <div key={creation.id} className='relative group'>
            
            <img
              src={creation.content}
              alt="Published creation"
              className='w-full h-full object-cover rounded-lg'
            />

            {/* Hover Overlay */}
            <div className='absolute inset-0 flex items-end justify-between 
                            p-3 bg-gradient-to-b from-transparent to-black/80 
                            text-white opacity-0 group-hover:opacity-100 
                            transition rounded-lg'>
              
              <p className='text-sm truncate'>{creation.prompt}</p>

              <div className='flex gap-1 items-center'>
                <p>{creation.likes.length}</p>
                <Heart
                  onClick={() => imageLikeToggle(creation.id)}
                  className={`w-5 h-5 cursor-pointer transition hover:scale-110 
                    ${creation.likes.includes(user.id)
                      ? 'fill-red-500 text-red-600'
                      : 'text-white'}`}
                />
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Community