const mongoose = require('mongoose');

let DaySchema = new mongoose.Schema({
    day: Number,
    '0': Number,
    '5': Number,
    '6': Number,
    '7': Number,
    '8': Number,
    '9': Number,
    '10': Number,
    '11': Number,
    '12': Number,
    '13': Number,
    '14': Number,
    '15': Number,
    '16': Number,
    '17': Number,
    '18': Number,
    '19': Number,
    '20': Number,
    '21': Number,
    '22': Number,
    '23': Number
});

module.exports = mongoose.model('Day', DaySchema);