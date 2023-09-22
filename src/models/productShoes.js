const {Schema, model} = require ("mongoose");

const shoesSchema = Schema ({
    name: {
        type: String,
    },

    module: {
        type: String,
    },

    cost: {
        type: Number
    },

    proveedor: {
        type: String,
    }
})

shoesSchema.methods.toJSON = function () {
    const {__v, _id, ...rest} = this.toObject();
    rest.id = _id;
    return rest;
};

module.exports = model ("shoe", shoesSchema, "shoes");