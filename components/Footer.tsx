import React from 'react'
import styles from '../styles/footer.module.scss'

type Props = {}

const Footer = (props: Props) => {
    const links = [
        { name: "telegram", url: "https://t.me/Andrey16075" },
        { name: "github", url: "https://github.com/RusinAndrey1607" },
    ]
    return (
        <footer className={styles.footer}>
            <div className="container">
                <ul className={styles.footer__links}>
                    {links.map((item) => <li key={item.name} className={styles.footer__item}>
                        <a href={item.url} target="_blank" rel="noreferrer" className={styles.footer__link}>{item.name}</a>
                    </li>)}
                </ul>
            </div>
        </footer>
    )
}

export default Footer
