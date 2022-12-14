import { useSanityClient, createImageBuilder } from 'astro-sanity';

export const imageBuilder = createImageBuilder(useSanityClient());

export function urlForImage(source) {
    return imageBuilder.image(source);
}

export async function getNavigation(navigationName) {
    const query = `*[_type == "nav" && id == "${navigationName}" ]`;
    const navigation = await useSanityClient().fetch(query);
    return navigation;
}

export async function getPostsList() {
    const query = `*[_type == "post" ] {
        _id, 
        title, 
        publishedAt, 
        categories[]->,
        mainImage, 
        excerpt,
        slug
    } | order(publishedAt desc)`;
    const posts = await useSanityClient().fetch(query);
    return posts;
}

export async function getPostsListByCategory( category ) {
    const query = `*[_type == "post" && "${category}" in categories[]->slug.current ] {
        _id, 
        title, 
        publishedAt, 
        categories[]->,
        mainImage, 
        excerpt,
        slug
    } | order(publishedAt desc)`;
    const posts = await useSanityClient().fetch(query);
    return posts;
}

export async function getPosts() {
    const query = `*[_type == "post" ] {
        _id, 
        title, 
        publishedAt, 
        categories[]->,
        mainImage, 
        excerpt,
        slug,
        body
    } | order(publishedAt desc)`;
    const posts = await useSanityClient().fetch(query);
    return posts;
}

export async function getCategories() {
    const query = `*[_type == "category" ] {
        title,
        "slug": slug.current
    }`;
    const categories = await useSanityClient().fetch(query);
    return categories;
}