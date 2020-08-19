const router = require('express').Router();

router.get('/',(req,res,next)=>{
    res.send("API esta funcionando correctamente")
});

module.exports = router;