"use client"    
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa";
import {useFormState} from "react-dom"
import { motion } from 'framer-motion';
import signUp from "@/app/api/email/signup"



export default function Footer() {
    const [state,formAction ] = useFormState(signUp,{});
  return (
    <footer className=" pt-10 border-t-8 border-goldenYellow-600  pl-4 lg:pl-0  ">
        <div className="lg:px-40 pb-10 lg:pb-2 ">
        <div className="flex sm:flex-row flex-col justify-between   ">
            <section className="mb-4">
                <Image src="/images/shots/icon.jpg" alt="A2Z Logo" width={60} height={60} className="font-bold mb-1 cursor-pointer hover:opacity-80 hover:-translate-y-[2px] transition-transform"/>
                <p className="pb-3 text-xl">Let&apos;s create a green world together!</p>
                <ul className="flex justify-start gap-3">
                    <li>
                        <Link href="https://www.facebook.com " >
                            <Image src="/images/social_media_icons/iconfinder_1_Facebook_colored_svg_5296499.png" alt="Facebook" width={30} height={30}
                            className="hover:opacity-80 hover:-translate-y-[2px] transition-transform" />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.instagram.com" >
                            <Image src="/images/social_media_icons/iconfinder_1_Instagram_colored_svg_1_5296765.png" alt="Instagram" width={30} height={30}
                             className="hover:opacity-80 hover:-translate-y-[2px] transition-transform" />
                        </Link>
                        </li>
                    <li>
                        <Link href="https://www.twitter.com" >
                            <Image src="/images/social_media_icons/iconfinder_1_Twitter_colored_svg_5296514.png" alt="Twitter" width={30} height={30} 
                             className="hover:opacity-80 hover:-translate-y-[2px] transition-transform"/>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.youtube.com" >
                            <Image src="/images/social_media_icons/iconfinder_1_Youtube_colored_svg_5296521.png" alt="Linkedin" width={30} height={30} 
                             className="hover:opacity-80 hover:-translate-y-[2px] transition-transform"/>
                        </Link>
                    </li>
                </ul>

                
            </section>
            <section className="mb-3 lg:mb-0">
                <h2 className="text-xl border-goldenYellow-400 border-b-2 mb-2 ">Quick Links</h2>
                <ul>
                    <motion.li className="flex py-1 text-gray-800 hover:text-gray-600 hover:underline "
                    initial={{ x: -20, opacity: 0 }}  whileInView={{x:0, opacity: 1}} whileHover={{translateY:-2}}  transition={{duration: 0.2,ease: "easeInOut"}}
                    ><FaArrowRight className="mt-1 mr-1 "/><Link href="/">Home</Link></motion.li>
                    <motion.li className="flex py-1 text-gray-800 hover:text-gray-600 hover:underline whileHover={{translateY:-2}}"
                     initial={{ x: -20, opacity: 0 }}  whileInView={{x:0, opacity: 1}} whileHover={{translateY:-2}} transition={{duration: 0.2,ease: "easeInOut"}}><FaArrowRight className="mt-1 mr-1 "/><Link href="#">Purpose</Link></motion.li>
                    <motion.li className="flex py-1 text-gray-800 hover:text-gray-600 hover:underline "
                     initial={{ x: -20, opacity: 0 }}  whileInView={{x:0, opacity: 1}} whileHover={{translateY:-2}} transition={{duration: 0.2,ease: "easeInOut"}}><FaArrowRight className="mt-1 mr-1 "/><Link href="#">About Us</Link></motion.li>
                    <motion.li className="flex py-1 text-gray-800 hover:text-gray-600 hover:underline "
                     initial={{ x: -20, opacity: 0 }}  whileInView={{x:0, opacity: 1}} whileHover={{translateY:-2}} transition={{duration: 0.2,ease: "easeInOut"}}><FaArrowRight className="mt-1 mr-1 "/><Link href="#">Contact Us</Link></motion.li>
                </ul>
            </section>
            <section>
                <p className="mb-4 "><span className="border-b-2 border-goldenYellow-400 text-xl">Our NewsLetter</span></p>
                <form className="flex gap-2 w-max-full flex-row sm:flex-col" action={formAction}>
                    <div>
                    {state.error&&<p className="text-red-500">{state.error}</p>}
                    {state.message&&<p className="text-green-500">{state.message}</p>}
                    </div>
                    <div className="flex gap-2 sm:flex-row flex-col">
                    <label htmlFor="subscription" className="sr-only">subscription</label>
                    <input type="email" id="subscription" placeholder="Email" name="subscribeEmail" className="border-2 border-gray-300 px-2 py-1 rounded-md"/>
                    <label htmlFor="subscribe" className="sr-only">Subscribe</label>
                    <button id ="subscribe" className="bg-goldenYellow-700 text-white px-2 py-1 border-1 border-transparent rounded-md hover:text-goldenYellow-700 hover:outline-1 hover:outline hover:outline-goldenYellow-700 hover:bg-transparent transition-transform">Subscribe</button>
                    </div>
                </form>
            </section>
            <section></section>
        </div>
        </div>
        <div className="bg-gray-200">
        <div
        className="bg-gray-100 flex sm:flex-row flex-col justify-between lg:px-40 py-6 "
        >
            <p>Copyright &copy; {new Date().getFullYear()} A2Z ALl rights reserver</p>
            <ul className="flex sm:flex-row flex-col justify-between gap-4">
                <li className="text-gray-800 hover:text-gray-600 hover:underline hover:-translate-y-[2px] transition-transform"><Link href="#">Privacy Policy</Link></li>
                <li className="text-gray-800 hover:text-gray-600 hover:underline hover:-translate-y-[2px] transition-transform"><Link href="#">Terms and Conditions</Link></li>
            </ul>
        </div>
        </div>
        
    </footer>
  )
}
