const {Router} = require ("express")
const {obtenerUsuario, crearUsuario, actualizarUsuario, eliminarUsuario} = require ("../controllers/users.ctrl")

const router = Router();

router.get ("/", obtenerUsuario);
router.post ("/", crearUsuario);
router.put ("/:id", actualizarUsuario);
router.delete ("/:id", eliminarUsuario);

module.exports = router;