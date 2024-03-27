import { defineConfig, loadEnv } from 'vite'
import type { UserConfig, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite' //自动导入 Composition API 开启后会和老吴的样式冲突，暂时请不要开启
// import { visualizer } from 'rollup-plugin-visualizer' //打包size分析工具
import compression from 'vite-plugin-compression' //gzip/br 压缩
import path from 'path'
import { handleConfigure, printCurrentEnvirment, getCurrentPage, getEnterPages } from './vite.config-extra-utils'

// 引入多页面配置文件
const pages = require('./src/pages/multiPages.json')
// 当前使用的页
const npm_config_page: string = getCurrentPage(pages)

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd());
  //  • 打印当前环境信息，方便部署时排错 • 
  printCurrentEnvirment(mode, env)

  return {
    root: path.resolve(__dirname, `./src/pages/${npm_config_page}`),
    base: './',
    envDir: path.resolve(__dirname), //用于加载 .env 文件的目录。可以是一个绝对路径，也可以是相对于项目根的路径。
    server: {
      host: 'localhost', // 指定服务器主机名
      port: 9090, // 指定服务器端口
      hmr: true,
      open: true, // 在服务器启动时自动在浏览器中打开应用程序
      https: false, // 是否开启 https
      proxy: {
        '^/api': {
          target: 'http://xbom-dev.cbim.org.cn/admin-uc', //  代理接口
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '/api'),
          //  • 打印代理日志 • 
          configure: handleConfigure,
        }
      }
    },
    plugins: [
      vue(),
      AutoImport({
        imports: ['vue', 'vue-router', 'pinia'],
        dts: path.resolve(__dirname, './auto-import.d.ts'),
        eslintrc: {
          // 已存在文件设置默认 false，需要更新时再打开，防止每次更新都重新生成
          enabled: false,
          // 生成文件地址和名称
          filepath: path.resolve(__dirname, './.eslintrc-auto-import.json'),
          globalsPropValue: true
        },
      }),
      // visualizer(),
      // gzip格式
      compression({
        threshold: 1024 * 500, // 体积大于 threshold 才会被压缩,单位 b
        ext: '.gz', // 压缩文件格式
        deleteOriginFile: false // 是否删除源文件
      })
      // br格式
      // compression({
      //   threshold: 1024 * 500,    // 体积大于 threshold 才会被压缩,单位 b
      //   ext: '.br',
      //   algorithm: 'brotliCompress',
      //   deleteOriginFile: false
      // })
    ],
    resolve: {
      alias: {
        '@': path.join(__dirname, './src'),
        '@pages': path.join(__dirname, './src/pages')
      }
    },
    build: {
      outDir: path.resolve(__dirname, `dist/${pages?.length === 1 ? '' : npm_config_page}`), // 指定输出路径
      assetsInlineLimit: 4096, //小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求
      emptyOutDir: true, //Vite 会在构建时清空该目录
      rollupOptions: {
        input: getEnterPages(npm_config_page, pages),
        output: {
          assetFileNames: '[ext]/[name]-[hash].[ext]',
          chunkFileNames: 'js/[name]-[hash].js',
          entryFileNames: 'js/[name]-[hash].js',
          compact: true,
          manualChunks: (id: string) => {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString() // 拆分多个vendors
            }
          }
        }
      }
    }
  }
})
