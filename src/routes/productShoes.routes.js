const Router = require ("express");
const { getShoes, postShoes, putShoes, deleteShoes } = require("../controllers/productShoes.ctrl");

const router = Router()

router.get ("/", getShoes);
router.post("/", postShoes);
router.put ("/:id", putShoes);
router.delete ("/:id", deleteShoes);

module.exports = router;
