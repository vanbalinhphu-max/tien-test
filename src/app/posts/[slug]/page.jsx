export async function generateMetadata({ params }) {
  const res = await fetch(`/api/posts/${params.slug}`);
  const post = await res.json();
  if (!post) {
    return { title: "Không tìm thấy bài viết" };
  }
  return {
    title: post.title,
    description: `Đọc bài viết chi tiết về ${post.title}`,
  };
}
export default async function PostPage({ params }) {
  const res = await fetch(`/api/posts/${params.slug}`);
  const post = await res.json();
  if (!post) {
    return (
      <div>
        <h1>Không tìm thấy bài viết</h1>
        <p>Bài viết bạn đang tìm kiếm không tồn tại.</p>
      </div>
    );
  }
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <p>Nội dung bài viết cho slug: {params.slug}</p>
    </div>
  );
}
