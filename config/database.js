if(process.env.NODE_ENV === 'production'){
  module.exports = {mongoURI: 'mongodb://patel:patel@ds117878.mlab.com:17878/treeview'}
} else {
  module.exports = {mongoURI: 'mongodb://localhost/treeview-dev'}
}