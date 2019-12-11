const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Service = new Schema({
    name: {
        type: String,
        required: true
    },
    picture: String,
    description: String,
    category: {
        type: String,
        enum:['Installation','Repairs','Supply']
    }
});

module.exports = mongoose.model('Service', Service);