import React, { useContext, useState } from 'react'
import { shopContext } from '../Context/context'
import { assets } from '../assets/frontend_assets/assets'
import Title from '../Components/Title'

const Collection = () => {

  const {products} = useContext(shopContext)
  const [showFilter, setShowFilter] = useState(false)
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

      <div className='min-w-60'>
        <p onClick={()=> setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS</p>
        <img className={`h-3 sm:hidden ${showFilter? " rotate-90": ''}`} src={assets.dropdown_icon} alt="" />
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'MEN'} name="" id="" /> MEN
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'WOMEN'} name="" id="" /> WOMEN
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'KIDS'} name="" id="" /> KIDS
            </p>
          </div>

        </div>
        <div className={`border border-gray-300 pl-5 py-3 my-5${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'TOP'} name="" id="" /> TOP
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'TROUSERS'} name="" id="" /> TROUSERS
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'WINTERWEAR'} name="" id="" /> WINTERWEAR
            </p>
          </div>

        </div>

      </div>
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTION'}/>
          <select className='border-2 border-gray-300 text-sm px-2'>
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low-high</option>
            <option value="high-low">Sort by: High-low</option>
          </select>

        </div>

      </div>
        
    </div>
  )
}

export default Collection