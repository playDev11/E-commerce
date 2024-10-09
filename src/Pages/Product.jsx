import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { shopContext } from '../Context/context'

const Product = () => {

  const {product_id } = useParams()
  // console.log(product_id)
const {products} = useContext(shopContext)
const [productData, setProductData] = useState(false)
const [image,  setImage] = useState(false)


const fetchProductData = async () =>{
  products.map(item=>{
    if (item._id === product_id) {
      setProductData(item)
      setImage(item.image[0])
      return null;
    }
  })
}
useEffect(() => {
  fetchProductData();
  },[product_id])

  
  return productData?(
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>


      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[]'>

          </div>

        </div>

      </div>
        
    </div>
  ): <div className='opacity-0'></div>
}

export default Product