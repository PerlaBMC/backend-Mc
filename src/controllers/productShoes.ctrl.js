const Shoes = require ("../models/productShoes")

const getShoes = async (req,res) => {
try {
    const shoesCollection = await Shoes.find ()

    return res.json ({
        ok: true, 
        msg: "producto obtenido",
        data: shoesCollection,
    });
} catch (error) {
    return res.status (500).json ({
        ok: false, 
        msg: "error en el servidos get",
        data: {}
    })
}
}

const postShoes = async (req, res) => {
 try {
    const {name,module,cost,proveedor} = req.body

    const postCollection = {
        name,
        module,
        cost,
        proveedor
    }

    const newCollection = await Shoes (postCollection).save()
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

const putShoes = async (req, res) =>{
try {
    const {id} = req.params;
    const {name,module,cost,proveedor} = req.body;

    const newInformation = {
        name,
        module,
        cost,
        proveedor
    }

    const putCollection = await Shoes.findByIdAndUpdate (id,newInformation, {new:true})
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

const deleteShoes = async (req, res) => {
    try {

        const {id} = req.params;

        const deletCollection = await Shoes.findByIdAndRemove(id);

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
  getShoes,
  postShoes,
  putShoes,
  deleteShoes
}