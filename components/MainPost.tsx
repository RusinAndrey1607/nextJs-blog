import React from 'react'
import styles from '../styles/mainPost.module.scss'
import { Post } from '../typings'
import { getDate } from '../utils/getDate'
import Author from './Author'
import Link from 'next/link'
import PostCategories from './PostCategories';

type Props = {
    post: Post
}

const MainPost = ({ post }: Props) => {
    return (
        <section className={styles.mainPost}>
            <div className="container__fluid">
                <img src={post.image || "1.jpg"} alt="" className={styles.mainPost__img}></img>
            </div>
            <div className="container">
                <div className={styles.mainPost__inner}>

                    <div className={styles.mainPost__info}>
                        <div className={styles.mainPost__box}>
                            <Link href={"/post/" + post.slug.current}>
                                <h3 className={styles.mainPost__title}>
                                    {post.title}
                                </h3>
                            </Link>

                            <p className={styles.mainPost__date}>
                                {getDate(post._createdAt)}
                            </p>
                        </div>
                        <div className={styles.mainPost__content}>
                            <p className={styles.mainPost__text}>
                                {post.description}
                            </p>

                            {
                                post.categories?.length ? <PostCategories categories={post.categories} /> : null
                            }
                            <Author author={post.author} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainPost