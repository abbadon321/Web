import express from "express"
import hbs from "hbs"
import path from "path"

let __dirname = path.resolve()
let app = express()

app.use(express.urlencoded())
app.set('view engine', 'hbs')
hbs.registerPartials(path.join(__dirname, 'views/partials'))

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.render('index', {mainTitle: 'Main Page'})
})

app.get('/bio', (req, res) => {
    res.render('bio', {mainTitle: 'Biography', body: 'bio'})
})

app.get('/legacy', (req, res) => {
    res.render('legacy', {mainTitle: 'Legacy',  body: 'legacy'})
})

app.get('/links', (req, res) => {
    res.render('links', {mainTitle: 'Links', body: 'links'})
})

app.listen(3000, () => {
    console.log('express app')
})