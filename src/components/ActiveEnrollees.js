import { tableHeader } from '@/data/data';
import { tableInfo } from '@/data/data';

const ActiveEnrollees = () => {
  return (
    <div>
      <table className='table-auto my-5'>
        <thead className='max-w-full'>
          <tr className='text-xs'>
            {tableHeader?.map((item, index) => (
              <th key={index} className='w-24 p-2 border border-gray-600 mx-2'>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
             {tableInfo.map((item) => {
              <th>{item}</th>
             })} 
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ActiveEnrollees