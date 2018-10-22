/**
 * @file webpack配置文件
 * @author zhong
 */

const WebpackDeepScopePlugin = require('webpack-deep-scope-plugin').default;

module.exports = {
    // module
    module: {
        rules: [
            /**
             * css-loader 配置
                 css-loader?modules
                    = 生成的（局部) import foo from './css';
                    foo.class 类名
                    css-loader?useable
                     ？主入口 css 无效?
                 css-loader?useable
                    ?没用出来
                    foo.use() / 设置
                    foo.unuse() / 卸载
            */
            {test: /\.css$/, use: ['style-loader', 'css-loader']}
        ]
    },
    // 插件
    plugins: [
        new WebpackDeepScopePlugin()
    ]
};
