import nextConnect from 'next-connect'

export default nextConnect().patch((req, res)=> {
  Blog.findOneAndUpdate({ _id: req.params.id }, { ...req.body }, { new: true })
  .then(() => res.json({ message: 'success' }))
  .catch((err) => {
    res.status(400).json({ message: 'fail' })
})
