/**
 * @file webpack配置文件
 * @author zhong
 */
const WebpackDeepScopePlugin = require('webpack-deep-scope-plugin').default;

module.exports = {
    plugins: [
        new WebpackDeepScopePlugin()
    ]
};
