import React from 'react'

const ProductCard = ({item}) => {
  return (
    <div className='card-area'>
        <img width={300} src={item?.img} className='card-area'/>
        <div>{item?.choice == true ? "Conscious Choice" : ""}</div>
        <div>{item?.title}</div>
        <div>₩{item?.price}</div>
        <div>{item?.new == true ? "신제품" : ""}</div>
    </div>
  )
}

export default ProductCard