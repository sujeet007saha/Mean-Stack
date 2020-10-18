const router = require('express').Router();
const verify = require("../routes/verifyToken");

router.post('/', async (req, res) => {

    console.log(req.body[0].issueCat);
    console.log(req.body[0].issueDesc);
    console.log(req.body[1].email);
    console.log(req.body[1].empName);
    console.log(req.body[1].empNo)
    const no = Math.floor(Math.random() * 899999 + 100000)
    const ticketId = `INC${no}`;
    res.json(ticketId);
     
});

module.exports = router;