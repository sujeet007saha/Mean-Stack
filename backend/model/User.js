const mongoose =  require("mongoose");

const userSchema = new mongoose.Schema({
    email: String,
    firstname: String,
    lastname: String,
    employeeno: String,
    gpnno: String,
    projectname: String,
    assetno: String,
    contactno: String,
    address: String,
    photo: String,
    password: String,
    timesheet: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Timesheet"
    }]
});

module.exports = mongoose.model("User", userSchema)