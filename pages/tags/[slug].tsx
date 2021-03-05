import { useRouter } from "next/router";
import Layout from "../../components/layout";

const Tags = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Layout>
      <p>Tags: {slug}</p>
    </Layout>
  );
};

export default Tags;
