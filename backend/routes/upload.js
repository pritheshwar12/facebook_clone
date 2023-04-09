const express = require("express");
const {uploadImages,listImages } = require("../controllers/upload");
const { authUser } = require("../middlwares/auth");
const ImageUpload=require("../middlwares/imageUpload")
const router = express.Router();

router.post("/uploadImages",authUser ,ImageUpload,uploadImages);
router.get("/listImages",listImages);

module.exports = router;
