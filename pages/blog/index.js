import React, { useEffect } from 'react'

export default function Blog() {
  useEffect(() => {
    // axios({
    //   url: '/api/post-data',
    //   method: 'post',
    //   data: {
    //     username: 'asd',
    //     password: 'qwe',
    //   },
    // })

    fetch('/api/blog/post-blog', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: 'title',
        description: 'description',
        author: 'author',
      }),
    })

    fetch('/api/blog/update-blog', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: '_id',
        title: 'title1',
        description: 'description1',
        author: 'author1',
      }),
    })

    fetch('/api/blog/get-blog', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    fetch('/api/blog/delete-blog', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: '_id',
      }),
    })
  })

  return <div>Blog</div>
}
