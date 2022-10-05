
type slugType = {
    _type: "slug",
    current: string
}
export type CategoryBody = {
    title: string,
    description: string,
}

export type PostBody = {
    description: string,
    title: string,
    image: string,
    slug: slugType
    author: AuthorBody
    body: any
    categories?: Category[]
}

export type AuthorBody = {
    name: string,
    image: string,
    slug: slugType,
    bio: any
}

export interface Post extends PostBody {
    _createdAt: string,
    _id: string,
    _updatedAt: string,
}



export interface Author extends AuthorBody {
    _createdAt: string,
    _id: string,
    _updatedAt: string,
}


export interface Category extends CategoryBody {
    _createdAt: string,
    _id: string,
    _updatedAt: string,
}