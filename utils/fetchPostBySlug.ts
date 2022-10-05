export const fetchPostBySlug = async (slug: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPostBySlug?slug=${slug}`)
    const post = await res.json()
    return post.post


}