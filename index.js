const express = require('express')
    // Thư viện vừa cài npm install express
const morgan = require('morgan')
const app = express()
    // Là 1 function
    // Trả về 1 đối tượng, đại diện cho ứng dụng nodejs
const port = 3000
    // Cổng
app.use(morgan('combined'))
app.get('/', (req, res) => {
    // '/' định nghĩa tuyến đường mặc định (trang chủ)
  res.send('Hello World!')
})

// Địa chỉ ip 127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`Example app listening on locallhost:${port}`)
})