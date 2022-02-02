const { Router } = require('express');

const { UserGet, UserDelete, UserPost, UserPut } = require('../Controller/user.controller');

const router = Router();




router.get('/', UserGet);

router.post('/', UserPost);

router.put('/:id', UserPut);

router.delete('/', UserDelete);





module.exports = router;

