'use client'

import { panels } from '@/data/data'
import { Manrope } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import LoginUser from '../../public/assets/login-user.svg'
import Logo from '../../public/assets/skydd-logo.svg'

const manrope = Manrope({ subsets: ['latin'] })

const Sidebar = ({ children }) => {
  const [isActive, setIsActive] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [index, setIndex] = useState(0)

  const setActivePanel = (panelIndex) => {
    setActiveIndex(panelIndex);
    setIsActive(true);
  };

  const activePanelStyle = (panelIndex) =>
    panelIndex === activeIndex ? 'text-white bg-[#000]' : 'text-gray-600 bg-transparent';

  const activeIconStyle = (panelIndex) =>
    panelIndex === activeIndex ? 'bg-[#000] text-white' : 'bg-transparent';

  return (
    <section className={`flex ${manrope.className}`}>
      <div className='fixed hidden sm:block w-64 h-full p-8 bg-[#F9F9F9]'>
        <div className='flex flex-col justify-between h-full'>
          <div>
            <Link href="/" className='flex justify-center items-center gap-2 my-7 border-b pb-8'>
              <Image
                src={Logo}
                width={50}
                height={50}
                alt="Logo"
              />
              <span>Skydd</span>
            </Link>
            <div className='flex flex-col gap-6'>
              {panels?.map((panelItem, panelIndex) => (
                <Link href={`/${panelItem.url}`} key={panelIndex}>
                  <div
                    className={`flex gap-2 items-center cursor-pointer py-1.5 px-2.5 rounded-full ${activePanelStyle(panelIndex)}`}
                    onClick={() => setActivePanel(panelIndex)}
                  >
                    <Image
                      src={panelIndex === activeIndex ? panelItem.iconActive : panelItem.iconNotActive}
                      width={25}
                      height={25}
                      alt='Dashboard Logo Link'
                      className={activeIconStyle(panelIndex)}
                    />
                    <span className='text-md'>{panelItem.text}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center gap-6">
            <div className='flex flex-col items-center'>
              <Image
                src={LoginUser}
                width={60}
                height={60}
                alt='Login User'
                className='object-cover'
              />
              <h4 className='text-gray-900 font-semibold'>Chituru Nsirim</h4>
              <p className='text-sm text-gray-600'>chituru.nsirim@sterling.ng</p>
            </div>
            <div className="text-red-500 cursor-pointer">Logout</div>
          </div>
        </div>
      </div>
      <main className='sm:ml-64 w-full ml-0'>
        {children}
      </main>
    </section>
  )
}

export default Sidebar