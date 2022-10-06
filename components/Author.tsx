import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from "../styles/author.module.scss"
import { AuthorBody } from '../typings'
import defaultImage from '../public/defaultImage.jpeg'
type Props = {
    author: AuthorBody
}

const Author = ({ author }: Props) => {
    return (
        <>
            <Link href={"/author/" + author.slug.current}>

                <a className={styles.author}>
                    <div className={styles.author__img}>
                        <Image objectFit='cover' layout='fill' src={author.image || defaultImage } alt="" className={styles.author__img} ></Image>
                    </div>
                    <p className={styles.author__name}>{author.name}</p>
                </a>
            </Link>

        </>
    )
}

export default Author