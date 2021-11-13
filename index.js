const express = require('express')

const app = express ()
//settings
app.set ( 'part' , 5000)

//routes
app.get('/', (req,res)=>{
    res.send('Bienvenidos')
})


app.listen(app.get('part'), () =>{
    console.log(`bienvenido a mi aplicacion de node puerto ${app.get('part')}`)
})
