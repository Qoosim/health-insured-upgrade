import Image from 'next/image';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ArrowDown from '../../public/assets/arrow-down.svg';

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = date => {
    setStartDate(date);
  };

  const handleEndDateChange = date => {
    setEndDate(date);
  };

  return (
    <div className='flex'>
      <div className="flex items-center">
        <label className='text-md text-[#737476] mr-3'>From:</label>
        <div className="relative flex items-center">
          <DatePicker
            selected={startDate}
            onChange={handleStartDateChange}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            placeholderText="dd/mm/yyyy"
            className='w-[90%] p-1 border border-1 focus:outline-none rounded-md placeholder:pl-2'
          />
          <Image
            src={ArrowDown}
            width={25}
            height={25}
            alt='Arrow Down'
            className='absolute right-0 mr-6'
          />
        </div>
      </div>
      <div className="flex items-center">
        <label className='text-md text-[#737476] mr-3'>To:</label>
        <div className="relative flex items-center">
          <DatePicker
            selected={endDate}
            onChange={handleEndDateChange}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            placeholderText="dd/mm/yyyy"
            minDate={startDate}
            className='w-[90%] p-1 border border-1 focus:outline-none rounded-md placeholder:pl-2'
          />
          <Image
            src={ArrowDown}
            width={25}
            height={25}
            alt='Arrow Down'
            className='absolute right-0 mr-6'
          />
        </div>
      </div>
    </div>
  );
};

export default DateRangePicker;
