import React, { Fragment, useState } from 'react'
import Menu from '../components/Menu';

const MenuTable = () => {
  const [orderData, setOrderData] = useState({});

  const onAdd = (item)=>{
    if(orderData.item){
      setOrderData(prev=> ({...prev, [item] : orderData.item + 1}))
    }else{
      setOrderData((prev) => ({ ...prev, [item]: 1 }));

    }
  }

  return (
    <Fragment>
      <Menu onAdd={onAdd} orderData={orderData} />
    </Fragment>
  )
}

export default MenuTable