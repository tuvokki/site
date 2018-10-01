module.exports = {
    configureWebpack: {
        devtool: 'source-map'
    },
    devServer: {
        proxy: {
            '/frontpage': {
                target: 'http://localhost:8000/frontpage',
                changeOrigin: true
            }
        }
    }
}