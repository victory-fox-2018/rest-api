function isAdminOrAuthUser(req,res,next) {
  console.log(req.decoded.id, req.params.id)
  if (req.decoded.role === 'admin' || req.decoded.id === Number(req.params.id)) {
    next();
  } else {
    res.status(403).json({
      message: 'only admin or authenticated user can execute this page!'
    })
  }
}

module.exports = isAdminOrAuthUser;