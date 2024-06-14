"use client"
import Image from "next/image";
import Carousel from "@/components/Carousel";
import {NavBar,MemberShip,Footer,Events,Gallery,Contact, News,Counters,ChatBox} from "@/components";
import CounterItem from "@/components/CounterItem";


export default function Home() {
  return (
   <>
   <div id="home" className="w-full h-screen">
    <NavBar />
   <Carousel />
  <Counters />
   <div id="news">
   <News />
   </div>
   <div id="events">
   <Events />
   </div>
   <div id="about">
   <MemberShip />
   </div>
   {/* <div id="gallery" />
   <Gallery /> */}
   <div id="contact" />
   <Contact />  
<ChatBox />
   <Footer />
   </div>
   
   </>
  );
}
