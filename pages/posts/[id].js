import Link from "next/link";
import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

const Post = ({ post }) => {
  if (!post) {
    return <div className="text-sm">Loading...</div>;
  }
  return (
    <Layout title={post.title}>
      <p className="m-4">
        {"ID : "}
        {post.id}
      </p>

      <p className="mb-8 text-xl font-bold">{post.title}</p>
      <p className="max-w-xl px-10">{post.body}</p>

      <Link href="/blog-page">
        <div className="flex items-center cursor-pointer mt-12">
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            />
          </svg>
          <span>Back to blog-page</span>
        </div>
      </Link>
    </Layout>
  );
};

export default Post;

export async function getStaticPaths() {
  const paths = await getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { post: post } = await getPostData(params.id);
  return {
    props: {
      post,
    },
  };
}
