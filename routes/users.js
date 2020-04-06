var express = require('express');
var router = express.Router();
const multer = require('multer');
const path = require('path')


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join('uploads'))
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})
 
var upload = multer({ storage: storage })


const userController = require('../controllers/userController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/criar', userController.registroForm);
router.post('/criar', upload.any(), userController.salvarForm);

router.get('/login', userController.loginForm);
router.post('/login', userController.logarUsuario);

module.exports = router;
