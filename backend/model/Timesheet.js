const mongoose =  require("mongoose");


const timesheetSchema = new mongoose.Schema({
    employee:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    time: String,
    date: String,
    efforts: String
})


module.exports = mongoose.model("Timesheet", timesheetSchema);