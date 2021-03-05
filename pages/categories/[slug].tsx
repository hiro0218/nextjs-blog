import { useRouter } from "next/router";
import Layout from "../../components/layout";

const Categories = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Layout>
      <p>Categories: {slug}</p>
    </Layout>
  );
};

export default Categories;
