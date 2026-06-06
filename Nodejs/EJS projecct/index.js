
import express from 'express'

const app= express()
app.set('view engine','ejs')

app.listen(3000,()=> {
    console.log("server started ")
})

app.get('/', (req, res)=>{
    res.send("home page")
})

app.get('/about', (req, res)=>{
    res.render("about", {title:'about page', message: 'welcome'})
})