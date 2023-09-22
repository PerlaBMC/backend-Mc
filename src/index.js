require ("dotenv").config();
const express = require("express");
const app = express();
const {dbConnection} = require ("./database/confing")
const cors = require ("cors")

dbConnection ();
app.use (cors());
app.use (express.json());

app.get ("/api", (req, res) => {
    return res.json ({
        msg: "welcome to my Api"
    });
});

app.use ("/api/usuarios", require ("./routes/users.routes"));
app.use ("/api/auth", require ("./routes/auth.routes"));
app.use ("/api/shoes", require ("./routes/productShoes.routes"));
app.use ("/api/close", require ("./routes/productClose.routes"));
app.use ("/api/jeweler", require ("./routes/productJeweler.routes"));


app.listen (process.env.PORT, () => {
    console.log (`Servidor vivo en el puerto ${process.env.PORT}`);
});