import React, { useEffect, useState } from 'react'
import SearchBar from '../Components/productsComponents/SearchBar'
import ProductCard from '../Components/productsComponents/ProductCard';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

function Products() {
  const [open, setOpen] = useState(false);
  const [width , setWidth] = useState("")

  useEffect(()=>{
    setWidth("md:w-[240px] w-[140px]")
  },[])

  return (
    <>
      <Navbar open={open} setOpen={setOpen} />
      <div className={`w-full mt-6 relative ${open ? "z-[-1]" : 'z-10'} z-[0] mx-auto mb-24`}>
        <SearchBar />
        <div className='flex flex-wrap justify-center'>
          <ProductCard width={width}/>
          <ProductCard width={width}/>
          <ProductCard width={width}/>
          <ProductCard width={width}/>
          <ProductCard width={width}/>
          <ProductCard width={width}/>
          <ProductCard width={width}/>
          <ProductCard width={width}/>
          <ProductCard width={width}/>
          <ProductCard width={width}/>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Products