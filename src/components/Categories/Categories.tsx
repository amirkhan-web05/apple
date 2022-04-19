import React from 'react'
import styles from './Categories.module.scss'

type TypeCategories = {
  categories:string[],
  onClickCategories: (category:string | null) => void
}

export const Categories:React.FC<TypeCategories> = ({categories, onClickCategories}) => {
  const [activeItem, setActiveItem] = React.useState<string | null>(null)

  const handlerChangeActive = (item:string | null):void => {
    setActiveItem(item)
    onClickCategories(item)
  }

  return (
    <div>
      <button
        onClick={() => handlerChangeActive(null)} 
        className={activeItem === null ? styles.categories__active : styles.categories__btn}>
        All
      </button>
      {categories.map((item, index) => (
        <button
          key={index}
          onClick={() => handlerChangeActive(item)} 
          className={activeItem === item ? styles.categories__active : styles.categories__btn}>
          {item}
        </button>
      ))}
    </div>
  )
}
