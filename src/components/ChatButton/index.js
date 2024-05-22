"use client"
import Link from 'next/link';
import {useState} from 'react';
import { IoIosArrowRoundUp } from "react-icons/io";
import { MdOutlineMinimize } from "react-icons/md";

export default function ChatButton() {
    const [isChatBoxOpen,setIsChatBoxOpen] = useState(false);
  return (
    <div className="fixed  bottom-10  right-10 ">
        <Link href="/#home">
        <IoIosArrowRoundUp className="w-10 h-10 rounded-full border border-goldenYellow-600" />
        </Link>
    </div>
  )
}
