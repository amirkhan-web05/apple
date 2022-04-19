export type TypePhoto = string[] | any
export type TypeBtn = string

export type TypeCartItems = {
  id:number
  cartId?:number[] | any
  name:string
  images:string
  price:number
  photo?:TypePhoto
  sliderPhoto:string[]
  sliderPhotoMax:string[]
  btnItems?:TypeBtn[]
  popup?:boolean | number
  setPopup?: (popup:boolean | number) => void
  table?:number
  count:number,
  onAdd?: (items:TypeCartItems) => void
}

export type TypeItemsList = {
  items:TypeCartItems[]
  onAdd?: (items:TypeCartItems) => void
  popup?:boolean | number
  setPopup?: (popup:boolean | number) => void
}

export type TypeCategoriesItem = {
  categories:string | null
}

export type TypeSortItem = {
  sortBy: {
    type:string | null
    order:string
  }
}

export type TypeCartList = {
  cart:TypeCartItems[]
}

export type TypeLoadingList = {
  loading:boolean
}

export type TypeAuthUser = {
  id?:number | null
  name:string
  email:string
  password:string
}

export type TypeAuth = {
  auth:TypeAuthUser | null
  isLoader:boolean,
  isAuth:boolean
}