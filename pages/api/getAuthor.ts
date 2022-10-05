import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { Author } from '../../typings'

type Data = {
    author: Author
}


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { slug } = req.query

    const queryString = groq`*[_type == "author" && slug.current=="${slug}"][0]`

    const author = await sanityClient.fetch(queryString)

    res.status(200).json(author)
}
