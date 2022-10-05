import type { GetStaticProps } from 'next'
import Blockquote from '../components/Blockquote'
import Container from '../components/Container'
import Header from '../components/Header'
import MainPost from '../components/MainPost'
import Posts from '../components/Posts'
import { Category, Post } from '../typings'
import { fetchPosts } from '../utils/fetchPosts'
import { fetchCategories } from '../utils/fetchCategories';
import { useContext, useEffect, useState } from 'react';
import { fetchPostsByReference } from '../utils/fetchPostsByReference'
import { Context } from './_app';


interface Props {
  posts: Post[]
  categories: Category[]
}
const Home = ({ posts, categories }: Props) => {
  const [mainPost, setMainPost] = useState(posts[0])
  const [postArray, setPosts] = useState(posts)
  const [category, setCategory] = useState("")

  const context = useContext(Context)
  context.categories = categories
  context.setCategory = setCategory

  useEffect(() => {

    if (category) {
      fetchPostsByReference(category).then(
        res => setPosts(res)
      )
    } else {
      fetchPosts().then(
        res => setPosts(res)
      )
    }

  }, [category])
  return (
    <Container>
      <>
        <Header />
        <MainPost post={mainPost} />
        <Posts posts={category ? postArray : postArray.slice(1)} />
        <Blockquote />
      </>
    </Container>
  )
}

export default Home


export const getStaticProps: GetStaticProps = async () => {
  const posts = await fetchPosts()
  const categories = await fetchCategories()
  return {
    props: {
      posts,
      categories
    }
  }
} 