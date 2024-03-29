const express = require('express')
//servidor
const app = express()
// server para pegar as variaveis de requisição
const bodyParser = require('body-parser')
//cria rotas 
const router = require('./router')
app.set('view engine', 'ejs')
//Chamada do Db
const cmd = require('./connect')

//Porta para conectar
 port = process.env.PORT || 3000;

//Parte do site
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(__dirname + '/views'));
app.get('/',(req,res) =>{
    res.render('test.ejs')
})

app.post('/show',(req,res)=>{
    console.log(req.body)
    cmd.ExecSqlQueryCliente('select * from Cliente where cpfCliente = \''+req.body.CPF+'\'',res,'show.ejs')
    //res.send('<h1>CPF: '+req.body.CPF+'</h1></p><h1>Senha: '+req.body.Senha+'</h1>')
})

app.get('/show',(req,res)=>{
    res.send('Exibe os clientes;');
})
//
/// acrescetando alguns comentarios
//Api
app.get('/pp',(req,res)=>{
    res.send('Teste 123 bla blabla')
})
app.get('/ss',(req,res)=>{
    res.send('ss bla bla bla asdasdas')
})
app.use('/api', router)

app.listen(port, () => console.log('Executando na porta: '+port)) 