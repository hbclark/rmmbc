"use client"
import {NavBar, Footer, PriceCard} from "../../components";
import {motion} from "framer-motion";
import Image from "next/image";


export default function MemberShip() {
   
    
    
    const MotionPriceCard = motion(PriceCard);
    
    const fadeInAnimationVariants=  {
        initial:{opacity:0,y:20},
        animate:(index) => ({opacity:1,y:0,transition:{delay:index*0.1}}),
    }

    
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
   <div>
   <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h2 className="text-2xl font-semibold">Why Choose RWMBC?</h2>
                            <p className="mt-4">
                                Are you concerned about finding interesting places to ride? RWMBC is your regional lobby group ensuring access to trails and developing. Support the club that supports you.
                            </p>
                            <p className="mt-4">
                                Are you looking for someone to ride with? The club is family-friendly and offers a variety of competitive and social activities for riders of all ages and abilities. Being part of RWMBC is a great way to meet fellow riders, explore the trails, and improve your riding skills.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold">Membership Benefits</h2>
                            <p className="mt-4">
                                If you&apos;re wearing gloves and a helmet, you&apos;ve got 2 essentials covered. The third coverage you should consider is insurance. Your membership automatically enrols you as a member of MTBA, which covers your insurance when you&rsquo;re involved in organised events such as races and social rides. It also provides some cover at all times on the bike.
                            </p>
                            <p className="mt-4">
                                It can be an expensive hobby. Of course, you&apos;ll save a lot of money on day licences by becoming a member. In addition, most specialist bike shops in the Nowendoc region will give a 5% to 10% discount on parts to RWMBC members on presentation of their rider&rsquo;s licence.
                            </p>
                        </div>
                    </div>
                </div>
   <div className="flex flex-col  justify-center  items-center h-lvh w-full bg-[url('/images/shots/bike05.jpg')] bg-center bg-cover bg-no-repeat bg-fixed text-white text-left">
    <h1 className="uppercase text-3xl mb-4">ROck Wallaby</h1>
    <p className="mb-2">Are you concerned about finding interesting places to ride?</p>
    <button className="mx-auto w-max mb-4 bg-goldenYellow-500 px-2 py-2 rounded-md hover:text-goldenYellow-500 hover:bg-transparent hover:outline hover:outline-1 hover:outline-goldenYellow-500">Learn More</button>
    
   </div>

    <div className="flex justify-center flex-row items-center h-60 bg-red-700 p-10" >
        <h3 className="flex  text-7xl font-semibold text-white text-center"
        
        
        >$0 Join Fee</h3>
       

        
    </div>
    <h1 className="text-4xl font-bold text-center my-10">Membership Options</h1>
    <div className="grid my-20 px-0 gap-10 lg:px-60 sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3">
      

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
    <div className="flex  px-10 flex-col  justify-center items-center xl:flex-row lg:flex-row bg-red-700  text-white">
        <div className="py-20 px-2 lg:px-20 flex-1">
            <h3 className="text-2xl font-bold mb-3">Join Rock Bike {new Date().getFullYear()}!</h3>
            <p className="mb-4">Ready for an adrenaline-pumping adventure? Gear up for the ultimate rock biking experience at the Rock Bike Rally {new Date().getFullYear()}! </p>
            
            <button className=" px-4 py-2 rounded-xl border border-white font-semibold
            hover:border-none hover:bg-white hover:text-red-700 transition-colors duration-300 ease-in-out
            ">Register Now</button>
        </div>
        <Image src="/images/shots/bike09-fixed.png" alt="hero"  width={700} height={400} className="object-cover"/>
        

    </div>



    </div>
   
    </>

  )
}
