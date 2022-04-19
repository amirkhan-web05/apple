import React from 'react'
import { TypeItemsList } from '../../types'
import { CartItems } from '../CartItems/CartItems'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const CartList:React.FC<TypeItemsList> = ({items, setPopup, popup, onAdd}) => {
  console.log(items);
  
  
  return (
    <div className='d-flex flex-wrap p-2 mb-5'>
      {items && items.map((item) => (
        <CartItems key={item.id} {...item} onAdd={onAdd} setPopup={setPopup} popup={popup}/>
      ))}
    </div>
  )
}
