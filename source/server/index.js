const express  = require('express')
const morgan = require('morgan')
const path = require('path')
const mongoose = require('mongoose')
const router = require('./router/router')
const app = express()


//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'))

//archivos staticos
app.use(express.static(path.join(__dirname, 'public')))

//rutas
app.use('/email', router)

//iniciando
app.listen(app.get('port'), async()=>{
    try{
        console.log(`Servidor en el puerto ${app.get('port')}`)
        await mongoose.connect('mongodb://127.0.0.1/vue-university',{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log('DB Conectada')
    }catch{
        throw new Error('no se puede conectad a la bd')
    }
})

