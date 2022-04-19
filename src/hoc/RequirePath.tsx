import React from 'react'
import { useDispatch } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../hooks/useAppSelector'
import { fetchAccount } from '../redux/actions/items';
import { PUBLIC_WAY } from '../utils/consts';

export const RequirePath:React.FC = ({children}):JSX.Element => {
  const dispatch = useDispatch()
  const location = useLocation()
  const auth = useAppSelector(state => state.auth.auth)
  const loading = useAppSelector(state => state.auth.isLoader)
  
  console.log(auth);
  

  React.useEffect(() => {
    dispatch(fetchAccount())
  }, [])

  if (loading) {
    return <></>
  }

  if (!auth) {
    return <Navigate to={`${PUBLIC_WAY}`} state={{from:location}}/>
  }

  return (
    <>
      {children}
    </>
  )
}
