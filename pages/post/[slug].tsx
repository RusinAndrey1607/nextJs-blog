import { useRouter } from 'next/router'
import BackArrow from '../../components/BackArrow'
import Blockquote from '../../components/Blockquote'
import Container from '../../components/Container'
import { Post as PostComponent } from '../../components/Post'
import Posts from '../../components/Posts'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Post, slugType } from '../../typings'
import { ParsedUrlQuery } from 'querystring';
import { fetchPostBySlug } from '../../utils/fetchPostBySlug';
import { fetchPosts } from '../../utils/fetchPosts';

export const getStaticPaths: GetStaticPaths<ParsedUrlQuery> = async (context) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPaths?type=post`)
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
    const post = await fetchPostBySlug(slug.slug)
    const posts = await fetchPosts()

    return {
        props: {
            post,
            posts
        }
    }
}



type Props = {
    post: Post,
    posts: Post[]
}
const PostPage = ({ posts, post }: Props) => {
    const router = useRouter()
    const { slug } = router.query

    return (
        <Container>
            <div className="container">
                <BackArrow />
                <PostComponent post={post} />
                <Posts posts={posts.filter(item => item._id != post._id)} />
                <Blockquote />
            </div>
        </Container>)
}

export default PostPage

