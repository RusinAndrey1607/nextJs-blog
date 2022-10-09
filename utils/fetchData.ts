import { groq } from "next-sanity"
import { sanityClient } from "../sanity"
import { Author, Category, Post, slugType } from "../typings"

export const fetchPosts = async (): Promise<Post[]> => {
    const queryString = groq`*[_type == "post"]| order(_createdAt desc){
        _createdAt,_id,body,description,image,slug,title,
        author ->,
        categories []->
      }`

    const posts = await sanityClient.fetch(queryString)
    return posts
}
export const fetchPostBySlug = async (slug: string): Promise<Post> => {
    const queryString = groq`*[_type == "post" && slug.current == "${slug}"][0]{
        _createdAt,_id,body,description,image,slug,title,
        author ->,
        categories []->
      }`
    const post: Post = await sanityClient.fetch(queryString)
    return post
}

export const fetchPostsByReference = async (refId: string): Promise<Post[]> => {
    const queryString = groq`*[references("${refId}")] |
order(_createdAt desc) {
  _createdAt,_id,body,description,image,slug,title,
    author ->,
    categories []->
}`

    const posts: Post[] = await sanityClient.fetch(queryString)

    return posts
}

export const fetchCategories = async (): Promise<Category[]> => {
    const queryString = groq`*[_type == "category"]`
    const categories = await sanityClient.fetch(queryString)
    return categories
}

export const fetchAuthor = async (slug: string): Promise<Author> => {
    const queryString = groq`*[_type == "author" && slug.current=="${slug}"][0]`

    const author: Author = await sanityClient.fetch(queryString)
    return author
}
export const fetchPaths = async (type: string): Promise<{ slug: slugType }[]> => {
    const queryString = groq`*[_type == "${type}"]| order(_createdAt desc){
        slug
    }`
    const paths: { slug: slugType }[] = await sanityClient.fetch(queryString)
    return paths
} 