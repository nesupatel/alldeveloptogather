/* Main File: App.js */



var express = require('express');
var exphbs = require('express-handlebars'); // change from var to const
var methodOverride = require('method-override')

var port =process.env.PORT || 5000;
var bodyParser = require('body-parser');
var app = express();
var path = require('path'); 



var mongoose = require('mongoose');








// Map global promise - get rid of warning
mongoose.Promise = global.Promise;
// DB config
var db = require('./config/database');

// connect to mongoose
mongoose.connect(db.mongoURI,{
 // useMongoClient:true 
})
.then(()=> console.log('MongoDB Connected...')) //Promises to make
.catch(err => console.log(err)); // If can not connect to database, it will fire error.

// Load  Model
var log = require('./models/Idea.js'); // Do not need to put Idea.js just Idea(Name of the file)
const Idea = mongoose.model('ideas');



// Handlebars Middleware

app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// // Body Parser Middleware starts
//  parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// // parse application/json
 app.use(bodyParser.json())
// // Body Parser Middleware ends

// Method override middleware
app.use(methodOverride('_method'));

// ////////////////////////////////////////////////////////////////
// Middleware

app.use(function (req, res, next) {

  // console.log(Date.now());
  req.name = 'Neshma Patel';
  next();

});

// Index Route
app.get('/', (req, res) => {

 
  const title = 'Welcome';
  res.render('index', {
    title: title
  });


}); 



// About Route

app.get('/about', (req, res) => {
  //res.send('About');

  res.render('about');
});

//  Index Page
app.get('/ideas', (req, res) => {
  Idea.find({})
    .sort({date:'desc'})
    .then(ideas => {
      res.render('ideas/index', {
        ideas:ideas
      });
    });
});


 //Add Contact Form
app.get('/ideas/add',(req,res)=>{
 res.render('ideas/add');
 });

 // Edit Contact Form
app.get('/ideas/edit/:id', (req, res) => {
  Idea.findOne({
    _id: req.params.id
  })
  .then(idea => {
    res.render('ideas/edit', {
      idea:idea
    });
  });
});


// //Process Form
 app.post('/ideas',(req,res)=>{
 
  let errors = [];

  if(!req.body.title)
  {
    errors.push({text: 'Please add your Name'});
  }
  if(!req.body.details)
  {
    errors.push({text: 'Please add your Email id with Review of website. Thank you'});
  }
  if(errors.length > 0){
    res.render('ideas/add', {
      errors: errors,
      title: req.body.title,
      details: req.body.details
    });
  } else {
    const newUser = {
      title: req.body.title,
      details: req.body.details
    }
    new Idea(newUser)
      .save()
      .then(idea => {
        res.redirect('/ideas');
  })
}
 
 });

 app.put('/ideas/:id', (req, res) => {
  Idea.findOne({
    _id: req.params.id
  })
  .then(idea => {
    // new values
    idea.title = req.body.title;
    idea.details = req.body.details;

    idea.save()
      .then(idea => {
        res.redirect('/ideas');
      })
  });
});

// Delete Form
app.delete('/ideas/:id', (req, res) => {
  Idea.remove({_id: req.params.id})
    .then(() => {
      res.redirect('/ideas');
    });
});

// HTML CSS JS CODE STARTS HERE///////////////////////////////////////////////////////////////////////

app.use(express.static('public'));
app.get('/special',function(req,res){
  res.sendFile(path.join(__dirname + '/special.html'));
});




//HTML CSS JS  CODE ENDS HERE///////////////////////////////////////////////////////////////////////////////////




app.listen(port, () => {

  console.log(`Server started on port ${port}`); //ES 6 WAY


});