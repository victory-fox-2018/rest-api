function isAdmin(req,res,next) {
  if (req.decoded.role === 'admin') {
    next();
  } else {
    res.status(403).json({
      message: 'only admin can see this page!'
    })
  }
}

module.exports = isAdmin;