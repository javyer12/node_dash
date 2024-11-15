const mainView = (req,res)=>{
  res.render('home')
}

const tableView = (req,res)=>{
  res.render('table')
}

const notificationView = (req,res)=>{
  res.render('notification')
}

const userView = (req,res)=>{
  res.render('user')
}
const Typography = (req,res)=>{
  res.render('typography')
}
const Icons = (req,res)=>{
  res.render('icons')
}
const Maps = (req,res)=>{
  res.render('maps')
}
const RTL = (req,res)=>{
  res.render('rtl')
}
const upgrade = (req,res)=>{
  res.render('upgrade')
}
module.exports = {
  mainView,
  tableView,
  notificationView,
  userView,
  Typography,
  Icons,
  Maps,
  RTL,
  upgrade
}