const router = require("express").Router();

const Shop = require("../controller/shopController");

const autentikasi = require("../middlewares/authenticate");
const checkRole = require("../middlewares/checkRole");

router.post("/", Shop.createShop);
router.get("/", Shop.findShops);
router.get("/:id", Shop.findShopById);
router.patch("/:id", Shop.updateShop);
router.delete("/:id", Shop.deleteShop);

module.exports = router;
