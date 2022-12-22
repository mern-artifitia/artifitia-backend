const multer = require('multer');
const path = require('path');

/* File upload*/
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './images/banner-images');
    },
  
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  });
  
  exports.store = multer({ storage: storage })