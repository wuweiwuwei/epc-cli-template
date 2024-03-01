## 1.项目结构

```
├── README.md
├── .husky   //git hook钩子
│   ├── commit-msg //规范 commit message 信息
│   └── verify-commit-msg.mjs  //脚本：commitlint 替代方案
├── dist //打包输出目录
├── scripts //存放一些脚本
│   ├── template         //创建子页面的js模版
│   ├── template-ts      //创建子页面的ts模版
│   ├── index.mjs        //创建子页面的脚本
│   └── multiPages.json  //子页面描述说明集合文件
├── src
│   ├── arrets       //公共静态资源
│   ├── components   //公共组件
│   ├── store        //pinia 共享状态存储库
│   ├── utils        //公共方法
│   └── pages     //多页面文件夹
├── types  //ts 声明文件
├── .env.development   //开发环境-环境变量
├── .env.production    //生产环境-环境变量
├── .eslintrc.cjs      //eslint 配置
├── .gitignore         //git 提交忽略文件
├── .prettierignore    //prettier 忽略文件
├── .prettierrc.js     //prettier 配置
├── .pnpm-lock.yaml    //锁定项目于一份各个依赖稳定的版本信息
├── .stats.html        //chunck size 分析页面
├── tsconfig.json      //ts 配置
├── tsconfig.node.json //vite在node环境中的 ts 规则
├── vite.config.ts     //vite 配置
├── package.json       //依赖

```

## 2.如何使用

> 安装依赖

```
  // 全局安装 pnpm （使用npm可忽略此步骤）
  npm install -g pnpm

  // 北京网络极差，所以建议
  // 方法一：切换淘宝源
  pnpm config set registry https://registry.npmmirror.com/

  // 方法二：使用 nrm 切换 npm 源
  npm install -g nrm
  nrm ls
  nrm use taobao

  // 安装依赖
  pnpm i 或 npm i
```

> 创建子项目

注：创建子项目一定要使用命令，不能手动创建，否则会导致多页面配置文件出错

```js
npm run new:page
//然后会提示：请输入要生成的'页面名称:页面描述'、会生成在 /src/pages 目录下
//注意： 有两个页面模版，如果要用ts，可以执行  npm run new:page --ts
例如输入：mypage:我的页面
//完成后 会在 scripts/multiPages.json 中生成对应的数据 后期删除需要删除对应的数据来保持一致 内容数据如下：
[
  { "chunk": "pageone", "chunkName": "页面1"},
  { "chunk": "pagetwo", "chunkName": "页面2" },
  { "chunk": "pagethree", "chunkName": "页面3" }
]
```

> 运行指定子项目

```js
/* 配置参数，在命令行上放置--foo bar设置foo配置参数为bar。 一个 -- 参数(argument)告诉cli解析器停止读取flags.一个 在命令行结尾的--flag参数(parameter)的值将会是true。
然后在vite.config.ts中可以获取参数来进行打包对应的项目
用 process.env.npm_config_page 获取参数 */
npm run dev --page=页面名称
```

> 打包指定子项目

注：这里打包用的命令是 npm 并非 pnpm， 因为 vite 打包命令是 npm 脚本

开发环境打包： 

```js
npm run build:dev --page=页面名称
```

测试环境打包：

```js
npm run build:test --page=页面名称
```

正式环境打包： 

```js
npm run build:pro --page=页面名称
```

