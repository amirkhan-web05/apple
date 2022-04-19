import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar } from '../NavBar/NavBar'
import styles from './Header.module.scss'

export const Header:React.FC = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <NavBar/>
        <Outlet/>
      </div>
    </header>
  )
}
