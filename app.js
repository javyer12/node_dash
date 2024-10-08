const express = require('express')
const path = require('path');
const expressLayouts = require('express-ejs-layouts')

const app = express();

app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(express.static(path.join(__dirname, 'public')))
//routing
const router = require('./routes/router');
app.use(router.routes);

// app.get('/',()=>{
//   res.send('dashboard con node')
// })

app.listen(3000, ()=>{
  console.log('app started on port 3000')
})