import { STORE_WAY, PUBLIC_WAY, FAVORITE_WAY, REGISTER_WAY, NOT_FOUND_WAY, DETAILS_WAY } from './../utils/consts';
import { HomePage } from "../pages/HomePage/HomePage"
import { StorePages } from "../pages/StorePages/StorePages"
import { FavoritePage } from '../pages/FavoritePage/FavoritePage';
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage';
import { DetailsPage } from '../pages/DetailsPage/DetailsPage';

export const PUBLIC_ROUTES = [
  {
    path:STORE_WAY,
    Element:StorePages
  },
  {
    path:PUBLIC_WAY,
    Element:HomePage
  },
  {
    path:REGISTER_WAY,
    Element:HomePage
  },
  {
    path:NOT_FOUND_WAY,
    Element:NotFoundPage
  },
  {
    path:DETAILS_WAY + '/:cartId',
    Element:DetailsPage
  }
]

export const AUTH_ROUTES = [
  {
    path:FAVORITE_WAY,
    Element:FavoritePage
  }
]