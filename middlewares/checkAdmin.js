function checkAdmin(req, res, next) {
  const user = req.decoded

  if (user.role === 'admin') {
    next()
  } else {
    res.status(500).json({
      message: 'unauthorized'
    })
  }
}

module.exports = checkAdmin
