import React from 'react'
import { useDispatch } from 'react-redux'
import { CartList } from '../../components/CartList/CartList'
import { Categories } from '../../components/Categories/Categories'
import { SortByPopup } from '../../components/SortByPopup/SortByPopup'
import { useAppSelector } from '../../hooks/useAppSelector'
import { setCategories } from '../../redux/actions/categories'
import { fetchCartPost, getItemsCart, fetchCartItems } from '../../redux/actions/items'
import { setSortBy, TypeSortList } from '../../redux/actions/sortBy'
import { TypeCartItems } from '../../types'
import styles from './StorePage.module.scss'

const categories = ['iPhone 13 Pro', 'iPhone SE', 'iPhone 12', 'iPhone 11']
const sortBy = [
  {type:null, name:'Default', order:''},
  {type:'category', name:'Population', order:'asc'},
  {type:'name', name:'Alphabet', order:'desc'},
  {type:'price', name:'Price', order:'desc'}
]

export const StorePages:React.FC = () => {
  const dispatch = useDispatch()
  const items:TypeCartItems[] = useAppSelector<TypeCartItems[]>((state) => state.items.items)
  const [popup, setPopup] = React.useState<boolean | number>(false)
  const category = useAppSelector(state => state.categories.categories)
  const sortByItems = useAppSelector(state => state.soryBy.sortBy)

  React.useEffect(() => {
    dispatch(getItemsCart(category, sortByItems))
  }, [category, sortByItems])

  React.useEffect(() => {
    dispatch(fetchCartItems())
  }, [])
  
  const handlerAddToCart = (obj:TypeCartItems) => {
    dispatch(fetchCartPost(obj))
  }

  const handlerCategories = (item:string | null) => {
    dispatch(setCategories(item))
  }

  const handlerSortBy = (item:TypeSortList) => {
    dispatch(setSortBy(item))
  }

  return (
    <div className='container'>
      <h1 className={styles.store}>Shop iPhone</h1>
      <div className={styles.store__categories}>
        <Categories onClickCategories={handlerCategories} categories={categories}/>
        <SortByPopup 
          popup={popup} 
          setPopup={setPopup} 
          onClickSortBy={handlerSortBy} 
          activeItemSortBy={sortByItems.type} 
          sortBy={sortBy}
        />
      </div>
      <CartList onAdd={handlerAddToCart} popup={popup} setPopup={setPopup} items={items}/>
    </div>
  )
}
