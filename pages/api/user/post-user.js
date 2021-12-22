import nextConnect from 'next-connect'

export default nextConnect().post((req, res) => {
  const validation = req.body.name && req.body.username && req.body.password
  if (validation) {
    new User({
      name: req.body.name,
      username: req.body.username,
      password: req.body.password,
      dob: req.body.dob,
      gender: req.body.gender,
      country: req.body.country,
    })
      .save()
      .then((newUser) => {
        console.log(newUser)
        res.json({ message: 'successfully' })
      })
      .catch((err) => {
        console.log(err)
        res.status(500).json({ message: 'something went wrong' })
      })
  } else {
    res.status(500).json({
      code: 400,
      message: 'name, username and password is required',
    })
  }
})
