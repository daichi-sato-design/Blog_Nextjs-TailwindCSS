import Link from "next/link";
import { NextComponentType, NextPageContext } from "next";

interface Attributes {
  post: POST;
}

interface POST {
  id: string;
  title: string;
}

const Post: NextComponentType<NextPageContext, {}, Attributes> = ({ post }) => {
  return (
    <div>
      <span>{post.id}</span>
      {":"}
      <Link href={`/posts/${post.id}`}>
        <span className="cursor-pointer text-blue-500 border-blue-500 hover:bg-gray-200">
          {post.title}
        </span>
      </Link>
    </div>
  );
};

export default Post;
