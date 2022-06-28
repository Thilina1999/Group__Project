import React from "react";
import img1 from '../assets/titlebox.png';
import img2 from '../assets/HeroC.png';
import img3 from '../assets/HeroD.png';
import img4 from '../assets/HeroE.png';
import img5 from '../assets/HeroF.png';
import Announcement from "../Announcement/announcement"
import Navbar1 from "../navbarNew/navbarNew";
import Footer1 from "../footerNew/footerNew";
import MotionPage from "../motion/motionPage";


function Buyer() {
  return (
    <>
      <MotionPage>
        <Announcement />
        <Navbar1 />
        <br />
        <br />
        <br />
        <br />
        <div className="App">
          <img src={img1} className="Title-Box" alt="Tilte" />
          <img src={img2} className="Second-Box" alt="Second" />
          <img src={img3} className="Third-Box" alt="Third" />
          <img src={img4} className="Fourth-Box" alt="Fourth" />
          <img src={img5} className="Fifth-Box" alt="Fifith" />
        </div>
        <br />
        <Footer1 />
      </MotionPage>
    </>
  );
}

export default Buyer;
