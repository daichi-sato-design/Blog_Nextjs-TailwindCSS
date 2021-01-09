import Layout from "../components/Layout";
import Post from "../components/post";
import { getAllPostsData } from "../lib/posts";
import { NextPage } from "next";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";

interface PROPS {
  posts: POST[];
}
interface POST {
  id: string;
  title: string;
}

const Blog: NextPage<PROPS> = ({ posts }) => {
  return (
    <Layout title="Blog">
      <ul className="m-10">
        {posts && posts.map((post) => <Post key={post.id} post={post} />)}
      </ul>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPostsData();
  return {
    props: { posts },
  };
};

export default Blog;
