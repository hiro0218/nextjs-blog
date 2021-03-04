import { useRouter } from 'next/router'

const Tags = () => {
  const router = useRouter()
  const { slug } = router.query

  return <p>Tags: {slug}</p>
}

export default Tags
