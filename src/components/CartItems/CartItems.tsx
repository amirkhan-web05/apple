import React from 'react'
import { TypeCartItems } from '../../types'
import Slider from "react-slick";
import styles from './CartItems.module.scss'
import 'swiper/css';
import { Link } from 'react-router-dom';

const tableItems:string[] = ['iPhone 13 Pro', 'iPhone 13', 'iPhone SE', 'iPhone 12', 'iPhone 11']

type TypeVoidOnAddHandlerCart = () => void

export const CartItems:React.FC<TypeCartItems> = ({id, name, price, btnItems, sliderPhotoMax, cartId, photo, images, table, count, popup, setPopup, onAdd, sliderPhoto}) => {
  const [activeItem, setActiveItem] = React.useState<number>(0)

  const changeActiveItem = (index:number):void => {
    setActiveItem(index)    
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const handlerChange = (popup:number | boolean):void => {
    setPopup!(popup)
  }

  const onAddHandlerCart:TypeVoidOnAddHandlerCart = ():void => {
    onAdd!({
      id:cartId ? cartId[activeItem] : id,
      name:btnItems ? btnItems![activeItem] : name,
      price,
      images,
      table,
      count,
      sliderPhoto,
      sliderPhotoMax
    })
    
    alert(`${btnItems ? btnItems![activeItem] : name}, added in cart`)
  }
  
  console.log(photo);
  

  return (
    <div>
        <div className={styles.card}>
          <div className={styles.card__info}>
            <span className={styles.card__new}>new</span>
            <h2>{name}</h2>
          </div>
          <img width={340} height={264} src={images} alt="" />
          <div className='p-3 d-flex align-items-center justify-content-between'>
            <p className='m-0'>From ${price} or $41.62/mo. for 24 mo.*</p>
            <button className={styles.card__btn} onClick={() => handlerChange(table!)}>Buy</button>
          </div>
        </div>
      
      <div>
        {table === popup ? (
          <div className={styles.popup}>
            <button onClick={() => handlerChange(false)} className={styles.popup__close}>&times;</button>
            <div className={styles.popup__table}>
              <div className={styles.popup__list}>
                {tableItems.map((item, index) => (
                  <span 
                    key={index}
                    onClick={() => handlerChange(index)} 
                    className={index === table ? styles.popup__active : styles.popup__item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.popup__inner}>
              {popup === table ? 
                <div className='d-flex justify-content-between'>
                  <div>
                  {btnItems ? <div>
                    {btnItems.map((btn, index) => (
                      <button key={index} onClick={() => changeActiveItem(index)} className={activeItem === index ? styles.popup__btn : styles.popup__trans}>{btn}</button>
                    ))}
                  </div> : ''}

                    {activeItem ? (
                      <Slider {...settings}>
                        <img src={photo[activeItem]} alt="" />
                        {sliderPhotoMax && sliderPhotoMax.map((item) => (
                          <div>
                            <img src={item} alt="" />
                          </div>
                        ))}
                      </Slider>
                    ) : (
                      <Slider {...settings} >
                        <img src={photo[activeItem]} alt="" />
                        {sliderPhoto && sliderPhoto.map((item) => (
                          <div>
                            <img src={item} alt="" />
                          </div>
                        ))}
                      </Slider>
                    )}
                  </div>
                  <div className={styles.popup__block}>
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <h2 className={styles.popup__name}>
                          <Link style={{textDecoration:'none'}} to={`/details/${cartId ? cartId[activeItem] : id}`}>
                            {btnItems ? btnItems![activeItem] : name}
                          </Link>
                        </h2>
                      </div>
                      <div>
                        <button className={styles.popup__add} onClick={onAddHandlerCart}>Add</button>
                      </div>
                    </div>
                    <div>
                      <span>From ${price} or $41.62/mo.</span>
                    </div>
                    <div className={styles.popup__row}>
                      <svg height="35" viewBox="0 0 35 35" width="85" className="as-svgicon" aria-hidden="true" role="img"><path d="m0 0h35v35h-35z" fill="none"></path><path d="m12.6631 22.3228a.5.5 0 0 1 0 .707l-4.9697 4.9702h4.3066a.5.5 0 0 1 0 1h-5.5a.5.5 0 0 1 -.5-.5v-5.5a.5.5 0 0 1 1 0v4.2792l4.9561-4.9564a.5.5 0 0 1 .707 0zm16.3369-15.8228a.5.5 0 0 0 -.5-.5h-5.5a.5.5 0 0 0 0 1h4.314l-4.974 4.9741a.5.5 0 0 0 .7071.7071l4.9529-4.9527v4.2832a.5.5 0 0 0 1 0v-5.5l-.0012-.0058zm-14.5474 12.1035a2.2014 2.2014 0 0 1 -2.3554 2.2227c-1.4688 0-2.5362-1.08-2.5362-3.252 0-2.1347.9893-3.4 2.5616-3.4a2.09 2.09 0 0 1 2.2421 1.7129h-1.1347a1.02 1.02 0 0 0 -1.085-.7861c-.94 0-1.4892.8262-1.499 2.3428h.0752a1.7449 1.7449 0 0 1 1.6435-.9454 2.0325 2.0325 0 0 1 2.0879 2.1051zm-1.1123.03a1.2525 1.2525 0 1 0 -2.5049-.0225 1.2528 1.2528 0 1 0 2.5049.0225zm2.9366.7607a.6834.6834 0 1 0 .7031.6807.6712.6712 0 0 0 -.7031-.6804zm1.2773-3.8984v1.0684l1.5771-1.1172h.0752v5.2256h1.1329v-6.3406h-1.1294zm4.3779 1.4805h.8037l.7342-2.6443h-1.1033zm1.8936 0h.8043l.8086-2.6446h-1.1032z"></path></svg>
                      <span className={styles['popup__row-text']}>
                        6.1-inch Super Retina XDR displayfootnote¹ with ProMotion for a faster, more responsive feel
                      </span>
                    </div>
                    <div className={styles.popup__row}>
                    <svg height="35" viewBox="0 0 35 35" width="85" className="as-svgicon" aria-hidden="true" role="img"><path d="m0 0h35v35h-35z" fill="none"></path><path d="m12.6631 22.3228a.5.5 0 0 1 0 .707l-4.9697 4.9702h4.3066a.5.5 0 0 1 0 1h-5.5a.5.5 0 0 1 -.5-.5v-5.5a.5.5 0 0 1 1 0v4.2792l4.9561-4.9564a.5.5 0 0 1 .707 0zm16.3369-15.8228a.5.5 0 0 0 -.5-.5h-5.5a.5.5 0 0 0 0 1h4.314l-4.974 4.9741a.5.5 0 0 0 .7071.7071l4.9529-4.9527v4.2832a.5.5 0 0 0 1 0v-5.5l-.0012-.0058zm-14.5474 12.1035a2.2014 2.2014 0 0 1 -2.3554 2.2227c-1.4688 0-2.5362-1.08-2.5362-3.252 0-2.1347.9893-3.4 2.5616-3.4a2.09 2.09 0 0 1 2.2421 1.7129h-1.1347a1.02 1.02 0 0 0 -1.085-.7861c-.94 0-1.4892.8262-1.499 2.3428h.0752a1.7449 1.7449 0 0 1 1.6435-.9454 2.0325 2.0325 0 0 1 2.0879 2.1051zm-1.1123.03a1.2525 1.2525 0 1 0 -2.5049-.0225 1.2528 1.2528 0 1 0 2.5049.0225zm2.9366.7607a.6834.6834 0 1 0 .7031.6807.6712.6712 0 0 0 -.7031-.6804zm1.2773-3.8984v1.0684l1.5771-1.1172h.0752v5.2256h1.1329v-6.3406h-1.1294zm4.3779 1.4805h.8037l.7342-2.6443h-1.1033zm1.8936 0h.8043l.8086-2.6446h-1.1032z"></path></svg>
                      <span className={styles['popup__row-text']}>
                        6.1-inch Super Retina XDR displayfootnote¹ with ProMotion for a faster, more responsive feel
                      </span>
                    </div>
                    <div className={styles.popup__row}>
                    <svg height="35" viewBox="0 0 35 35" width="85" className="as-svgicon" aria-hidden="true" role="img"><path d="m0 0h35v35h-35z" fill="none"></path><path d="m12.6631 22.3228a.5.5 0 0 1 0 .707l-4.9697 4.9702h4.3066a.5.5 0 0 1 0 1h-5.5a.5.5 0 0 1 -.5-.5v-5.5a.5.5 0 0 1 1 0v4.2792l4.9561-4.9564a.5.5 0 0 1 .707 0zm16.3369-15.8228a.5.5 0 0 0 -.5-.5h-5.5a.5.5 0 0 0 0 1h4.314l-4.974 4.9741a.5.5 0 0 0 .7071.7071l4.9529-4.9527v4.2832a.5.5 0 0 0 1 0v-5.5l-.0012-.0058zm-14.5474 12.1035a2.2014 2.2014 0 0 1 -2.3554 2.2227c-1.4688 0-2.5362-1.08-2.5362-3.252 0-2.1347.9893-3.4 2.5616-3.4a2.09 2.09 0 0 1 2.2421 1.7129h-1.1347a1.02 1.02 0 0 0 -1.085-.7861c-.94 0-1.4892.8262-1.499 2.3428h.0752a1.7449 1.7449 0 0 1 1.6435-.9454 2.0325 2.0325 0 0 1 2.0879 2.1051zm-1.1123.03a1.2525 1.2525 0 1 0 -2.5049-.0225 1.2528 1.2528 0 1 0 2.5049.0225zm2.9366.7607a.6834.6834 0 1 0 .7031.6807.6712.6712 0 0 0 -.7031-.6804zm1.2773-3.8984v1.0684l1.5771-1.1172h.0752v5.2256h1.1329v-6.3406h-1.1294zm4.3779 1.4805h.8037l.7342-2.6443h-1.1033zm1.8936 0h.8043l.8086-2.6446h-1.1032z"></path></svg>
                      <span className={styles['popup__row-text']}>
                        6.1-inch Super Retina XDR displayfootnote¹ with ProMotion for a faster, more responsive feel
                      </span>
                    </div>
                    <div className={styles.popup__row}>
                    <svg height="35" viewBox="0 0 35 35" width="85" className="as-svgicon" aria-hidden="true" role="img"><path d="m0 0h35v35h-35z" fill="none"></path><path d="m12.6631 22.3228a.5.5 0 0 1 0 .707l-4.9697 4.9702h4.3066a.5.5 0 0 1 0 1h-5.5a.5.5 0 0 1 -.5-.5v-5.5a.5.5 0 0 1 1 0v4.2792l4.9561-4.9564a.5.5 0 0 1 .707 0zm16.3369-15.8228a.5.5 0 0 0 -.5-.5h-5.5a.5.5 0 0 0 0 1h4.314l-4.974 4.9741a.5.5 0 0 0 .7071.7071l4.9529-4.9527v4.2832a.5.5 0 0 0 1 0v-5.5l-.0012-.0058zm-14.5474 12.1035a2.2014 2.2014 0 0 1 -2.3554 2.2227c-1.4688 0-2.5362-1.08-2.5362-3.252 0-2.1347.9893-3.4 2.5616-3.4a2.09 2.09 0 0 1 2.2421 1.7129h-1.1347a1.02 1.02 0 0 0 -1.085-.7861c-.94 0-1.4892.8262-1.499 2.3428h.0752a1.7449 1.7449 0 0 1 1.6435-.9454 2.0325 2.0325 0 0 1 2.0879 2.1051zm-1.1123.03a1.2525 1.2525 0 1 0 -2.5049-.0225 1.2528 1.2528 0 1 0 2.5049.0225zm2.9366.7607a.6834.6834 0 1 0 .7031.6807.6712.6712 0 0 0 -.7031-.6804zm1.2773-3.8984v1.0684l1.5771-1.1172h.0752v5.2256h1.1329v-6.3406h-1.1294zm4.3779 1.4805h.8037l.7342-2.6443h-1.1033zm1.8936 0h.8043l.8086-2.6446h-1.1032z"></path></svg>
                      <span className={styles['popup__row-text']}>
                        6.1-inch Super Retina XDR displayfootnote¹ with ProMotion for a faster, more responsive feel
                      </span>
                    </div>
                    <div className={styles.popup__row}>
                    <svg height="35" viewBox="0 0 35 35" width="85" className="as-svgicon" aria-hidden="true" role="img"><path d="m0 0h35v35h-35z" fill="none"></path><path d="m12.6631 22.3228a.5.5 0 0 1 0 .707l-4.9697 4.9702h4.3066a.5.5 0 0 1 0 1h-5.5a.5.5 0 0 1 -.5-.5v-5.5a.5.5 0 0 1 1 0v4.2792l4.9561-4.9564a.5.5 0 0 1 .707 0zm16.3369-15.8228a.5.5 0 0 0 -.5-.5h-5.5a.5.5 0 0 0 0 1h4.314l-4.974 4.9741a.5.5 0 0 0 .7071.7071l4.9529-4.9527v4.2832a.5.5 0 0 0 1 0v-5.5l-.0012-.0058zm-14.5474 12.1035a2.2014 2.2014 0 0 1 -2.3554 2.2227c-1.4688 0-2.5362-1.08-2.5362-3.252 0-2.1347.9893-3.4 2.5616-3.4a2.09 2.09 0 0 1 2.2421 1.7129h-1.1347a1.02 1.02 0 0 0 -1.085-.7861c-.94 0-1.4892.8262-1.499 2.3428h.0752a1.7449 1.7449 0 0 1 1.6435-.9454 2.0325 2.0325 0 0 1 2.0879 2.1051zm-1.1123.03a1.2525 1.2525 0 1 0 -2.5049-.0225 1.2528 1.2528 0 1 0 2.5049.0225zm2.9366.7607a.6834.6834 0 1 0 .7031.6807.6712.6712 0 0 0 -.7031-.6804zm1.2773-3.8984v1.0684l1.5771-1.1172h.0752v5.2256h1.1329v-6.3406h-1.1294zm4.3779 1.4805h.8037l.7342-2.6443h-1.1033zm1.8936 0h.8043l.8086-2.6446h-1.1032z"></path></svg>
                      <span className={styles['popup__row-text']}>
                        6.1-inch Super Retina XDR displayfootnote¹ with ProMotion for a faster, more responsive feel
                      </span>
                    </div>
                  </div>
                </div> 
                : null
              }
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}
