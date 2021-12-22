// export default function handler(req, res) {
//   res.status(400).json({ name: 'John Doe' })
// }

import nextConnect from 'next-connect'

export default nextConnect({
  onError(err, req, res) {
    console.log(err)
    res.status(500).json({ message: 'Internal error' })
  },
  onNoMatch(req, res) {
    res
      .status(405)
      .json({ message: `$(req.method) Method is not allowed` })
      .get((req, res) => {
        res.json({ message: 'get method' })
      })
      .post((req, res) => {
        res.json({ message: 'post method' })
      })
  },
})
