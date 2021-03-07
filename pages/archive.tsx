import { GetStaticProps } from "next";
import fs from "fs-extra";
import path from "path";
import Layout from "../components/layout";

const Archive = ({ archives }) => {
  return (
    <Layout>
      <p>Archive page</p>
      <ul>
        {archives.map((archive) => (
          <li>
            <p>{archive.title}</p>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Archive;

export const getStaticProps: GetStaticProps = async () => {
  const dataPath = path.join(process.cwd(), "data/posts.json");
  const posts = fs.readJsonSync(dataPath);

  return {
    props: {
      archives: posts,
    },
  };
};
