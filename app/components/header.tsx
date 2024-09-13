import Image from "next/image";
import menu from '../../public/icon-hamburger.svg';
import close from '../../public/icon-close.svg';
import logo from '../../public/logo.svg';
import MobileHeader from "./mobileHeader";
//import twitter from '../../public/icon-twitter.svg';
//import facebook from '../../public/icon-facebook.svg';

export default function Header() {
      return (
      <header className="flex flex-col pb-40 bg-center bg-hero-pattern rounded-bl-[8rem] md:p-0 md:px-[5%] px-4 text-white mb-12">
        <nav className="flex items-center  gap-12 md:mb-40 mb-24 pt-12">
            <a className=""><Image src={logo} alt="logo" /></a>
            <a className="idden md:block">Product</a>
            <a className="hidden md:block">Company</a>
            <a className="hidden md:block">Connect</a>
            <button className=" p-1 text-white font-bold hidden md:block ml-[auto] hover:bg-red-300 rounded-full px-8 py-2">Login</button>
            <button className=" p-1 text-white font-bold hidden md:block hover:bg-red-300 rounded-full px-8 py-2">Sign Up</button>
            <button className="ml-auto md:hidden peer"><Image src={menu} width={20} height={150} alt="menu"></Image></button>
            <MobileHeader />
          </nav>
          <div className="text-center">
            <h2 className="text-5xl mb-8">A modern publishing platform</h2>
            <p className="mb-8">Grow your audience and build your online brand</p>
            <div className="flex justify-center mb-28 gap-8">
              <button className="p-1 text-white font-bold bg-white text-red-400 hover:bg-red-300 hover:border-none rounded-full border-white border-2 px-8 py-2 active:bg-white active:text-red-400">Start for Free</button>
              <button className="p-1 text-white font-bold hover:bg-red-300 rounded-full border-white border-2 px-8 py-2 active:bg-white active:text-red-400">Learn More</button>
            </div>
          </div>
      </header>
      )
}