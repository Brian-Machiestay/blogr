import Image from "next/image"
import close from '../../public/icon-close.svg';


export default function MobileHeader() {
      return (
            <div className="fixed bg-blue-950 left-0 top-0 min-h-full w-full opacity-95 px-[5%] flex flex-col hidden peer-focus:flex">
            <div className="flex justify-between py-4">
              <a className="text-white text-2xl font-bold p-4">Logo</a>
              <button><Image src={close} alt="close" /></button>
            </div>
            <div className="flex flex-col text-white justify-center items-center *:border-t *:border-gray-700 mb-8">
              <a className="w-full text-center py-4">FEATURES</a>
              <a className="w-full text-center py-4">PRICING</a>
              <a className="w-full text-center py-4 border-b">CONTACT</a>
            </div>
            <button className="w-full border-2 p-1 px-4 text-white rounded font-bold p-2">LOGIN</button>
            <div className='md:ml-auto flex gap-8 items-center mt-auto justify-center my-8'>
            </div>
          </div>
      )
}