import React from 'react'
import Author from './Author'
import styles from '../styles/post.module.scss'
import { Post as PostType } from '../typings'
import { PortableText } from '@portabletext/react'
import { getDate } from '../utils/getDate'
import PostCategories from './PostCategories'

type Props = {
    post: PostType
}

export const Post = ({ post }: Props) => {
    return (
        <div className={styles.post}>
            <div className="container">
                <h1 className={styles.post__title}>
                    {post.title}
                </h1>
                <Author author={post.author} />
                <img src={post.image || "../1.jpg"} alt="" className={styles.post__img}></img>
                <div className={styles.post__content}>
                    <p className={styles.post__date}>
                        {getDate(post._createdAt)}
                    </p>
                    {
                        post.categories?.length ? <PostCategories categories={post.categories} /> : null
                    }
                    <div className={styles.post__content}>
                        <PortableText value={post.body} />
                    </div>
                </div>
            </div>
        </div>
    )
}

