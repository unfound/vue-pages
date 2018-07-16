const fs = require('fs')
const fse = require('fs-extra')
const glob = require('glob')
const path = require('path')

const pageName = process.argv.splice(2)

glob.sync('./template/**').forEach(templateFile => {
  if (path.extname(templateFile) === '') return -1
})

console.log(pageName)