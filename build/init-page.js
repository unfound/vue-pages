const fse = require('fs-extra')
const glob = require('glob')
const path = require('path')
const prompts = require('prompts')

const pageNames = process.argv.splice(2)
const templatePath = path.join(__dirname, '..', 'template')
const modulePaths =glob.sync('src/pages/*').map(item => ({
  title: item,
  value: item
}))
modulePaths.push({
  title: '其他路径',
  value: '-1'
})

async function prompt () {
  let questions = [
    {
      type: 'select',
      name: 'path',
      message: '页面将创建在以下哪个目录下？',
      choices: modulePaths,
      initial: 0
    }, {
      type: pre => pre === '-1' ? 'text' : null,
      name: 'module',
      message: '请输入模块名，将会在src/pages目录下创建: '
    }
  ]
  const res = await prompts(questions)
  if (res.path === '-1') {
    const modulePath = path.join(__dirname, '..', 'src', 'pages', res.module)
    if (fse.pathExistsSync(modulePath)) {
      console.error('该模块已经存在请重新创建！')
      return
    } else {
      pageNames.forEach(pageName => {
        fse.copy(templatePath, path.join(modulePath, pageName), err => {
          if (err) return console.error(err)
          console.log(pageName + '创建成功！')
        })
      })
    }
  } else {
    const pagePath = path.join(__dirname, '..', ...res.path.split('/'))
    pageNames.forEach(pageName => {
      const src = path.join(pagePath, pageName)
      if (fse.pathExistsSync(src)) {
        console.error(src + '已经存在请重新创建！')
        return
      } else {
        fse.copy(templatePath, src, err => {
          if (err) return console.error(err)
          console.log(pageName + '创建成功！')
        })
      }
    })
  }
}
prompt()
