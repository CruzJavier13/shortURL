const express = require('express');

const router = express.Router();

router.get('/',(req,res)=>{
    const urls = [
        {origin:"www.google.com",shortURL:"google"},
        {origin:"www.facebook.com",shortURL:"facebook"},
        {origin:"www.youtube.com",shortURL:"youtube"},
    ];
    res.render('home',{urls});
});


module.exports = router;