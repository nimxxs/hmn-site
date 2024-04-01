import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/product/${item.id}`);
  }
  return (
    <div className='card-area' onClick={goToDetail}>
        <img width={300} src={item?.img} className='card-area' id='card-img'/>
        <div>{item?.choice == true ? "Conscious Choice" : ""}</div>
        <div>{item?.title}</div>
        <div>₩{item?.price}</div>
        <div>{item?.new == true ? "신제품" : ""}</div>
    </div>
  )
}

export default ProductCard