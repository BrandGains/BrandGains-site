"use client";
import Image from 'next/image'
import Navbar from '../components/Navbar'
import HeroSection from '../components/Hero'
import AboutBrand from '../components/AboutBrand'
import Services from '../components/Services'
import Wizards from '../components/Wizards'
import ScheduleCall from '../components/ScheduleCall'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
    <div className="bg-gradient-to-r from-fuchsia-50 to-sky-50">
      <Navbar />
      <HeroSection/>
      <AboutBrand/>
      <Services/>
      <Wizards/>
      <ScheduleCall/>
      <Footer/>
    </div>
    </>
  )
}