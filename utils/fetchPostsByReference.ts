export const fetchPostsByReference = async(referenceId:string) =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPostsByReference?referenceId="${referenceId}"`)
    const posts = await res.json()
    return posts.posts


}