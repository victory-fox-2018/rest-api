module.exports = {
  isHim: (req, res, next) => {
    if(req.params.id === req.decoded.id) {
      next()
    }else {
      res.status(403).json({error: `You are not allowed to access user ${req.params.id}`})
    }
  }
}