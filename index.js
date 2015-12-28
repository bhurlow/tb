'use strict'

var _ = require('underscore')
var Table = require('cli-table')

var table = new Table()

process.stdin.on('data', function(chunk) {
  let parsed = JSON.parse(chunk)
  parsed.forEach(function(item) {
    let sub = _.compact(item)
    table.push(_.values(sub))
  })
})

process.stdin.on('end', function() {
  console.log(table.toString())
})
