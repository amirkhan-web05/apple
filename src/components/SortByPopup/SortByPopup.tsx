import React from 'react'
import { TypeSortList } from '../../redux/actions/sortBy'
import styles from './SortByPopup.module.scss'

type TypeSortByPopup = {
  popup:boolean | number
  setPopup: (popup:boolean | number) => void
  sortBy:any[],
  activeItemSortBy:string | null,
  onClickSortBy: (item:TypeSortList) => void;
}

export const SortByPopup:React.FC<TypeSortByPopup> = ({sortBy, activeItemSortBy, onClickSortBy, popup, setPopup}) => {
  const findItems = sortBy.find(item => item.type === activeItemSortBy)

  const changeHandler = ():void => {
    setPopup(!popup)
  }

  const handlerChangeItems = (sortBy:TypeSortList) => {
    if (onClickSortBy) {
      onClickSortBy(sortBy)
    }
    setPopup(false)
  }

  return (
    <div className={styles.sort}>
      <span onClick={changeHandler}>On {findItems?.name}</span>
      {popup && 
      <div className={styles.sort__inner}>
        {sortBy.map((item, index) => (
          <div onClick={() => handlerChangeItems(item)} key={index} className={styles.sort__item}>
             On {item.name}
          </div>
        ))}
      </div>}
    </div>
  )
}
