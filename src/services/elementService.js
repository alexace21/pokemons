const Element = require('../models/Element');

exports.getAll = () => {
    let elements = Element.find().lean();

    return elements;
};

exports.getOne = (elementId) => Element.findById(elementId).lean();

exports.create = (element) => Element.create(element);