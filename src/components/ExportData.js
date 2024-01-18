import Image from 'next/image'
import CloseBtn from '../../public/assets/close-btn.png'
import DateRangePicker from './DateRangePicker'

const ExportData = ({closeModal }) => {
  return (
    <section className='max-w-xl mx-auto flex flex-col gap-6 bg-white shadow-xl rounded-lg border'>
      <div className='border-b-2'>
        <div className="relative p-7">
          <h1 className='text-xl text-gray-900 font-semibold text-center'>Export Data</h1>
          <Image
            src={CloseBtn}
            width={15}
            height={15}
            alt='Close Button'
            className='absolute right-7 inset-y-9 cursor-pointer'
            onClick={closeModal}
          />
        </div>
      </div>
      <div className='flex flex-col gap-9 p-7'>
        <div className=''>
          <h2 className='text-md font-semibold'>Select Data Query</h2>
          <p className='text-xs text-[#1E1E1E]'>Please select the data you want to export (Note: Data will be exported in .CSV format).</p>
        </div>
        <div className='flex items-center flex-wrap gap-6'>
          <div className="flex items-center gap-3">
            <input type="radio" className='size-5' name='timeRange' />
            <span className='text-sm'>Last 7 days</span>
          </div>
          <div className="flex items-center gap-3">
            <input type="radio" className='size-5' name='timeRange' />
            <span className='text-sm'>Last Month</span>
          </div>
          <div className="flex items-center gap-3">
            <input type="radio" className='size-5' name='timeRange' />
            <span className='text-sm'>Last 6 Month</span>
          </div>
          <div className="flex items-center gap-3">
            <input type="radio" className='size-5' name='timeRange' />
            <span className='text-sm'>Last One Year</span>
          </div>
          <div className="flex items-center gap-3">
            <input type="radio" className='size-5' name='timeRange' />
            <span className='text-sm'>Select Date Range</span>
          </div>
        </div>
        <div className='px-8'>
          <DateRangePicker />
        </div>
        <input
          type="button"
          value="Export"
          className='w-full bg-[#000] p-3 rounded-lg text-white font-semibold cursor-pointer my-6'
        />
      </div>
    </section>
  )
}

export default ExportData