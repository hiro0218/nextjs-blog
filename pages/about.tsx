import fs from "fs-extra";
import path from "path";
import Layout from "../components/layout";

const About = ({ page }) => {
  return (
    <Layout>
      <h1>{page.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: `${page.content}`,
        }}
      />
    </Layout>
  );
};

export default About;

export const getStaticProps = async (context) => {
  const dataPath = path.join(process.cwd(), "_source/pages.json");
  const pages = fs.readJsonSync(dataPath);
  const postData = pages.find((page: any) => page.slug === "about");

  return {
    props: {
      page: postData,
    },
  };
};
