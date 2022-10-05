import React, { useContext, useState } from 'react'
import { Category } from '../typings'
import styles from "../styles/categories.module.scss"
import { Context } from '../pages/_app'

const Categories = () => {
    const [active, setActive] = useState("")
    const { categories, setCategory } = useContext(Context)
    const handleClick = (id: string) => {

        if (active == id) {
            setActive("")
            setCategory("")

        } else {
            setActive(id)
            setCategory(id)
        }
    }

    return (
        <ul className={styles.categories}>
            {categories.map((category: Category) => <li onClick={() => handleClick(category._id)} key={category._id} className={`${styles.categories__item} ${active == category._id ? styles.active : ""}`} >
                {category.title}
            </li>)}
        </ul>
    )
}

export default Categories