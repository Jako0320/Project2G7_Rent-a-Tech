const router = require("express").Router()

router.get("/",(req,res)=>{
  res.render("landing")
})

router.get("/userlogin",(req,res)=>{
  res.render("userlogin")
})

router.get("/techlogin",(req,res)=>{
  res.render("techlogin")
})