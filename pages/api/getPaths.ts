import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { slugType } from '../../typings'
type Data = {
    paths: slugType[]
}


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const {type} = req.query

    const queryString = groq`*[_type == "${type}"]| order(_createdAt desc){
        slug
    }`
    const paths: slugType[] = await sanityClient.fetch(queryString)

    res.status(200).json({ paths })
}
