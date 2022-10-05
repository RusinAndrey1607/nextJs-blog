import React from 'react'
import { Category } from '../typings'

type Props = {
    categories: Category[]
}

const PostCategories = ({ categories }: Props) => {
    return (
        <ul className="post__categories">
            <li >Tags: </li >

            {categories.map(category => <li key={category._id} className="post__categories__item" >
                {category.title}
            </li>)}
        </ul>
    )
}

export default PostCategories