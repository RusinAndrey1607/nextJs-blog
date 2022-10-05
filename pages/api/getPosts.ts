import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { Post } from '../../typings'
type Data = {
    posts: Post[]
}

const queryString = groq`*[_type == "post"]| order(_createdAt desc){
    _createdAt,_id,body,description,image,slug,title,
    author ->,
    categories []->
  }`

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const posts = await sanityClient.fetch(queryString)
    res.status(200).json({ posts})
}
