  const router = require('express').Router();

  const path = require('path');

  multer = require('multer');
  mongoose = require('mongoose');

  //upload file directory path
  const DIR = './routes/uploads/';

  //storage setting
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, DIR);
    },
    filename: (req, file, cb) => {
      const fileName = file.originalname.toLowerCase().split(' ').join('-');
      cb(null, fileName)
    }
  });
  
  // Multer Mime Type Validation
  var upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 5
    },
    fileFilter: (req, file, cb) => {
      if (file.originalname.match(/\.(pdf)$/)) {
        cb(null, true);
      } else {
        cb(null, false);
        return cb(new Error('Only .pdf format allowed!'));
      }
    }
  });

  let Policy = require('../model/Policy');

  //Create policies

  router.post('/create-policy', upload.single('avatar'), (req, res, next) => {

    console.log(`${req.body.name} ${req.file.fileName}`);

    const policy = new Policy({
      name: req.body.name,
      avatar: req.file.filename
    });
    policy.save().then(result => {
      console.log(result);
      res.json({
        message: "file uploaded successfully!",
        policyCreated: {
          name: result.name,
          avatar: result.filename
        }
      })
    }).catch(err => {
      console.log(err),
        res.json({
          error: err
        });
    });
  });
  
  router.get("/view-policy", async (req, res, next) => {
    try {
      const policies = await Policy.find();
      res.json(policies);
    } catch (error) {
      res.json({message: error});
  }
  });

module.exports = router;

//.status(201)  status(500).