import { Author } from "../typings"

export const fetchAuthor = async (slug: string): Promise<Author> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getAuthor?slug=${slug}`)
    const author = await res.json()
    
    return author


}