var mongoose = require(`mongoose`);
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    content: String
});

let Item = mongoose.model(`item`, ItemSchema);

module.exports = Item;