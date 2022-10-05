import Link from 'next/link'
import React from 'react'
import styles from "../styles/posts.module.scss"
import { Post } from '../typings'
import { getDate } from '../utils/getDate'
import Author from './Author'
import PostCategories from './PostCategories'

type Props = {
    post: Post
}

const PostItem = ({ post }: Props) => {

    return (
        <div className={styles.posts__item}>
            <div className={styles.posts__img__box}>
                <img src={post.image || "../1.jpg"} alt="" className={styles.posts__img}></img>
            </div>
            <Link href={"/post/" + post.slug.current} >
                <a>
                    <h4 className={styles.posts__title + " title"}>
                        {post.title}
                    </h4>
                </a>

            </Link>
            <p className={styles.posts__date}>
                {getDate(post._createdAt)}

            </p>
            <p className={styles.posts__text}>
                {post.description}
            </p>
            {
                post.categories?.length ? <PostCategories categories={post.categories} /> : null
            }

            <Author author={post.author} />
        </div>
    )
}

export default PostItem