import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { Post } from '../../typings'
type Data = {
    posts: Post[]
}



export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { referenceId } = req.query
    const queryString = groq`*[references(${referenceId})] |
order(_createdAt desc) {
  _createdAt,_id,body,description,image,slug,title,
    author ->,
    categories []->
}`
    const posts:Post[] = await sanityClient.fetch(queryString)
    res.status(200).json({ posts })
}
