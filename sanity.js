import {
    createClient,
} from "next-sanity";

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "bt0djmyf",
    apiVersion: "2021-10-21",
    useCdn: true,

};

export const sanityClient = createClient(config)