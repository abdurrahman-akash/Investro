"use client";
import NavbarDemo from '@/components/NavDemo'
import { HeroSectionOne } from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import WeCareYou from '@/components/sections/WeCareYou'
import { ContactUs } from '@/components/sections/ContactUs'
import TracingBeamDemo from '@/components/tracing-beam-demo'
import React from 'react'
import { OurPartners } from '@/components/sections/OurParters';
import Footer from "@/components/Footer";

const Home = () => {
  
  return (
    <div >
    
      
      <NavbarDemo />
      
      <HeroSectionOne />

      <div className='mt-10 p-12'>
        <TracingBeamDemo />
        <OurPartners />
        <Services />
      </div>
      <div className='py-16'>
        <WeCareYou />
      </div>
      <div>
        <ContactUs />
      </div>
      <Footer />
    </div>
  )
}


export default Home
