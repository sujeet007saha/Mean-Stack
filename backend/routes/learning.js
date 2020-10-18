const router = require('express').Router();

const Learning = require('../model/Learning');

const verify = require("../routes/verifyToken");

router.post('/',  async (req, res) => {

    const learning = new Learning({
        courseName: req.body.courseName,
        courseImg: req.body.courseImg,
        courseLink: req.body.courseLink
    });
    try {
        const savedLearning = await learning.save();
        res.send(savedLearning);
    } catch (error) {
        res.status(400).send(error);
    }
});


router.get('/', verify, async (req, res) => {
    try {
        const learnings = await Learning.find();
        res.json(learnings);
    } catch (error) {
        res.json({message: error});
    }
});

module.exports = router;