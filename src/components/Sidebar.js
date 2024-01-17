'use client'

import { Manrope } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import AnalyticsNotActive from '../../public/assets/analytics-not-active.svg'
import DashboardNotActive from '../../public/assets/dashboard-not-active.svg'
import LoginUser from '../../public/assets/login-user.svg'
import Logo from '../../public/assets/skydd-logo.svg'

const manrope = Manrope({ subsets: ['latin'] })

const Sidebar = ({ children }) => {
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
              <Link href="/dashboard">
                <div className="flex gap-2 items-center">
                  <Image
                    src={DashboardNotActive}
                    width={30}
                    height={30}
                    alt='Dashboard Logo Link'
                    className='text-[#4C5360] bg-transparent'
                  />
                  <span className='text-md'>Dashboard</span>
                </div>
              </Link>
              <Link href="/analytics">
                <div className="flex gap-2 items-center">
                  <Image
                    src={AnalyticsNotActive}
                    width={30}
                    height={30}
                    alt='Analytics Logo Link'
                  />
                  <span className='text-md'>Analytics & Report</span>
                </div>
              </Link>
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