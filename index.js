const express=require('express')
const fs=require('fs')
const Port=process.env.PORT||3000;
const app=express();
const Home=fs.readFileSync('./view/code.html')
const about=fs.readFileSync('./view/about.html')
const contact=fs.readFileSync('./view/contact.html')
const skills=fs.readFileSync('./view/skills.html')
app.use('/static',express.static('static'))
//routes
app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.send(Home);
})
app.get('/skills',(req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.send(skills);
})
app.get('/about',(req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.send(about);
})
app.get('/contact',(req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.send(contact);
})

//server
app.listen(Port,()=>{
    console.log(`Server is running on http://localhost:${Port}`);
})