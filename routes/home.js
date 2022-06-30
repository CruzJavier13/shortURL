const express = require('express');
const {readURL,addURL,deleteURL,urlEdit,urlEditForm,redirectURl} = require('../controllers/homeController');
const urlValid = require('../middlewares/urlValid');
const router = express.Router();

router.get('/',readURL);

router.post('/',urlValid,addURL);
router.get('/delete/:id',deleteURL)
router.get('/edit/:id',urlEdit);
router.post('/edit/:id',urlValid,urlEditForm);
router.get('/:shortURL',redirectURl);
module.exports = router;