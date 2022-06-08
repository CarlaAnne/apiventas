const express = require("express");

const router= express.Router();

router.get('/tiendas',(req,res) => {
    const {id, tipo, precio}=req.query
    res.json({
      id:id,
      tipo:tipo,
      precio:precio
    })
});

module.exports = router;
