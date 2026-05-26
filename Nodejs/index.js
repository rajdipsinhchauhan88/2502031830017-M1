const express = require('express')
const app  = express()

app.listen(3000, ()=> {
    console.log('succsessfully done')
}) 

app.get('/', (req,res)=> {
    res.send("<h1>this is </h1>")
}) 

app.get('/about/:userid/book/:bookid', (req, res)=>{
    res.send(req.params.bookid)
})

app.get('/search', (req, res)=>{
    const name = req.query.name
    const age = req.query.age

    res.send(`Search results for name : ${name}, Age: ${age}1`)
})

