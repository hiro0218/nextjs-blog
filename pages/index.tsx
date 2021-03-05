import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/archive">Archive</Link>
          </li>
          <li>
            <Link href="/20210218.html">Post</Link>
          </li>
          <li>
            <Link href="/categories/TypeScript">Category</Link>
          </li>
          <li>
            <Link href="/tags/TypeScript">Tag</Link>
          </li>
        </ul>
      </Layout>
    </div>
  );
}
