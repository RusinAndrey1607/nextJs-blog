import React from 'react'
import styles from "../styles/posts.module.scss"
import { Post } from '../typings'
import Categories from './Categories'
import PostItem from './PostItem'

type Props = {
    posts: Post[]
}

const Posts = ({ posts }: Props) => {
    return (
        <section className={styles.posts}>
            <div className="container">
                <h2 className="chapter">
                    More Posts
                </h2>
                <Categories/>
                <div className={styles.posts__items}>
                    {posts.map(item => <PostItem key={item._id} post={item} />)}
                </div>
            </div>
        </section>
    )
}

export default Posts