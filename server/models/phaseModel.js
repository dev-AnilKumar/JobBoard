const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var phaseSchema = new mongoose.Schema({
    phase_name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    specific_instructions: {
        type: String,
        required: true,
    },
});

//Export the model
module.exports = mongoose.model('Phase', phaseSchema);