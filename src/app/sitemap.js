export default async function sitemap() {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

  const res = await fetch(`/api/posts`);
  const posts = await res.json();

  const postUrls = posts.map((post) => ({
    url: `${baseUrl}/posts/${post.slug}`,
  }));

  return [
    {
      url: baseUrl,
    },
    {
      url: `${baseUrl}/about`,
    },
    ...postUrls,
  ];
}
