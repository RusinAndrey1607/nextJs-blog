import React from 'react'
import styles from '../styles/blockquote.module.scss'

type Props = {}

const Blockquote = (props: Props) => {
    return (
        <blockquote className={styles.blockquote}>
            <div className="container">
                <div className={styles.blockquote__inner}>
                    <h3 className={styles.blockquote__title}>
                        Website made by internet-coder Andrey using NextJs
                    </h3>
                    <div className={styles.blockquote__buttons}>
                        <a target={"_blank"} href="https://andrey-portfolio.vercel.app/" className={styles.blockquote__portfolio}>Watch Portfolio</a>
                        <a target={"_blank"} href="https://github.com/RusinAndrey1607" className={styles.blockquote__github}>View my github</a>
                    </div>
                </div>
            </div>
        </blockquote>
    )
}

export default Blockquote