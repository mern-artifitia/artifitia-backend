// const multer = require('multer');
// const path = require('path');

// // Set up multer for file upload
// const storage = multer.diskStorage({
//     destination: './images', // Destination directory for uploaded files
//     filename: (req, file, callback) => {
//       callback(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
//     },
//   });
  
//   exports.store = multer({ storage });