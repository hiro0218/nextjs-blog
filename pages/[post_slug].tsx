import { useRouter } from "next/router";
import Layout from "../components/layout";

const Post = () => {
  const router = useRouter();
  const { post_slug } = router.query;

  return (
    <Layout>
      <p>Post[post_slug]: {post_slug}</p>
    </Layout>
  );
};

export default Post;
