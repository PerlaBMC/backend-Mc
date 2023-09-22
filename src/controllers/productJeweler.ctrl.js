const Jeweler = require ("../models/productJeweler")

const getJeweler = async (req,res) => {
try {
    const jewelerCollection = await Jeweler.find ()

    return res.json ({
        ok: true, 
        msg: "producto obtenido",
        data: jewelerCollection,
    });
} catch (error) {
    return res.status (500).json ({
        ok: false, 
        msg: "error en el servidos get",
        data: {}
    })
}
}

const postJeweler = async (req, res) => {
 try {
    const {nombre, modelo, precio, img, color, proveedor} = req.body

    const postCollection = {
       nombre,
       modelo,
       precio,
       img,
       color,
       proveedor
    }

    const newCollection = await Jeweler (postCollection).save()
    return res.json ({
        ok: true,
        msg: "colección creado",
        data: newCollection
    });
 } catch (error) {
    return res.status (500).json ({
        ok: false,
        msg: "error en el servidor",
        data: {}
    });
 }
}

const putJeweler = async (req, res) =>{
try {
    const {id} = req.params;
    const {nombre, modelo, precio, img, color, proveedor} = req.body;

    const newInformation = {
        nombre, 
        modelo, 
        precio, 
        img, 
        color, 
        proveedor
    }

    const putCollection = await Jeweler.findByIdAndUpdate (id,newInformation, {new:true})
    return res.json ({
        ok: true,
        msg: "colección actualizada",
        data: putCollection
    })
    
} catch (error) {
    return res.status (500).json ({
        ok:false,
        msg: "error en el servidor put",
        data: {}
    })
}
}

const deleteJeweler = async (req, res) => {
    try {

        const {id} = req.params;

        const deletCollection = await Jeweler.findByIdAndRemove(id);

        return res.json ({
            ok: true,
            msg: "colección eliminada",
            data: deletCollection
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
getJeweler,
postJeweler,
putJeweler,
deleteJeweler
}