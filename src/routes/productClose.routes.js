const Router = require ("express");
const {getClose, postClose, putClose, deleteClose} = require ("../controllers/productclose.ctrl");

const router = Router() 

router.get ("/", getClose);
router.post ("/", postClose);
router.put ("/:id", putClose);
router.delete ("/:id", deleteClose);

module.exports = router