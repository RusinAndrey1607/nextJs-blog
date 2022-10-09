import BackArrow from '../../components/BackArrow'
import Blockquote from '../../components/Blockquote'
import Container from '../../components/Container'
import { Post as PostComponent } from '../../components/Post'
import Posts from '../../components/Posts'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Post, slugType } from '../../typings'
import { ParsedUrlQuery } from 'querystring';
import { fetchPaths, fetchPostBySlug, fetchPosts } from '../../utils/fetchData'


export const getStaticPaths: GetStaticPaths<ParsedUrlQuery> = async (context) => {

    const slugArray = await fetchPaths("post")

    const paths = slugArray.map((item: { slug: slugType }) => {
        return { params: { slug: item.slug.current } }
    })

    return {
        paths,
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

    return posts && post ? (
        <Container title={post.title}>
            <div className="container">
                <BackArrow />
                <PostComponent post={post} />
                <Posts posts={posts.filter(item => item._id != post._id)} />
                <Blockquote />
            </div>
        </Container>) : <></>
}

export default PostPage

