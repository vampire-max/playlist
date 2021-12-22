import nextConnect from 'next-connect'

export default nextConnect().get((req, res) => {
  res.json({ title: 'get', description: 'getMethod' })
})
