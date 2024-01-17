import { paymentHeader, paymentData } from "@/data/data"
import { shorten } from "./helper/shorten"

const Payment = () => {
  return (
    <div>
      <table className='table-fixed my-5 border-separate border-spacing-y-2 border-spacing-x-0.5'>
        <thead className='mb-4'>
          <tr className='text-xs'>
            {paymentHeader?.map((item, index) => (
              <th scope='col' key={index} className='p-2 !w-1/2 shrink-0 border border-gray-600 mx-1 min-w-40'>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody className='mt-8'>
          {paymentData?.map((item, index) => {
            return (
              <>
                <tr key={index}>
                  {Object.entries(item).map(([property, value]) => (
                    <td key={property} className='text-clip overflow-x-hidden whitespace-nowrap border border-gray-400 text-center font-light py-1.5 text-[#333] text-sm'>{value.length > 12 ? shorten(value) : value}</td>
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
