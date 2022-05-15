const express = require('express')
const app = express()
const arr =["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
const m = arr[Math.floor(Math.random() * arr.length)];

//console.log(m)

app.get('/magic/:quesion',(req,res)=>{
    res.send(`${req.params.quesion}    ${m}`)
})
app.listen('3444',(req,res)=>{
    console.log('listening to port 3444')
})