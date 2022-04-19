import React from 'react'
import {Route, Routes} from 'react-router-dom'
import { RequirePath } from '../../hoc/RequirePath'
import { AUTH_ROUTES, PUBLIC_ROUTES } from '../../routes'
import { Header } from '../Header/Header'

export const AppRouter:React.FC = () => {  
  return (
    <Routes>
      <Route path='/' element={<Header/>}>
        {AUTH_ROUTES.map(({path, Element}) => (
          <Route key={`${path}_${Element}`} path={path} element={
            <RequirePath>
              <Element/>
            </RequirePath>
          }/>
        ))}
        {PUBLIC_ROUTES.map(({path, Element}) => (
          <Route key={`${path}_${Element}`} path={path} element={<Element/>}/>
        ))}
      </Route>
    </Routes>
  )
}
