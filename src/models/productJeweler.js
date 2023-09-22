const {Schema, model} = require ("mongoose");

const jewelerSchema = Schema ({
    nombre: {
        type: String,
    },

    modelo: {
        type: String,
    },

    precio: {
        type: Number
    },

    img: {
        type: String
    },

    color: {
        type: String
    },

    proveedor: {
        type: String,
    }
})

jewelerSchema.methods.toJSON = function () {
    const {__v, _id, ...rest} = this.toObject();
    rest.id = _id;
    return rest;
};

module.exports = model ("jeweler", jewelerSchema, "jewelers");