import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { post_slug } = router.query

  return <p>Post[post_slug]: {post_slug}</p>
}

export default Post
