const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var jobSchema = new mongoose.Schema({
    position_name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    requirements: {
        type: String,
        required: true,
    },
    phase: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Phase",
    }],
    seq_num: [{
        type: Array,
    }],
},{
    timestamps:true,
});

//Export the model
module.exports = mongoose.model('Job', jobSchema);