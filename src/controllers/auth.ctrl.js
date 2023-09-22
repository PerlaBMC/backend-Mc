const user = require ("../models/users");
const bcrypt = require ("bcrypt");
const { generarJWT } = require ("../helpers/jwt.helper");


const registrarUsuario = async (req, res) => {
    try {
    const {name, password, email}= req.body;

const usuario = await user.findOne ({name: name});

if (usuario) {
    return res.status(400).json({
        ok: false, 
        msg: `El usuaruio ${name} ya existe`,
        data: {}
    });
}

    const salt = bcrypt.genSaltSync (10)                

    const nuevo_usuario = {
        name,
        password: bcrypt.hashSync(password, salt),
        email,
    };

    const new_user = await user (nuevo_usuario).save();

    const token = await generarJWT(new_user.id)

 return res.json ({
    ok: true, 
    msg: "Usuario registrado",
    data: new_user,
    token
 })
} catch (error) {
    return res.status (500).json ({
        ok:false,
        msg: "error en el servidor jwt",
        data: {},
    })
}
};

const iniciarSesion = async (req, res) => {
    try {
const { name, password, email} = req.body;

const usuario = await user.findOne ({name: name})

if(!usuario) {
return res.status(400).json ({
    ok: false, 
    msg: "Usuario o password incorrectooo",
    data: {},
});
}

const valiPassword = bcrypt.compareSync(password, usuario.password);

if (!valiPassword) {
    return res.status(400).json({
        ok: false, 
        msg: "Usuario o password incorrecto",
        data: {},
    })
}

const valiEmail = await user.findOne ({email: email})


if(!valiEmail) {
    return res.status(400).json ({
        ok: false, 
        msg: "email incorrectooo",
        data: {},
    });
    }

const token = await generarJWT (usuario.id)

    return res.json ({
        ok: true,
        msg: "acceso correcto",
        data: usuario,
        token
    })
} catch (error) {
    return res.status(500).json ({
        ok: false, 
        msg: "Error en el servidor",
        data: {}
    })
}
}


const renovarToken = async (req, res) => {
try {
     
    const {usuario} = req;

    const token = await generarJWT (usuario.id);

    return res.json ({
        ok:true,
        msg: "token renovado", 
        data: usuario,
        token
    })
} catch (error) {
    return res.status(401).json ({
        ok: false,
        msg: "Error en el servidor",
        data: {}
    })
    
}
  };

module.exports = {
    registrarUsuario, 
    iniciarSesion, 
    renovarToken
}