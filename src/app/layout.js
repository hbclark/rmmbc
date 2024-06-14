import { Inter } from "next/font/google";

import "./globals.css";
import Footer from "@/components/Footer";
import ChatButton from "@/components/ChatButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RWMBC",
  description: "RWMBC is rock bike club",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
       
        
        {children}
        <ChatButton />
         </body>
    </html>
  );
}
