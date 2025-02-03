const path = require('path')
//преобразовываем сегменты в абсолютный путь
module.exports = (...segments) => path.resolve(__dirname,'..','..',...segments)
