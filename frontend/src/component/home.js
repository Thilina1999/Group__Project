import React from 'react'
import Slider from './Home/silder'
import ProductItems from './Home/productItems'
import Intro from './Home/intro'
import Categories from './Home/categories'
import Branding from './Home/brands'
//import LayoutBuyer from './layout/layoutBuyer'
import Navbar1 from "./navbarNew/navbarNew"
import Announcement from './Announcement/announcement';
import Footer1 from './footerNew/footerNew'


export default function Home() {
  return (
    <div>
      <Announcement />
      <Navbar1 />
      <br />
      <br />
      <Slider />
      <ProductItems />
      <Intro />
      <Categories />
      <Branding />
      <Footer1/>
    </div>
  );
}


