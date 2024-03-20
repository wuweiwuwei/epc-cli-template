const { exec } = require('child_process')
const pagesArray = require('../src/pages/multiPages.json')

// 如果只有一个页面，直接返回
const single = pagesArray.length === 1
if(single){
  console.info('只有一个页面，无需多页面打包')
  return
}

// 获取命令行参数
const args = process.argv
const commandLineArgs = args.slice(2)

for (let i = 0; i < pagesArray.length; i++) {
  const page = pagesArray[i]
  // 定义要执行的命令
  const commandToExecute = `npm run build:${commandLineArgs[0]} --page=${page.chunk}`
  exec(
    commandToExecute,

    (error, stdout, stderr) => {
      if (error) {
        console.error(`打包出错: ${error.message}`)
        return
      }

      console.log(`打包成功(${commandToExecute}):\n${stdout}`)
    }
  )
}
