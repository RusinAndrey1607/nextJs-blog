import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { Post } from '../../typings'
type Data = {
    post: Post
}



export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { slug } = req.query
    const queryString = groq`*[_type == "post" && slug.current == "${slug}"][0]{
        _createdAt,_id,body,description,image,slug,title,
        author ->,
        categories []->
      }`
    const post: Post = await sanityClient.fetch(queryString)
    res.status(200).json({ post })
}
