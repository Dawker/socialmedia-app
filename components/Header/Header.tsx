import { SearchIcon, PlusCircleIcon, HeartIcon, PaperAirplaneIcon, MenuIcon, UserGroupIcon } from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'

import { IHeaderProps } from '../../typescript/components/header.types'
import { signIn, signOut } from 'next-auth/react'
import { useRecoilState } from 'recoil'
import { modal } from '../../atoms/modalAtom'


const Header: React.FC<IHeaderProps> = ({ profilePic }) => {
  const [isOpen, setIsOpen] = useRecoilState(modal);
  const router = useRouter()

  return (
    <nav className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-6xl mx-1 lg:mx-auto">

        {/* Left */}
        <div onClick={() => router.push("/")} className="relative hidden lg:inline-grid w-24 cursor-pointer">
          <img src="https://links.papareact.com/OCW" className="object-contain" />
        </div>
        <div onClick={() => router.push("/")} className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
          <img src="https://links.papareact.com/jjm" className="object-contain" />
        </div>

        {/* Middle - Search input field */}
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input className="bg-gray-50  
            sm:text-sm w-full pl-10 
            border-gray-300 focus:ring-black 
            focus:border-black rounded-md"
              type="text" placeholder="Search" />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon onClick={() => router.push("/")} className="navBtn" />
          <MenuIcon className="h-6 md:hidden cursor-pointer" />
          {profilePic ? (
            <>
              <div className="relative navBtn">
                <PaperAirplaneIcon className="navBtn rotate-45" />
                <div className="absolute -top-1 -right-3 text-xs w-5 h-5 bg-red-500 
            rounded-full flex items-center justify-center animate-pulse 
            text-white">3</div>
              </div>
              <PlusCircleIcon onClick={() => setIsOpen(true)} className="navBtn" />
              <UserGroupIcon className="navBtn" />
              <HeartIcon className="navBtn" />
              <img src={profilePic}
                onClick={() => signOut()}
                className="h-10 rounded-full cursor-pointer"
                alt="profile picture" />
            </>
          ) : (
            <button onClick={() => signIn()}>Sign In</button>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Header
