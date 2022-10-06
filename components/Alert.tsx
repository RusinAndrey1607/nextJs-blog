import React from 'react'
import styles from '../styles/alert.module.scss'

type Props = {}

const Alert = (props: Props) => {
  return (
    <div className={styles.alert}>
      <div className={styles.container}>
        <div className={styles.alert__inner}>
          <p className={styles.alert__text}>
            The source code for this blog is <a href="https://github.com/RusinAndrey1607" target={"_blank"} rel="noreferrer" className={styles.alert__link}>available on my  GitHub</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Alert