import { useRouter } from 'next/router'

const Categories = () => {
  const router = useRouter()
  const { slug } = router.query

  return <p>Categories: {slug}</p>
}

export default Categories
