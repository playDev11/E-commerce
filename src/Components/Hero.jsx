import React from 'react'
import {assets} from '../assets/frontend_assets/assets'
const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[4px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
          </div>
          <h1 className=" outfit-uniquifier text-3xl sm:py-3 lg:text-4xl leading-relaxed">
            LATEST ARRIVALS
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold  text-sm md:text-base">SHOP NOW</p>
            <p className="w-8 md:w-10 h-[3px] bg-[#414141]"></p>
          </div>
        </div>
      </div>
      <img src={assets.hero_img} className="w-full sm:w-1/2" alt="" />
    </div>
  )
}

export default Hero
