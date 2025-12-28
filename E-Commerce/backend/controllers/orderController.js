const orderModel=require("../models/order")
exports.createOrder=async(req,res,next)=>{
    const cardItems=req.body;
    const amount=Number(cardItems.reduce((acc,item)=>(acc+item.product.price*item.qty),0)).toFixed(3);
    console.log(amount);
    const status="pending";
    const order=await orderModel.create({cardItems,amount,status})
    res.json({
        status:"success",
        message:"Order post method",
        order
    })
}