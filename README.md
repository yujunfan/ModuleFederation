# ModuleFederation
1、 创建项目
   创建host: npx create-react-app host --template typescript; 在运行 npm run eject 暴露webpack配置
   创建remote: npx create-react-app remote --template typescript;; 在运行 npm run eject 暴露webpack配置
2: 创建bootstrap.tsx , 把。.src/index.tsx 的代码放入biitstrap中，在.src/index.tsx 
   中异步加载bootsrap.tsx;
3 配置插件
 在 config.webpack.config.js
 const { ModuleFederationPlugin } = require('webpack').container;
module.exports = {
  ...
  plugins: [
    new ModuleFederationPlugin({
      name: 'app2',
      filename: 'app2RemoteEntry.js',
      exposes: {
        './Hello': './src/Hello',
      },
      shared: { react: { singleton: true }, 'react-dom': { singleton: true } },
    }),
  ]
}
重要的是 要配置
 output.publicPath 配置项也可设置为 'auto'，它将为你自动决定一个 publicPath。
 或者
 module.exports = {
  entry: {
    remote: './public-path',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'remote', // 该名称必须与入口名称相匹配
      exposes: ['./public-path'],
      // ...
    }),
  ],
};


4 yarn start 启动, 优先启动 remote
教程 https://mp.weixin.qq.com/s/WCQvPbd_w8P-Tn36Sc0SXQ
publicPath配置教程 https://webpack.docschina.org/concepts/module-federation/
