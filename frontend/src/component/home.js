import React from 'react'
import Slider from './Home/silder'
import ProductItems from './Home/productItems'
import Intro from './Home/intro'
import Categories from './Home/categories'
import Branding from './Home/brands'

export default function Home(){
  return (
    <div>
        <Slider/>
        <ProductItems/>
        <Intro/>
        <Categories/>
        <Branding/>
    </div>
  )
}


