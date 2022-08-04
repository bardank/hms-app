import React, {Fragment} from 'react'

const OrderTable = ({data, ...props}) => {
  return (
    <Fragment>
      {data &&
        data.orders.data.length > 0 &&
        data.orders.data.map((orderItem, i) => (
          <li className="pb-6" key={orderItem.id}>
            <div>
              <h4 className="text-center font-semibold">order id: {orderItem.id}</h4>
            </div>
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
                  {Object.entries(orderItem.attributes.details.details).map(
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
                      {orderItem.attributes.details.total}
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