import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { Category } from '../../typings'
type Data = {
    categories: Category[]
}

const queryString = groq`*[_type == "category"]`

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const categories = await sanityClient.fetch(queryString)
    res.status(200).json({ categories})
}
