import fs from "fs-extra";
import path from "path";
import { useRouter } from "next/router";
import Layout from "../components/layout";

const Post = ({ blog }) => {
  const router = useRouter();
  const { post_slug } = router.query;

  return (
    <Layout>
      <h1>{blog.title}</h1>
      <p>Post[post_slug]: {post_slug}</p>
    </Layout>
  );
};

export default Post;

export const getStaticPaths = async () => {
  const dataPath = path.join(process.cwd(), "_source/archives.json");
  const posts = fs.readJsonSync(dataPath);
  const paths = posts.map((post) => `/${post.path}`);

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const dataPath = path.join(process.cwd(), "_source/posts.json");
  const posts = fs.readJsonSync(dataPath);
  const slug = context.params.post_slug;

  const postData = posts.find((post: { path: string }) => {
    return post.path === slug;
  });

  return {
    props: {
      blog: postData,
    },
  };
};
