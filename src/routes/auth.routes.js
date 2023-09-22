const Router = require ("express")
const {  registrarUsuario, iniciarSesion, renovarToken} = require ("../controllers/auth.ctrl");
const {validarJWT} = require ("../middlewares/jwt.middleware")


const router = Router();

router.post ("/registrar", registrarUsuario);
router.post ("/login", iniciarSesion);
router.get ("/renew", validarJWT, renovarToken);

module.exports = router;