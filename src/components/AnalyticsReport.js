'use client'

import { menuList } from '@/data/data';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import AnalyticsNotActive from '../../public/assets/analytics-not-active.svg';
import ArrowDown from '../../public/assets/arrow-down.svg';
import CloseBtn from '../../public/assets/btn.png';
import DashboardNotActive from '../../public/assets/dashboard-not-active.svg';
import ExportIcon from '../../public/assets/export-icon.svg';
import FilterImage from '../../public/assets/filter-list.svg';
import HamburgerIcon from '../../public/assets/hamburger_icon.png';
import ActiveEnrollees from './ActiveEnrollees';
import SelectedItem from './SelectedItem';


const AnalyticsReport = () => {
  const [selected, setSelected] = useState(undefined);
  const [open, setOpen] = useState(false);
  const [isActive, setIsActive] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const activeItemStyle = isActive ? "text-custom-white" : "text-custom-left-panel";

  const item = selected ? (
    <SelectedItem selected={selected} />
  ) : (
    <h4 className="lg:text-md text-xs md:text-sm">All time</h4>
  );

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  return (
    <main className='py-8'>
      <div className='flex justify-between items-center'>
        <h1 className='border-b w-full pb-6 pl-6 sm:pl-10 text-2xl font-semibold'>Report</h1>
        <div className="flex justify-end p-4">
          {isMenuOpen ? (
            <Image
              src={CloseBtn}
              width={40}
              height={40}
              alt='Close Icon'
              className='sm:hidden absolute top-7 right-6 text-slate-300 z-50'
              onClick={toggleMenu}
            />
          ) : (
            <Image
              src={HamburgerIcon}
              width={30}
              height={30}
              alt='Hamburger Icon'
              className='sm:hidden absolute top-7 right-6'
              onClick={toggleMenu}
            />
          )}
        </div>
      </div>
      {isMenuOpen && (
        <nav className='fixed inset-0 bg-gray-900 bg-opacity-85 z-40'>
          <ul className={`${isMenuOpen ? "flex flex-col mt-24 ml-8 gap-5 h-screen" : "hidden"}`}>
            <li>
              <Link href="/dashboard">
                <div className="flex gap-2 items-center">
                  <span className='text-2xl text-slate-300 font-semibold'>Dashboard</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/analytics">
                <div className="flex gap-2 items-center">
                  <span className='text-2xl text-slate-300 font-semibold'>Analytics & Report</span>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      )}
      <section className="flex flex-col md:flex-row justify-between items-center px-4 md:px-10 py-6">
        <h3 className='text-xl font-semibold mb-4 md:mb-0'>Active Enrollees</h3>
        <div className="flex flex-col md:flex-row items-center gap-4 relative">
          <div className="flex items-center gap-2">
            <Image src={FilterImage} width={20} height={20} alt='Filter' />
            <span>Filter by: </span>
          </div>
          <div className='relative'>
            <button
              className="flex w-full gap-5 items-center justify-between bg-[#eee] py-3 px-4"
              type="button"
              onClick={() => setOpen(!open)}
            >
              {item}
              <Image src={ArrowDown} alt="Dropdown Icon" />
            </button>
            <ul className={`${open ? "block absolute top-full left-0" : "hidden"}`}>
              {menuList.map((menuItem) => (
                <li key={menuItem.text}>
                  <button
                    type="button"
                    onClick={() => {
                      setSelected(menuItem);
                      setOpen(false);
                    }}
                  >
                    <span className="text-xs px-4">{menuItem.text}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <button
              className="flex w-full items-center justify-between bg-[#eee] py-3 px-4 gap-2"
              type="button"
            >
              <Image
                src={ExportIcon}
                width={20}
                height={20}
                alt='Download Icon'
              />
              <span>Export/Download</span>
            </button>
          </div>
        </div>
      </section>
      <section className='px-4 md:px-10'>
        <div>
          <ul className='flex gap-6'>
            <li
              className='bg-[#1AA3A10D] px-5 py-2 rounded-3xl cursor-pointer active:outline active:outline-1 active:outline-green-500 flex justify-center items-center'
            >
              Active Enrollees
            </li>
            <li
              className='bg-[#1AA3A10D] px-5 py-2 rounded-3xl cursor-pointer active:outline active:outline-1 active:outline-green-500 flex justify-center items-center'
            >
              Inactive Enrollees
            </li>
            <li
              className='bg-[#1AA3A10D] px-5 py-2 rounded-3xl cursor-pointer active:outline active:outline-1 active:outline-green-500 flex justify-center items-center'
            >
              Corporates
            </li>
            <li
              className='bg-[#1AA3A10D] px-5 py-2 rounded-3xl cursor-pointer active:outline active:outline-1 active:outline-green-500 flex justify-center items-center'
            >
              Family
            </li>
            <li
              className='bg-[#1AA3A10D] px-5 py-2 rounded-3xl cursor-pointer active:outline active:outline-1 active:outline-green-500 flex justify-center items-center'
            >
              Agency
            </li>
            <li
              className='bg-[#1AA3A10D] px-5 py-2 rounded-3xl cursor-pointer active:outline active:outline-1 active:outline-green-500 flex justify-center items-center'
            >
              Payment
            </li>
          </ul>
        </div>
        <ActiveEnrollees />
      </section>
    </main>
  );
};

export default AnalyticsReport
