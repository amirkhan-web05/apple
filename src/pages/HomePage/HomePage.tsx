import React from 'react'
import styles from './HomePage.module.scss'

export const HomePage:React.FC = () => {
  return (
    <div className={styles.home}>
      <div className="container">
        <div className="text-center">
          <h1 className={styles.home__title}>iPhone 13 Pro</h1>
          <h3 className={styles.home__subtitle}>On. So. Pro.</h3>
          <div>
            <a className={styles.home__link} href="/">Learn more</a>
            <a className={styles.home__link} href="/">Buy</a>
          </div>
        </div>
      </div>
    </div>
  )
}
