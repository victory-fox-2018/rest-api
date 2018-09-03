const isAdmin = (req, res, next) => {
  if(req.decoded.role === 'admin') {
    next();
  } else {
    res.status(403).json({
      message: 'Your are not authorized'
    });
  }
};

module.exports = isAdmin;