// Servidor
const express = require('express')
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

// conigurar o nunjucks (templeites engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
    express: server,
    noCache: true,
})

// Início e configuração do servidor
server
// receber os dados do req.body
.use (express.urlencoded({extended: true}))
// coniguarar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
// rotas da aplicação
.get("/",pageLanding)
.get("/study",pageStudy)
.get("/give-classes",pageGiveClasses)
.post("/save-classes", saveClasses)
// start do servidor
.listen(5500, () => console.log('rodando'))



 
