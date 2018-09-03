const router = require('express').Router();
const { findAll,findOne,remove,create,update } = require('../controller/userController');

router.get('/',findAll);
router.post('/',create);
router.get('/:id',findOne);
router.delete('/:id',remove);
router.put('/:id',update);



module.exports = router;