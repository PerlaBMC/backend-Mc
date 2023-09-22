const User = require ("../models/users")

const obtenerUsuario = async (req,res) => {
try {
    const user = await User.find ()

    return res.json ({
        ok: true, 
        msg: "usuario obtenido",
        data: user,
    });
} catch (error) {
    return res.status (500).json ({
        ok: false, 
        msg: "error en el servidos get",
        data: {}
    })
}
}

const crearUsuario = async (req, res) => {
 try {
    const {name, password, email, phone, proveedor} = req.body

    const nuevoUsuario = {
        name,
        password,
        email,
        phone,
        proveedor
    }

    const newUser = await User (nuevoUsuario).save()
    return res.json ({
        ok: true,
        msg: "usuario creado",
        data: newUser
    });
 } catch (error) {
    return res.status (500).json ({
        ok: false,
        msg: "error en el servidor post",
        data: {}
    });
 }
}

const actualizarUsuario = async (req, res) =>{
try {
    const {id} = req.params;
    const {name, password, email, phone, proveedor} = req.body;

    const informacionNueva = {
        name, 
        password,
        email,
        phone,
        proveedor
    }

    const usuarioActualizado = await User.findByIdAndUpdate (id,informacionNueva, {new:true})
    return res.json ({
        ok: true,
        msg: "usuario actualizado",
        data: usuarioActualizado
    })
    
} catch (error) {
    return res.status (500).json ({
        ok:false,
        msg: "error en el servidor put",
        data: {}
    })
}
}

const eliminarUsuario = async (req, res) => {
    try {

        const {id} = req.params;

        const usuarioEliminado = await User.findByIdAndRemove(id);

        return res.json ({
            ok: true,
            msg: "usuario eliminado",
            data: usuarioEliminado
        })
        
    } catch (error) {
        return res.status (500).json ({
            ok: false,
            msg: "error en el servidor delete",
            data: {}
        })
    }
} 

module.exports = {
    obtenerUsuario,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario
}