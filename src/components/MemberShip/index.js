"use client"
import {NavBar, Footer, PriceCard} from "../../components";
import {animate,motion,useScroll,useTransform} from "framer-motion";
import Image from "next/image";


export default function MemberShip() {
    const {scrollY} = useScroll();
    const yText = useTransform(scrollY,[0,50,100],[1,1.3,1.4,])
    const opacityText = useTransform(scrollY,[0,200,300],[1,1,1])
    const MotionPriceCard = motion(PriceCard);
    

    
    const members = [
    {
        id:1,
    
      memberType: "Senior competition",
      borderColor: "border-yellow-400",
      ageRestriction: "Ages 18+",
      clubRestriction: "Home Club",
      memberPrice: "120",
    },
    {
        id:2,
      memberType: "Junior competition ",
      borderColor: "border-blue-400",
      ageRestriction: "Ages 13 -18yo",
      clubRestriction: "All Clubs",
      memberPrice: "80",
    },
    {
        id:3,
      memberType: "DirtMaster competition",
      borderColor: "border-yellow-400",
      ageRestriction: "Ages 3-12yo",
      clubRestriction: "All Clubs",
      memberPrice: "40",
    },
    {
        id:4,
      memberType: "Social / non race",
      borderColor: "border-red-800",
      ageRestriction: "Ages 18+",
      clubRestriction: "All Clubs",
      memberPrice: "55",
    },
    {
        id:5,
      memberType: "CA / BMXA value add option",
      borderColor: "border-red-800",
      ageRestriction: "Ages 18+",
      clubRestriction: "All Clubs",
      memberPrice: "70",
    },
    {
        id:6,
      memberType: "Permit rebate scheme (PRS) Senior",
      borderColor: "border-red-800",
      ageRestriction: "Ages 18+",
      clubRestriction: "All Clubs",
      memberPrice: "90",
    },
    {
        id:7,
      memberType: "Permit rebate scheme (PRS) Junior",
      borderColor: "border-red-800",
      ageRestriction: "Ages 18+",
      clubRestriction: "All Clubs",
      memberPrice: "50",
    },
    {
        id:8,
      memberType: "RWMBC membership only",
      borderColor: "border-red-800",
      ageRestriction: "Ages 18+",
      clubRestriction: "All Clubs",
      memberPrice: "25",
    },
    ]
  return (
    <>
   {/* About Us */}
   <div className="flex flex-row xl:flex-col justify-center  items-center h-1/2 w-full bg-[url('/images/shots/bike05.jpg')] bg-center bg-cover bg-no-repeat bg-fixed text-white text-left">
    <h1 className="uppercase text-3xl">ROck Wallaby</h1>
    <p>Are you concerned about finding interesting places to ride?</p>
    <button>Learn More</button>
    
   </div>

    <div className="flex justify-center flex-row items-center h-60 bg-red-700 p-10" >
        <motion.h1 className="flex  text-7xl font-semibold text-white text-center"
        
        initial={{scale:1,opacity:1}}
            style={{scale:yText,opacity:opacityText}}
            transition={{opacity:{ease: "easeInOut",duration:0.5},scaleY:{ease: "easeInOut",duration:0.5}}}
        >$0 Join Fee</motion.h1>
       

        
    </div>
    <h1 className="text-4xl font-bold text-center my-10">Membership Options</h1>
    <div className="grid my-20 px-0 gap-10 lg:px-60 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
      

        {members.map((member, index) => (
            <MotionPriceCard
            key={member.id}
            memberType={member.memberType}
            borderColor={member.borderColor}
            ageRestriction={member.ageRestriction}
            clubRestriction={member.clubRestriction}
            memberPrice={member.memberPrice}
            
            
           
            

          />
        ))}
    </div>
    <div className="flex  px-10 flex-col justify-center items-center xl:flex-row lg:flex-row bg-red-700  text-white">
        <div className="py-20 px-2 lg:px-96  flex-1">
            <h3 className="text-2xl font-bold mb-3">Join Rock Bike {new Date().getFullYear()}!</h3>
            <p className="mb-4">Ready for an adrenaline-pumping adventure? Gear up for the ultimate rock biking experience at the Rock Bike Rally {new Date().getFullYear()}! </p>
            
            <button className=" px-4 py-2 rounded-xl border border-white font-semibold
            hover:border-none hover:bg-white hover:text-red-700 transition-colors duration-300 ease-in-out
            ">Register Now</button>
        </div>
        <Image src="/images/shots/bike09-fixed.png" alt="hero"  width={700} height={400} className="object-cover"/>
        

    </div>



    
   
    </>

  )
}
