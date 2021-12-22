import React, { useEffect } from 'react'

export default function User() {
  useEffect(() => {
    fetch('/api/user/post-user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'kai',
        username: 'vampire',
        password: '1234',
        dob: '1998-06-06',
        gender: 'female',
        country: 'Canada',
      }),
    })

    fetch('/api/user/update-user', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: '_id',
        name: 'krystal',
        username: 'vampire-max',
        password: '12345',
        dob: '1998-06-01',
        gender: 'male',
        country: 'USA',
      }),
    })

    fetch('/api/user/get-user', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    fetch('/api/user/delete-user', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: '_id',
      }),
    })
  })

  return <div>User</div>
}
