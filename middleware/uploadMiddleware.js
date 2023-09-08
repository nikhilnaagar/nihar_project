const multer = require('multer');
const aws = require('aws-sdk');
const multerS3 = require('multer-s3');
const path = require('path');

const s3 = new aws.S3({
  accessKeyId: 'AKIA5IZO35VGMABYEJG4',
  secretAccessKey: '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',
  region: 'ap-south-1',
});


const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'property12',
    acl: 'public-read',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: function (req, file, cb) {
      const uniquePrefix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      const ext = file.originalname.split('.').pop();
      cb(null, `uploads/${uniquePrefix}.${ext}`);
    },
  }),
});

module.exports = upload;