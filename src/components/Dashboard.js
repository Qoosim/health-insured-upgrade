'use client'

import { menuList } from '@/data/data';
import Image from 'next/image';
import { useState } from 'react';
import ArrowDown from '../../public/assets/arrow-down.svg';
import FilterImage from '../../public/assets/filter-list.svg';
import SelectedItem from './SelectedItem';
import CardInfo from './CardInfo';
import { cardData } from '@/data/data';

const Dashboard = () => {
  const [selected, setSelected] = useState(undefined);
  const [open, setOpen] = useState(false);

  const item = selected ? (
    <SelectedItem selected={selected} />
  ) : (
    <h4 className="lg:text-md text-xs md:text-sm">All time</h4>
  );

  return (
    <main className='py-8'>
      <h1 className='border-b w-full pb-6 pl-10 text-2xl font-semibold'>Dashboard</h1>
      <section className="flex flex-col md:flex-row justify-between items-center px-4 md:px-10 py-6">
        <h3 className='text-xl font-semibold mb-4 md:mb-0'>An Overview</h3>
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
        </div>
      </section>
      <section className='px-4 md:px-10 flex flex-wrap flex-grow gap-5 max-w-7xl mx-auto md:w-[calc(33.33% - 2rem)]'>
        {cardData?.map((data) => (
          <CardInfo key={data.date} cardInfo={data} />
        ))}
      </section>
      <footer className='px-10 mt-40'>
        <p className='text-right text-[#AAACAE]'>Skydd Admin © 2023️. The data you are currently accessing is the exclusive property of Skydd/Sterling Bank.</p>
      </footer>
    </main>
  );
};

export default Dashboard;