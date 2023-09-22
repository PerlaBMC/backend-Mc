const {Schema, model} = require ("mongoose");

const userSchema = Schema ({
        name: {
        type: String,
        required: [true, "El nombre es obligatiro"],
    },

    password: {
        type: String,
        required: [true, "Password obligatorio"],
    },

    email: {                                                                                                    
        type: String,
        required: [true, "E-mail obligatorio"],
        unique: true,
    },

    phone: {
        type: Number
    },

    proveedor: {
        type: String,
    }
})

userSchema.methods.toJSON = function () {
    const {__v, _id, ...rest} = this.toObject();
    rest.id = _id;
    return rest;
};

module.exports = model ("user", userSchema, "users");