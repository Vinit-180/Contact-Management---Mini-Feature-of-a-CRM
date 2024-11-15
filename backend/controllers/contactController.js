const contactSchema=require("../models/contactSchema");


module.exports.addContacts=async (req,res)=>{
    try{
        console.log(req.body);
        const existingContact = await contactSchema.findOne({ email: req.body.email });
        if (existingContact) {
            return res.status(409).json({ message: "Contact already exists" }); // 409 - for conflicting data
        }
        
        await contactSchema.create(req.body).then((data)=>{
            res.status(201).json({message:"Contact Created Successfully",data:data});
        }).catch((err)=>{
            res.status(400).json({message:"Error In Creating Contact",err:err});
        })

    }
    catch(err){
        res.status(500).json({message:"Internal Server Error",err:err});
    }
}


module.exports.getContacts=async (req,res)=>{
    try{
        const data = await contactSchema.find({enable:true});
        res.status(200).json({message:"Contacts retrieved successfully", data: data});
    }
    catch(err){
        console.log(err);
        res.status(500).json({message:"Internal Server Error",err:err});
    }
}

module.exports.getContactsById=async (req,res)=>{
    try{
        const { id } = req.params;
        await contactSchema.findById(id).then((data)=>{
            res.status(200).json({message:"Contacts retrieved successfully", data: data});
        }).catch((err)=>{
            return res.status(404).json({ message: "Contact not found" ,err:err});
        })
    }
    catch(err){
        console.log(err);
        res.status(500).json({message:"Internal Server Error",err:err});
    }
}
module.exports.updateContact=async (req,res)=>{
    const { id } = req.params;
    console.log(req.body,id);
    try{
        const contact = await contactSchema.findById(id);
        console.log(contact)
        if (!contact || !contact.enable) {
            return res.status(404).json({ message: "Contact not found" });
        }

        await contactSchema.findByIdAndUpdate(id, req.body, { new: true }).then((data)=>{
            res.status(200).json({message:"Contact updated successfully",data:data});
        }).catch((err)=>{
            res.status(400).json({message:"Error In Updating the Contact",err:err});
        })
    }
    catch(err){
        res.status(500).json({message:"Internal Server Error",err:err});
    }
}

module.exports.deleteContact=async (req,res)=>{
    const { id } = req.params;
    try{
        await contactSchema.findByIdAndDelete(id).then((data)=>{
            res.status(200).json({message:"Contact deleted successfully"}) 
        }).catch((err)=>{
            res.statys(400).json({message:"Error In Deleting the Contact",err:err})
        })

        // if (!contact || !contact.enable) {
        //   return res.status(404).json({ message: "Contact not found" });
        // }

        // contact.enable = false;
        // await contact.save();
          
        // res.status(200).json({message:"Contact deleted successfully"});
    }
    catch(err){
        res.status(500).json({message:"Internal Server Error",err:err});
    }
}
