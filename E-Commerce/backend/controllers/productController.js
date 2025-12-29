const productModel=require("../models/product")

exports.getProducts=async(req,res,next)=>{
    const query=req.query.keyword?{"product.name":{
        $regex:req.query.keyword,
        $options:'i'
    }}:{};
    const products= await productModel.find(query);
    res.status(200).json({
        status:"success",
        message:"get method success",
        products
    })
}

exports.getSingleProduct=async (req,res,next)=>{
    console.log(req.params.id);
    try{
    const product= await productModel.findById(req.params.id)
    res.status(200).json({
        status:"success",
        message:"get Single method success",
        product
    })
    }
    catch(err)
    {
        res.status(404).json({
            status:"Product not found"
        })
    }
}