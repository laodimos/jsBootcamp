const express=require('express');
const jwt = require('jsonwebtoken');

const app = express();
app.get('/api',(req,res)=>{
res.json({
    message : 'Welcome to the API'
});
});

app.post('/api/posts',verifyToken,(req,res)=>{
    jwt.verify(req.token,'secretkey',(err,authData)=>{
        if (err){
            res.sendStatus(403);
        } else{
        res.json({
            message : 'Post created...',
            authData 
        });
    }
    });
   
});

app.post('/api/login',(req,res)=>{
    //Mock user
    const user={
        id:1,
        username:'brad',
        email: 'test@test.com'
    }
    jwt.sign({user},'secretkey',{expiresIn : '30s'},(err,token)=>{
        res.json({
            token
        }); 
    });
});

function verifyToken(req,res,next){
    //Get auth header value
    const bearHeader=req.headers['authorization'];
    //Check if bearer undefined
    if(typeof bearHeader !== 'undefined'){
        //Split at line space
        const bearer=bearHeader.split(' ');
        //Get listen from array
        const bearerToken=bearer[1];
        //Set the token
        req.token=bearerToken;
        //Next middleware
        next();
    }
    else{
        //Forbiden
        res.sendStatus(403);
    }
}

app.listen(5000,()=>console.log('Server started on port 5000'));