import { tableHeader, tableInfo } from '@/data/data';

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
          {tableInfo.map((item, index) => {
            return (
              <>
                <tr key={index}>
                  {Object.entries(item).map(([property, value]) => (
                    <td key={property}>{value}</td>
                  ))}
                </tr>
              </>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ActiveEnrollees