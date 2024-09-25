import React from 'react'

const NewsLetterBox = () => {
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & Get 20% Off</p>
        <p className='text-gray-400 mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, quis placeat.</p>
        <form action="">
            <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter Your Email' />
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>Subscribe</button>
        </form>

    </div>
  )
}

export default NewsLetterBox