/**
 *  • 打印 Vite Proxy 日志 • 
 * vite 配置项，server.proxy.configure 的回调函数
 * @param proxy
 */
export const handleConfigure = (proxy) => {
  proxy.on('error', (err) => {
    console.info('proxy error', err);
  });
  proxy.on('proxyReq', (proxyReq, req) => {
    const date = new Date();
    const timeStr = `${date.getMonth()+1}月${date.getDate()}日 ${date.toLocaleTimeString('en-US', { hour12: false })}`
    console.info(`时间: ${timeStr}`);
    console.info(
      '请求:',
      req.method,
      req.url,
      // proxyReq.method,
      // proxyReq.protocol,
      // proxyReq.path,
      // JSON.stringify(proxyReq.getHeaders()),
    );
    console.info(
      '代到:',
      proxyReq.host,
    )
  });
  proxy.on('proxyRes', (proxyRes) => {
    console.info(
      '响应:',
      proxyRes.statusCode,
      proxyRes.statusMessage,
      // req.url,
      // JSON.stringify(proxyRes.headers),
    );
    console.info(`\n`);
  });
}

/**
 *  • 打印当前环境信息，方便部署时排错 • 
 * @param mode，当前打包环境
 * @param env，当前环境变量对象
 */
export const printCurrentEnvirment = async (mode, env) => {
  const util = require('util');
  const exec = util.promisify(require('child_process').exec);
  // 执行的命令列表
  const commands = ['npm -v', 'node -v', 'pnpm -v',];
  const results = await Promise.all(commands.map(async cmd => {
    // try catch 一下，防止命令执行失败导致程序崩溃
    try {
      return await exec(cmd);
    } catch (error) {
      // { stdout: '' } 是为了跟 exec() 的返回值一致
      // split('\n')[0] 是为了避免同一命令的报错信息打印两行
      return { stdout: error.message.split('\n')[0] };
    }
  }))
  // 执行的结果
  let cammandStdout = ''
  results.forEach((result, i) => {
    cammandStdout += `${commands[i]}: ${result.stdout}`
  });

  // 输出
  console.info(`\n\n`)
  console.info(`↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓打印当前环境信息，方便部署排错↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓`)
  console.info(cammandStdout)
  console.info('当前打包环境:', mode)
  console.info('当前环境变量:', env)
  console.info(`↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑打印当前环境信息，方便部署排错↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑`)
  console.info(`\n`)
}

/**
 *  • 从配置文件或者命令行参数中获取当前入口页面 • 
 * @param project 当前项目配置所有页面标识
 * @returns 当前页面标识
 */
export const getCurrentPage = (project) => {
  // 当前项目只有一个页面时，从配置文件自动获取
  if(project.length === 1)
    return project?.[0]?.chunk

  // 从命令行参数中获取（例如 npm run dev --page=xxx）
  // --page 会被 npm 自动存储为环境变量 npm_config_page
  // 注意：pnpm 和 yarn 并没有这种自动存储为环境变量的功能，所以此功能只能使用 npm
  return process.env.npm_config_page || ''
}

/**
 *  • Vite 入口函数，主要用来在多页项目选择当前使用的页 • 
 * @returns
 */
import chalk from 'chalk'
import path from 'path'
export const getEnterPages = (npm_config_page, project) => {
  // 获取当前运行的脚本名称
  const npm_lifecycle_event: string = process.env.npm_lifecycle_event || ''
  // 命令行报错提示
  const errorLog = (error) => console.log(chalk.red(`${error}`))

  if (!npm_config_page && npm_lifecycle_event !== 'dev') {
    errorLog('请在命令行后以 `--page=页面名称` 格式指定页面名称！')
    process.exit()
  }
  const filterArr = project.filter(
    (item) => item.chunk.toLowerCase() == npm_config_page.toLowerCase()
  )
  if (!filterArr.length && npm_lifecycle_event !== 'dev') {
    errorLog('不存在此页面，请检查页面名称！')
    process.exit()
  }
  return {
    [npm_config_page]: path.resolve(__dirname, `src/pages/${npm_config_page}/index.html`)
  }
}