# webpack-learning
webpack4 学习
## 1 安装 webpack
- npm webpack webpack-cli
- package.json 
```
    scrpit: {
        ...
        // 开发
        "dev": "webpack --mode development",
        // 生产
        "prod": "production"
    }
```
## 2  webpack的 js (tree-shaking（摇树优化）)
- ? webpack 的 不够好
    - npm install lodash-es -S 此类的依赖不会被webpack tree shaking（优化） - ·**low**
    - 例如 commit ✗ 
        - 'webpack tree shaking(摇树)' 1.4M 
- npm i webpack-deep-scope-plugin -D // 深层次的摇树
        - 
```
    // npm run prod 看打包后的体积
    // 配置webpack.config.js
    const WebpackDeepScopePlugin = require('webpack-deep-scope-plugin').default;

    module.exports = {
        plugins: [
            new WebpackDeepScopePlugin()
        ]
    };
```
## 3 css tree shaking
- npm install style-loader css-loader -D
