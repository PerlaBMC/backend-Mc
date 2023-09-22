const Close = require ("../models/productClose")

const getClose = async (req,res) => {
try {
    const closeCollection = await Close.find ()

    return res.json ({
        ok: true, 
        msg: "producto obtenido",
        data: closeCollection,
    });
} catch (error) {
    return res.status (500).json ({
        ok: false, 
        msg: "error en el servidos get",
        data: {}
    })
}
}

const postClose = async (req, res) => {
 try {
    const {name,module,cost,proveedor} = req.body

    const postCollection = {
        name,
        module,
        cost,
        proveedor
    }

    const newCollection = await Close (postCollection).save()
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

const putClose = async (req, res) =>{
try {
    const {id} = req.params;
    const {name,module,cost,proveedor} = req.body;

    const newInformation = {
        name,
        module,
        cost,
        proveedor
    }

    const putCollection = await Close.findByIdAndUpdate (id,newInformation, {new:true})
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

const deleteClose = async (req, res) => {
    try {

        const {id} = req.params;

        const deletCollection = await Close.findByIdAndRemove(id);

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
getClose,
postClose,
putClose,
deleteClose
}