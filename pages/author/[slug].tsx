import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import React from 'react'
import Container from '../../components/Container'
import Posts from '../../components/Posts'
import styles from "../../styles/authorPage.module.scss"
import { Author, Post, slugType } from '../../typings'
import { fetchPostsByReference } from '../../utils/fetchPostsByReference';
import { fetchAuthor } from '../../utils/fetchAuthor';
import { PortableText } from '@portabletext/react'
import BackArrow from '../../components/BackArrow'
import Image from 'next/image'
import defaultImage from '../../public/defaultImage.jpeg'


export const getStaticPaths: GetStaticPaths<ParsedUrlQuery> = async (context) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPaths?type=author`)
  const slug = await res.json()


  return {
    paths: slug.paths.map((item: { slug: slugType }) => {
      return { params: { slug: item.slug.current } }
    }),
    fallback: false
  }



}

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params as { slug: string }

  const author = await fetchAuthor(slug.slug)
  const posts = await fetchPostsByReference(author._id)

  return {
    props: {
      author,
      posts
    }
  }
}



type Props = {
  author: Author,
  posts: Post[]
}

const AuthorPage = ({ author, posts }: Props) => {

  return (
    <Container>
      <>
        <div className="container">
          <BackArrow />
          <div className={styles.authorPage__inner}>
            <div className="">
              <div className={styles.authorPage__img}>
                <Image objectFit='cover' className={styles.authorPage__img} layout='fill' src={author.image || defaultImage} alt=""></Image>
              </div>
            </div>

            <div className={styles.authorPage__info}>
              <h2 className={styles.authorPage__name}>{author.name}</h2>
              <div className={styles.authorPage__bio}>
                <PortableText value={author.bio} />
              </div>
            </div>
          </div>
          <Posts posts={posts} />
        </div>
      </>
    </Container>
  )

}

export default AuthorPage

