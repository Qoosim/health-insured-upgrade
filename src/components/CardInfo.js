import React from 'react';
import Image from 'next/image';
import CardIcon from '../../public/assets/card-icon.svg';

const CardInfo = ({ cardInfo }) => {
  return (
    <article className='bg-[#eee] w-full sm:w-[32%] p-4 md:p-6 rounded-md flex flex-col md:flex-row justify-between sm:flex-grow'>
      <div className="flex flex-col gap-4">
        <Image src={CardIcon} width={32} height={32} alt='Card Icon' />
        <h3 className='text-2xl text-[#1AA3A1] font-semibold'>{cardInfo.currency}</h3>
        <span className='text-md text-[#1E1E1E]'>{cardInfo.agent}</span>
      </div>
      <div className='text-xs text-[#737476]'>{cardInfo.date}</div>
    </article>
  );
};

export default CardInfo;
