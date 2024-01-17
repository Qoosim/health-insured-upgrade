// import React from 'react'
// import Image from 'next/image'
// import CardIcon from '../../public/assets/card-icon.svg'

// const CardInfo = ({ cardInfo }) => {
//   return (
//     <article className='bg-[#eee] w-[20.1rem] p-10 rounded-md flex justify-between'>
//       <div>
//         <Image
//           src={CardIcon} 
//           width={30}
//           height={30}
//           alt='Card Icon'
//         />
//         <h3>{cardInfo.currency}</h3>
//         <span>{cardInfo.agent}</span>
//       </div>
//       <div>{cardInfo.date}</div>
//     </article>
//   )
// }

// export default CardInfo

// import React from 'react';
// import Image from 'next/image';
// import CardIcon from '../../public/assets/card-icon.svg';

// const CardInfo = ({ cardInfo }) => {
//   return (
//     <article className='bg-[#eee] flex-grow p-4 md:p-10 rounded-md flex flex-col md:flex-row justify-between'>
//       <div className="mb-4 md:mb-0">
//         <Image src={CardIcon} width={30} height={30} alt='Card Icon' />
//         <h3>{cardInfo.currency}</h3>
//         <span>{cardInfo.agent}</span>
//       </div>
//       <div>{cardInfo.date}</div>
//     </article>
//   );
// };

// export default CardInfo;

import React from 'react';
import Image from 'next/image';
import CardIcon from '../../public/assets/card-icon.svg';

const CardInfo = ({ cardInfo }) => {
  return (
    <article className='bg-[#eee] w-full sm:w-[32%] p-4 md:p-6 rounded-md flex flex-col md:flex-row justify-between'>
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
