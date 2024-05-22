"use client"
import Image from "next/image";
import Carousel from "@/components/Carousel";
import {NavBar,MemberShip,Footer,Events,Gallery,Contact, News,Counters} from "@/components";
import CounterItem from "@/components/CounterItem";


export default function Home() {
  return (
   <>
   <div id="home" className="w-full h-screen">
    <NavBar />
   <Carousel />
  <Counters />
   <id id="news"/>
   <News />
   <id id="events"/>
   <Events />
   <id id="about"/>
   <MemberShip />
   
   {/* <div id="gallery" />
   <Gallery /> */}
   <div id="contact" />
   <Contact />  
   <Footer />
   </div>
   
   </>
  );
}
