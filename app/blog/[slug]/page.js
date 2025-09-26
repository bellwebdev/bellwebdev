import { attributes } from "@/content/blog.md";
import BlogPage from "@/components/BlogPage";

export async function BlogPost({ params }) {
  const { slug } = await params;
  let { blogPosts } = attributes;
  let urlSlug = blogPosts.map((posts) => {
    return {
      url: posts.url,
    };
  });

  const slugCheck = (slug) => {
    let check = false;
    urlSlug.forEach((post) => {
      if (slug === post.url) {
        check = true;
      }
    });
    return check;
  };

  const getPostBySlug = (slug) => {
    let post;
    blogPosts.forEach((posts) => {
      if (slug == posts.url) {
        post = posts;
      }
    });
    return post;
  };

  if (slugCheck(slug)) {
    const blogPostMd = getPostBySlug(slug);
    return (
      <>
        <BlogPage {...blogPostMd} />
      </>
    );
  } else {
    return <div>Post Not Found</div>;
  }
}

export default BlogPost;
