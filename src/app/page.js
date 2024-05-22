"use client"
import Image from "next/image";
import Carousel from "@/components/Carousel";
import {NavBar,MemberShip,Footer,Events,Gallery,Contact} from "@/components";


export default function Home() {
  return (
   <>
   <div className="w-full h-screen">
    <NavBar />
   <Carousel />
   <id id="about"/>
   <MemberShip />
   <Events />
   <div id="gallery" />
   <Gallery />
   <div id="contact" />
   <Contact />  
   <Footer />
   </div>
   
   </>
  );
}
