import React from 'react'
import appleIcon from '../../assets/images/apple-seeklogo.com.svg'
import searchIcon from '../../assets/images/Vector_search_icon.svg.png'
import basketIcon from '../../assets/images/5810787.png'
import userIcon from '../../assets/images/user.png'
import styles from './NavBar.module.scss'
import { NavLink } from 'react-router-dom'
import { useAppSelector } from '../../hooks/useAppSelector'
import { fetchMinus, fetchPlus, fetchRemove } from '../../redux/actions/items'
import { useDispatch } from 'react-redux'
import { TypeAuthUser, TypeCartItems } from '../../types'
import { createUser } from '../../redux/actions/auth'
import { FAVORITE_WAY } from '../../utils/consts'

export const NavBar:React.FC = () => {
  const dispatch = useDispatch()
  const [visiblePopup, setVisiblePopup] = React.useState<boolean>(false)
  const [modal, setModal] = React.useState<boolean>(false)
  const loading = useAppSelector(state => state.loading.loading)
  const [form, setForm] = React.useState<TypeAuthUser>({name:'', email:'', password:''})
  
  const changeHandlerPopup = ():void => {
    setVisiblePopup(!visiblePopup)
  }

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>):void => {
    e.preventDefault()
    if (form.email.length && form.name.length && form.password.length) {
      dispatch(createUser(form))
    }

    if (form) {
      setForm({name:'', email:'', password:''})
    }
  }
  
  const changeHandlerModal = ():void => {
    setModal(!modal)
  }

  const cart:TypeCartItems[] = useAppSelector<TypeCartItems[]>((state) => state.cart.cart)

  const handlerRemoveItem = (id:number) => {
    dispatch(fetchRemove(id))    
  }

  const handlerPlusItem = (id:number, count:number) => {
    dispatch(fetchPlus(id, count + 1))
  }

  const handlerMinusItem = (id:number, count:number) => {
    dispatch(fetchMinus(id, count - 1))
  }

  return (
    <nav>
      <ul className={styles.nav}>
        <li className={styles.nav__item}>
          <NavLink className={styles.nav__link} to="/">
            <img className={styles.nav__icon} width={14} src={appleIcon} alt="" />
          </NavLink>
        </li>
        <li className={styles.nav__item}>
          <NavLink className={styles.nav__link} to="/store">Store</NavLink>
        </li>
        <li className={styles.nav__item}>
          <NavLink className={styles.nav__link} to="/">Mac</NavLink>
        </li>
        <li className={styles.nav__item}>
          <NavLink className={styles.nav__link} to="/">iPad</NavLink>
        </li>
        <li className={styles.nav__item}>
          <NavLink className={styles.nav__link} to="/">iPhone</NavLink>
        </li>
        <li className={styles.nav__item}>
          <NavLink className={styles.nav__link} to="/">Watch</NavLink>
        </li>
        <li className={styles.nav__item}>
          <NavLink className={styles.nav__link} to="/">AirPods</NavLink>
        </li>
        <li className={styles.nav__item}>
          <NavLink className={styles.nav__link} to="/">TV & Home</NavLink>
        </li>
        <li className={styles.nav__item}>
          <NavLink className={styles.nav__link} to="/">Only on Apple</NavLink>
        </li>
        <li className={styles.nav__item}>
          <NavLink className={styles.nav__link} to="/">Accessories</NavLink>
        </li>
        <li className={styles.nav__item}>
          <NavLink className={styles.nav__link} to={`${FAVORITE_WAY}`}>Favorite</NavLink>
        </li>
        <li className={styles.nav__item}>
          <NavLink className={styles.nav__link} to="/">Support</NavLink>
        </li>
        
        <li className={styles.nav__item}>
          <img onClick={changeHandlerModal} className={styles['nav__item-icon']} width={15} src={userIcon} alt="" />
          {modal && <div className={styles.modal}>
            <div className={styles.modal__block}>
              <button onClick={changeHandlerModal} className={styles.cart__close}>&times;</button>
            </div>
            <form onSubmit={handleSubmit} className={styles.modal__inner}>
              <div className={styles.modal__item}>
              <h3 className={styles.modal__title}>Auth</h3>
                <div>
                  <input
                    value={form.name} 
                    onChange={e => setForm({...form, name:e.target.value})}
                    className={styles.modal__form} 
                    placeholder='Name' 
                    type="text" 
                  />
                </div>
                <div>
                  <input
                    value={form.email} 
                    onChange={e => setForm({...form, email:e.target.value})}
                    className={styles.modal__form} 
                    placeholder='Email' 
                    type="text" 
                  />
                </div>
                <div>
                  <input 
                    value={form.password}
                    onChange={e => setForm({...form, password:e.target.value})}
                    className={styles.modal__form} 
                    placeholder='Password' 
                    type="text" 
                  />
                </div>
                <button className={styles.modal__btn} type='submit'>{loading ? 
                  <button className={styles.modal__loaded} type="submit" disabled>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  </button>
                : 'Auth'}</button>
              </div>
            </form>
          </div>}
        </li>
        <li className={styles.nav__item}>
          <img className={styles.nav__search} width={14} src={searchIcon} alt="" />
        </li>
        <li className={styles.nav__item}>
          <img onClick={changeHandlerPopup} className={styles.nav__basket} width={14} src={basketIcon} alt="" />
        </li>
      </ul>
      {visiblePopup && <ul className={styles.cart}>
        <div className={styles.cart__block}>
          <button onClick={changeHandlerPopup} className={styles.cart__close}>&times;</button>
        </div>  
        <div className={styles.cart__inner}>
          {cart.length ? cart.map(item => (
            <div key={item.id} className={styles.cart__items}>
              <div>
                <img width={140} src={item.images} alt="" />
              </div>   
              <div className='d-flex w-100 align-items-center justify-content-between'>
                <div>
                  <h3 className={styles.cart__name}>{item.name && item.name}</h3>
                  <div className='d-flex align-items-center'>
                    <button onClick={() => handlerPlusItem(item.id, item.count)} className={styles['cart__counter']}>+</button>
                    <span className={styles.cart__count}>{item.count}</span>
                    <button onClick={() => handlerMinusItem(item.id, item.count)} className={styles['cart__counter']}>-</button>
                  </div>
                </div>
                <p style={{fontSize:'20px', marginTop:'20px'}}>{item.price} $</p>    
                <button onClick={() => handlerRemoveItem(item.id)} className={styles.cart__delete}>&times;</button>     
              </div>  
            </div>
          )) : <span className={styles.cart__empty}>Your Bag is empty.</span>}
        </div>
      </ul>}
    </nav>
  )
}
