const router = require('express').Router();
const verify = require("../routes/verifyToken");
const User = require('../model/User');
const Timesheet = require('../model/Timesheet');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


router.post('/', async (req, res) => {

    //checking duplicate email entry into database
    const emailExist = await User.findOne({
        email: req.body.email
    });

    if(emailExist) return res.status(400).send("Email already exist");

    //checking duplicate Employee no entry into the database
    const empNoExist = await User.findOne({
        employeeno: req.body.employeeno
    });

    if(empNoExist) return res.status(400).send("Employee No already exist");


    //Hashed Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        email: req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        employeeno: req.body.employeeno,
        gpnno: req.body.gpnno,
        projectname: req.body.projectname,
        assetno: req.body.assetno,
        contactno: req.body.contactno,
        address: req.body.address,
        photo: req.body.photo,
        password: hashedPassword
    });
    try {
        const savedUser = await user.save();
        res.send(savedUser);
        } catch (error) {
        res.status(400).send(error);
    }
});

//creating Timesheet
router.post('/timesheet/:id',  async (req, res) => {

    const user = await User.findOne({ _id: req.params.id})

        const timesheet = new Timesheet({
            employee: user.id,
            time: req.body.time,
            date: req.body.effortdate,
            efforts: req.body.efforts
        });
    
    try {
        
        const savedTimesheet = await timesheet.save();
        user.timesheet.push(savedTimesheet);
        //res.send(savedTimesheet)
        const savedUser = user.save();
        res.send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

//getting the timesheet
router.get('/timesheet/:id', async (req, res) => {
    try {
        const timesheet = await Timesheet.find({employee: req.params.id})
        res.json(timesheet);
    } catch (error) {
        res.json({message: error});
    }
});

//getting the all Users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.json({message: error});
    }
});
//Single user data
router.get('/:userId', async (req, res) => {
    try {
        user = await User.findById(req.params.userId);
        res.json(user);
    } catch (error) {
        res.json({message: error});
    }
});

//User Login route
router.post('/login', async(req, res) => {
    //checking email id into database
    const user = await User.findOne({
        email: req.body.email
    });
    if(!user) return res.status(400).send("user email id doen't exist");

    //Checking and matching pass from database
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword) return res.status(400).send("Invalid Password");

    //Creating and assigning token
    const token = jwt.sign({_id: user.id }, process.env.TOKEN_SECRET);
    res.header("auth-token", token).send({userId: user.id, userFirstName: user.firstname, userLastName: user.lastname, token: token});
    //res.send(`${user.firstname} ${user.lastname} LoggedIN`)
    console.log(user.id, user.firstname, user.lastname);

});

module.exports = router;