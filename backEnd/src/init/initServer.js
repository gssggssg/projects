const initServer = async (app) => {
    return new Promise((resolve, reject) => {
        const PORT = process.env.PORT || 8080
        app
            .listen(PORT, () => {
                console.log(`服务器启用成功 运行在 http://127.0.0.1:${PORT}`);
                resolve()
            })
            .on('error', (error) => {
                console.log('服务启动失败:', error)
                reject()
            })
    })
}

module.exports = initServer