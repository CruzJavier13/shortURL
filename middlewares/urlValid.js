const {URL} =  require('url');

const urlValid = (req,res,next)=>{
    try{
        const {origin} = req.body;
        const urlFrontend = new URL(origin);
        if(urlFrontend.origin !== "null"){
            return next();
        }else{
            throw new Error('Data invalid 💩');
        }
    }catch(err){
        console.log(err);
        return res.send('Url not valid');
    }
}

module.exports = urlValid;