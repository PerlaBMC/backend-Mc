const mongoose = require ("mongoose");

const dbConnection = () => {
try {
    mongoose.connect(process.env.MONGODB_CNN, {
        useNewUrlParser: true,
        useUnifiedTopology: true, 
    });
    console.log ("Base da datos conectada")
} catch (error) {
    console.log (error)
    throw new Error ("Error al iniciar la base de datos");
    }
}

module.exports = {
    dbConnection,
}           