const BASE_URL='http://localhost:3000';

export default async function sitemap() {
    const res = await fetch(`${BASE_URL}/api/posts`);
    const posts = await res.json();

    //Tạo URD động cho mỗi bài viết
    const postUrls = posts.map(post=>({
        url: `${BASE_URL}/posts/${post.slug}`,
    }))

    return [
        {
            url: BASE_URL,
        },
        {
            url: `${BASE_URL}/about`
        },
        ...postUrls
    ]
}