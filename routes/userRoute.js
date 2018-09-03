const router = require('express').Router()
const { getAll, getOne, update, deleteOne, create } = require('../controllers/userController')
const isLogin = require('../middlewares/isLogin')
const isAdmin = require('../middlewares/isAdmin')

router.get('/', isAdmin, getAll)
router.get('/:id', isLogin, getOne)
router.post('/', isAdmin, create)
router.put('/:id', isLogin, update)
router.delete('/:id', isAdmin, deleteOne)

module.exports = router