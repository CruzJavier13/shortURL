const Url = require('../models/url');

const readURL = async(req,res)=>{
    try{
        const urls = await Url.find().lean();
        res.render('home',{urls});
    }catch(err){
        console.log(err)
    }
    
    
}
const addURL = async(req,res)=>{
    const {origin,shortURL} = req.body;
    
    console.log(origin)
    try{
        //const url = new Url({origin:origin,shortURL:nanoid(6)});
        const url = new Url({origin:origin,shortURL:shortURL});
        await url.save();
        console.log(url);
        res.redirect('/');
    }catch(err){
        console.log(err);
        res.send('error')
    }
}
const deleteURL = async (req,res)=>{
    const {id} = req.params;
    console.log(id)
    try{
        await Url.findByIdAndDelete(id);
        res.redirect('/');
    }catch(err){
        console.log(err);
        res.send(err);
    }
}
const urlEdit = async(req,res) =>{
    const {id} = req.params;
    try{
        const url = await Url.findById(id).lean();
        res.render('home',{url});
        console.log(url)
    }catch(err){
        console.log(err)
        res.send('Data invalid');
    }
}
const urlEditForm = async(req,res) =>{
    const {id} = req.params; 
    const {origin,shortURL} = req.body;
    try{
         await Url.findByIdAndUpdate(id,{origin,shortURL});
         res.redirect('/');

    }catch(err){
        console.log(err)
        res.send('Data fail');
    }
}
const redirectURl = async (req,res)=>{
    const {shortURL} = req.params;
    console.log(shortURL)
    try{
        const urlDB = await Url.findOne({shortURL}).lean();
        console.log(urlDB.origin);
        res.redirect(urlDB.origin);
    }catch(err){
        console.log(err)
    }
}
module.exports={
    readURL,
    addURL,
    deleteURL,
    urlEdit,
    urlEditForm,
    redirectURl,
};