import type { GetStaticProps } from 'next'
import Blockquote from '../components/Blockquote'
import Container from '../components/Container'
import Header from '../components/Header'
import MainPost from '../components/MainPost'
import Posts from '../components/Posts'
import { Category, Post } from '../typings'
import { useContext, useEffect, useState } from 'react';
import { Context } from './_app';
import { fetchCategories, fetchPosts, fetchPostsByReference } from '../utils/fetchData'


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

interface Props {
  posts: Post[]
  categories: Category[]
}

const Home = ({ posts, categories }: Props) => {
  const [mainPost, setMainPost] = useState(posts[0])
  const [postArray, setPostsArray] = useState(posts)
  const [category, setCategory] = useState({} as Category)

  const context = useContext(Context)

  const handleChange = async () => {
    const posts = await fetchPostsByReference(category._id)
    setPostsArray(posts)


  }
  context.categories = categories
  context.setCategory = setCategory

  useEffect(() => {

    if (category._id) {
      handleChange()


    } else {
      fetchPosts().then(
        res => setPostsArray(res)
      )
    }

  }, [category, handleChange])
  return (
    <Container>
      <>
        <Header />
        <MainPost post={mainPost} />
        <Posts posts={postArray.filter(item => item._id != mainPost._id)} />
        <Blockquote />
      </>
    </Container>
  )
}

export default Home


