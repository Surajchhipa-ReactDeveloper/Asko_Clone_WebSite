import React from "react";
import "./App.css"
import Navbar from "./Componants/Navbar/Navbar";
import Hero from "./Componants/HeroSecation/Hero";
import SliderColl from "./Componants/ACKQCustomers/SliderColl";
import HeroNextCall from "./Componants/HeroNext/IndexHero";
import WhyAcko from "./Componants/WhyAcko/WhyAcko";
import SlUp from "./Componants/SliderUpperTBS/SlUp";
import CompLogoCall from "./Componants/ComPLogo/CompLogoCall";
import ContactBar from "./Componants/ContactBar/ContactBar";
import Links_ItemCall from "./Componants/Links&Items/Links_Item_Call_Point/Links&ItemCall";
import PlayStore from "./Common/PlayStore/PlayStore";
import Footer from "./Componants/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <SlUp />
      <HeroNextCall />
      <SliderColl />
      <WhyAcko />
      <CompLogoCall />
      <div className="Hr" style={{ opacity: "50%" }}>
        <hr />
      </div>
      <ContactBar />
      <Links_ItemCall />
      <div className="Store">
        <PlayStore />
      </div>
      <Footer/> 
    </>
  );
};

export default App;
