const supabaseClient = require('@supabase/supabase-js')
const express = require('express')

const app = express()
const port = 3000
app.use(bodyparser.json())
app.use(express.static(__dirname + '/public'))

const supabaseUrl = 'https://psqapgmrgvpnvhpypzhj.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBzcWFwZ21yZ3ZwbnZocHlwemhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYwOTIwNTMsImV4cCI6MjAzMTY2ODA1M30.0SJixKhy-dbLdnmHJf5oevrTzGjkuhma2a_is0jWDmE'
const supabase = supabaseClient.createClient(supabaseUrl, supabaseKey)

app.get('/contacts', async (req, res) => {
    //res.sendFile('public/377-final-homePage.html', {root: __dirname})
    //console.log('Attempting to GET all contacts')

    const {data, error} = await supabase
        .from('contacts')
        .select()

    if(error){
        console.log('error')
        res.send(error)
    } else {
        res.send(data)
    }
    //console.log('Data:'. data)
    //console.log('Error:'. error)
})

app.post('/customers', async(req, res) => {
    console.log('Adding Customers')
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var description = req.body.description

    const {data, error} = await supabase
        .from('customers')
        .insert({'first_name': firstname, 'last_name': lastname, 'description': description})
        .select()
    
    if(error){
         console.log('error')
        res.send(error)
    } else {
        res.send(data)
    }

})

app.listen(port, () => {
    console.log('APP IS ALIVEEE')
})
