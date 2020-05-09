
exports.init = function(app, args){
  let db = require("./db")
  db.init(app, args)

  let graph = require("./graph")
  graph.init(app, args)
}

exports.users = require('./users')
exports.groups = require('./groups')
exports.attachments = require('./attachments')

exports.graph = require('./graph')
