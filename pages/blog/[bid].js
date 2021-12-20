import React from 'react'
import { useRouter } from 'next/router'

const blog = () => {
  const router = useRouter()
  const { bid } = router.query
  return <div>{bid}</div>
}

export default blog
