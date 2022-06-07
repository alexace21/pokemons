const mongoose = require('mongoose');

const elementSchema = new mongoose.Schema({
    type: {
        type: String,
        required: [true, 'type of element is required!'],
        min: 3,
    },
    imageUrl: {
        type: String,
        required: [true, 'Image of element is required!'],
        validate: {
            validator: function() {
                return this.imageUrl.startsWith('http');
            }
        }
    },
    pokemon: {
        type: mongoose.Types.ObjectId,
        ref: 'Pokemon'
    }
});

const Element = mongoose.model('Element', elementSchema);

module.exports = Element;