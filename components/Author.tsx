import Link from 'next/link'
import React from 'react'
import styles from "../styles/author.module.scss"
import { AuthorBody } from '../typings'
type Props = {
    author: AuthorBody
}

const Author = ({ author }: Props) => {
    return (
        <Link href={"/author/" + author.slug.current}>
            <a className={styles.author}>
                <img src={author.image || "../1.jpg"} alt="" className={styles.author__img}></img>
                <p className={styles.author__name}>{author.name}</p>
            </a>
        </Link>

    )
}

export default Author