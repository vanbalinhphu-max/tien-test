export default async function sitemap() {
    const res = await fetch(`${BASE_URL}/api/posts`);
    const posts = await res.json();

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

    const postUrls = posts.map(post=>({
        url: `${baseUrl}/posts/${post.slug}`,
    }))

    return [
        {
            url: baseUrl,
        },
        {
            url: `${baseUrl}/about`
        },
        ...postUrls
    ]
}