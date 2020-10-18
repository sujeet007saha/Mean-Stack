const mongoose =  require("mongoose");

const learningSchema = new mongoose.Schema({
    courseName: String,
    courseImg: String,
    courseLink: String
})

module.exports = mongoose.model("Learning", learningSchema)