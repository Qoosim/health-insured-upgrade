import { paymentData, paymentHeader } from "@/data/data";
import { shorten } from "./helper/shorten";

const Payment = () => {
  return (
    <div>
      <table className='table-fixed my-5 border-separate border-spacing-y-2 border-spacing-x-0.5 overflow-x'>
        <thead className='mb-4'>
          <tr className='text-xs'>
            {paymentHeader?.map((item, index) => (
              <th scope='col' key={index} className='p-2 !w-1/2 shrink-0 border border-gray-600 mx-1 min-w-40'>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody className='mt-8'>
          {paymentData?.map((item, index) => {
            const lastKeyValuePair = Object.entries(item)[Object.entries(item).length - 1];
            return (
              <>
                <tr key={index}>
                  {Object.entries(item).map(([property, value]) => (
                    <td key={property} className={`text-clip overflow-x-hidden whitespace-nowrap border border-gray-400 text-center font-light py-1.5 text-sm ${value === lastKeyValuePair[1] ? 'text-green-500' : 'text-[#333]'}`}>{value.length > 12 ? shorten(value) : value}</td>
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

export default Payment
