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
- ? 
    - npm install lodash-es -S 此类的依赖不会被webpack tree shaking（优化） - ·**low**
    - 例如 commit 
        - 的 