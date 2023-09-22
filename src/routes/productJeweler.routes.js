const Router = require ("express");
const {getJeweler, postJeweler, putJeweler, deleteJeweler} = require ("../controllers/productJeweler.ctrl");

const router = Router();

router.get ("/", getJeweler);
router.post ("/", postJeweler);
router.put ("/:id", putJeweler);
router.delete ("/:id", deleteJeweler);

module.exports = router;  