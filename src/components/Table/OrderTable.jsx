import React, {Fragment} from 'react'

const OrderTable = ({data, ...props}) => {
  return (
    <Fragment>
        
      {(data && data.orders.data.length > 0) &&
        data.orders.data[0].attributes.details.map((item, i) => (
          <li className="pb-6" key={i}>
            {/* <div>
              <h4 className="text-center font-semibold">Order {i + 1}</h4>
            </div> */}
            <div className="w-full px-8">
              <table className="w-full border border-gray-300 ">
                <thead className="text-center bg-primary ">
                  <tr className="text-white">
                    <th className="text-sm font-semibold py-2">Name</th>
                    <th className="text-sm font-semibold py-2">Qty</th>
                    <th className="text-sm font-semibold py-2">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(item.details).map(
                    ([key, value]) => (
                      <tr
                        className="text-center border-b border-gray-200"
                        key={key}
                      >
                        <td className="text-sm">{key}</td>
                        <td className="text-center text-sm">{value.qty}</td>
                        <td className="text-center text-sm">{value.price}</td>
                      </tr>
                    )
                  )}
                  <tr className="text-center ">
                    <td className="font-semibold">Subtotal</td>
                    <td></td>
                    <td className="font-semibold">
                      {item.total}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </li>
        ))}
    </Fragment>
  );
}

export default OrderTable