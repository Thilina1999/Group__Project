import React from 'react'
import Slider from './Home/silder'
import ProductItems from './Home/productItems'
import Intro from './Home/intro'
import Categories from './Home/categories'
import Branding from './Home/brands'
//import LayoutBuyer from './layout/layoutBuyer'

export default function Home() {
  return (
    <div>
        <Slider />
        <ProductItems />
        <Intro />
        <Categories />
        <Branding />
    </div>
  )
}


