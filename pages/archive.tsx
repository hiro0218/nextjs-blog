import { GetStaticProps } from "next";
import fs from "fs-extra";
import path from "path";
import Link from "next/link";
import Layout from "../components/layout";

const Archive = ({ archives }) => {
  return (
    <Layout>
      <p>Archive page</p>
      <ul>
        {archives.map((archive, index: number) => (
          <li key={index}>
            <Link href={"/" + archive.path}>{archive.title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Archive;

export const getStaticProps: GetStaticProps = async () => {
  const dataPath = path.join(process.cwd(), "_source/archives.json");
  const posts = fs.readJsonSync(dataPath);

  return {
    props: {
      archives: posts,
    },
  };
};
