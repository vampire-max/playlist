import nextConnect from 'next-connect'

export default nextConnect().post((req, res) => {
  const validationField =
    req.body.title && req.body.description && req.body.author

  if (validationField) {
    new Blog({
      title: req.body.title,
      description: req.body.description,
      author: req.body.author,
    })
      .save()
      .then((newBlog) => {
        console.log(newBlog)
        res.json(newBlog)
        // res.json({ message: 'successfully' })
      })
      .catch((err) => {
        console.log(err)
        res.status(500).json({ message: 'something went wrong' })
      })
  } else {
    res.status(500).json({
      code: 400,
      message: 'title, description and author is required',
    })
  }
})
