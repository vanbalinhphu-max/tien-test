export default async function sitemap() {
    const res = await fetch(`${BASE_URL}/api/posts`);
    const posts = await res.json();

    const vercelUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || vercelUrl;

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