import React, { useContext, useEffect, useState } from 'react'
import { shopContext } from '../Context/context'
import { assets } from '../assets/frontend_assets/assets'
import Title from '../Components/Title'

const Collection = () => {

  const {products} = useContext(shopContext)
  const [showFilter, setShowFilter] = useState(false)
  const [filterProduct, setFilterProduct] = useState([]);
  const [category,setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])

  const toggleCategory = (e)=>{
    if (category.includes(e.target.value)) {
      setCategory(prev=> prev.filter(item => item !== e.target.value))
      
    }
    else{
      setCategory(prev =>[...prev, e.target.value])
    }
  }
  const togglesubCategory = (e)=>{
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev=> prev.filter(item => item !== e.target.value))
      
    }
    else{
      setSubCategory(prev =>[...prev, e.target.value])
    }
  }
    const applyFilter = ()=>{
      let productsCopy = products.slice();
      if (category.length > 0) {
        productsCopy = productsCopy.filter(item => category.includes(item.category))
        
      }
      setFilterProduct(productsCopy)
    }
  useEffect(() =>{
    setFilterProduct(products)
  },[])
  useEffect(() =>{
applyFilter()
  },[category, subCategory])
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
        </p>
        <img
          className={`h-3 sm:hidden ${showFilter ? ' rotate-90' : ''}`}
          src={assets.dropdown_icon}
          alt=""
        />
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? '' : 'hidden'
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={'MEN'}
                onChange={toggleCategory}
                name=""
                id=""
              />{' '}
              MEN
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={'WOMEN'}
                onChange={toggleCategory}
                name=""
                id=""
              />{' '}
              WOMEN
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={'KIDS'}
                onChange={toggleCategory}
                name=""
                id=""
              />{' '}
              KIDS
            </p>
          </div>
        </div>
        <div
          className={`border border-gray-300 pl-5 py-3 my-5${
            showFilter ? '' : 'hidden'
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={'TOP'}
                onChange={togglesubCategory}
                name=""
                id=""
              />{' '}
              TOP
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={'TROUSERS'}
                onChange={togglesubCategory}
                name=""
                id=""
              />{' '}
              TROUSERS
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={'WINTERWEAR'}
                onChange={togglesubCategory}
                name=""
                id=""
              />{' '}
              WINTERWEAR
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={'ALL'} text2={'COLLECTION'} />
          <select className="border-2 border-gray-300 text-sm px-2">
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low-high</option>
            <option value="high-low">Sort by: High-low</option>
          </select>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4   gap-4 gap-y-6 rounded-2xl">
          {
          filterProduct.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Collection