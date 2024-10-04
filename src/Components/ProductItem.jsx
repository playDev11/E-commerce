import React, { useContext } from 'react'
import { shopContext } from '../Context/context'
import { Link } from 'react-router-dom'

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(shopContext)
  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      <div className="relative overflow-hidden">
        <img
          className="w-full h-auto transition-transform duration-500 ease-in-out transform hover:scale-110 rounded-3xl"
          src={image[0]}
          alt=""
        />
        <div className="absolute inset-0 bg-blue-900 bg-opacity-30 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-3xl">
          <p>{name}</p>
        </div>
      </div>
      <p className="pt-3 pb-2 text-sm">{name}</p>
      <p className="text-sm  font-medium">
        {currency}
        {price}
      </p>
    </Link>
  )
}

export default ProductItem
