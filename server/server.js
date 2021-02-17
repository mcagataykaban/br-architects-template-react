const mongoose = require('mongoose')
const express = require('express')
const app = express()
const port = 4000
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))

mongoose.connect('mongodb+srv://cagatayKaban:KENA0AZBHA6PWyca@recipe.svorc.mongodb.net/RecipeHW?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true})

const { Schema } = mongoose;

const contactSchema = new Schema({
    name: String,
    email: String,
    subject: String,
    comment: String,
})
const contact = mongoose.model('Contact', contactSchema)


app.post('/contact', function (req, res) {
  let newContact = new contact({
      name: req.body.name,
      email: req.body.email,
      subject: req.body.subject,
      comment: req.body.comment
  })
  newContact.save((err,doc)=>{
    if (!err) {
        res.json(doc)
    }else{
        res.json(err)
    }
  })
})

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port port!`))