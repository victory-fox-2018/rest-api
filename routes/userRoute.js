const router = require('express').Router()
const { getAll, getOne, update, deleteOne, create } = require('../controllers/userController')

router.get('/', getAll)
router.get('/:id', getOne)
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', deleteOne)

module.exports = router