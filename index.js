const supabaseClient = require('@supabase/supabase-js')
const bodyParser = require('body-parser')
const express = require('express')

const app = express()
const port = 3000
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'))

const supabaseUrl = 'https://psqapgmrgvpnvhpypzhj.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBzcWFwZ21yZ3ZwbnZocHlwemhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYwOTIwNTMsImV4cCI6MjAzMTY2ODA1M30.0SJixKhy-dbLdnmHJf5oevrTzGjkuhma2a_is0jWDmE'
const supabase = supabaseClient.createClient(supabaseUrl, supabaseKey)


app.get('/', (req, res) =>{
    res.sendFile('public/377-final-homePage.html', {root: __dirname})
})


app.get('/contacts', async (req, res) => {
    //res.sendFile('public/377-final-homePage.html', {root: __dirname})
    console.log('Attempting to GET all contacts')

    const {data, error} = await supabase
        .from('contacts')
        .select()

    if(error){
        console.log('error')
        res.send(error)
    } else {
        res.send(data)
    }
    console.log('Data:'. data)
    console.log('Error:'. error)
})


app.post('/customers', async(req, res) => {
    console.log('Adding Customer')
    var first_name = req.body.first_name;
    var last_name = req.body.last_name;
    var description = req.body.description;

    const {data, error} = await supabase
        .from('customers')
        .insert({'first_name': first_name, 'last_name': last_name, 'description': description})
        .select()
    
    if(error){
        console.log('error')
        res.send(error)
    } else {
        res.send(data)
    }

})

app.get('/mission', (req, res) => {
    res.header('Content-Type', 'application/json')
    var word = {
        'mission':'Our mission is to have weather information be ready and easily accessible for University of Maryland, College Park students.'
    }
    res.send(JSON.stringify(word))
})

app.get('/values', (req, res) => {
    res.header('Content-Type', 'application/json')
    var word = {
        'Accessibility':"Accessibility: We made sure this product is inclusive by design, with built-in accessibility features to make it easy for our users to use"
    }
    res.send(JSON.stringify(word))
})


app.listen(port, () => {
    console.log('APP IS ALIVEEE')
})
