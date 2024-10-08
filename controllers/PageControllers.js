const mainView = (req,res)=>{
  res.render('home')
}

const tableView = (req,res)=>{
  res.render('table')
}

const notificationView = (req,res)=>{
  res.render('notification')
}

module.exports = {
  mainView,
  tableView,
  notificationView
}