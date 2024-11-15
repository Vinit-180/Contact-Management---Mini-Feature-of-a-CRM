const express=require("express");
const router=express.Router();
const  contactController=require("../controllers/contactController");

router.post("/contacts",contactController.addContacts);
router.get("/contacts",contactController.getContacts);
router.get("/contacts/:id",contactController.getContactsById);
router.put("/contacts/:id",contactController.updateContact);
router.delete("/contacts/:id",contactController.deleteContact);

module.exports=router;