import React from 'react'

const OrderDisplayTable = ({order}) => {
  return (
    <table className="w-full border border-gray-300 ">
      <thead className="text-center bg-primary ">
        <tr className="text-white">
          <th className="text-sm font-semibold py-2">Name</th>
          <th className="text-sm font-semibold py-2">Qty</th>
          <th className="text-sm font-semibold py-2">Price</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(order.attributes.details.details).map(([key, value]) => (
          <tr className="text-center border-b border-gray-200" key={key}>
            <td className="text-center text-sm">{key}</td>
            <td className="text-center text-sm">{value.qty}</td>
            <td className="text-center text-sm">{value.price}</td>
          </tr>
        ))}
        <tr className="text-center ">
          <td className="font-semibold">Subtotal</td>
          <td></td>
          <td className="font-semibold">{order.attributes.details.total}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default OrderDisplayTable