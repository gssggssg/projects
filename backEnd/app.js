const express = require('express')

const app = express()

const PORT = 3000

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(PORT, () => {
  console.log(`服务器启用成功 运行在 http://127.0.0.1:${PORT}`);
})