import React from 'react'
import styles from '../styles/header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
        <div className="container">
            <div className={styles.header__inner}>
                <h2 className={styles.header__name + " chapter"}>BlogName</h2>
                <p className={styles.header__quote}>
                    Website created using NextJs and Sanity.io
                </p>
            </div>
        </div>
    </header>
  )
}

export default Header