import React, { useEffect } from 'react'
import { api } from '../api/axios'
import axios from 'axios'

export default function Blog() {
  useEffect(() => {
    axios({
      url: 'http://localhost:3001',
      method: 'post',
      data: {
        title: 'bar',
        description: 'bar',
        author: 123,
      },
    })
  })

  // axios({
  //   url: 'https://dog.ceo/api/breeds/list/all',
  //   method: 'get',
  //   data: {
  //     foo: 'bar'
  //   }
  // })

  return <div>Blog</div>
}
