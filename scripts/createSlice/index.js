const createTemplate = require('./templates/createTemplate')

const layer = process.argv[2]
const sliceName = process.argv[3]

process.argv.forEach((value)=> console.log(value))
console.log(layer)
console.log(sliceName)
console.log(process.argv[0])
console.log(process.argv[1])


const layers = ['features', 'entities', 'pages']

if (!layer || !layers.includes(layer)) {
    throw new Error(`Укажите слой ${layers.join(' или ')}`)
}

if (!sliceName) {
    throw new Error('Укажите название слайса')
}

createTemplate(layer, sliceName)

//если не прописывать в package.json, то в powershell node .\scripts\createSlice\index.js entities testEntities
