import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/archive">Archive</Link></li>
        <li><Link href="/20210218.html">Post</Link></li>
        <li><Link href="/categories/TypeScript">Category</Link></li>
        <li><Link href="/tags/TypeScript">Tag</Link></li>
      </ul>
    </div>
  )
}
