import { Project } from 'ts-morph'
import path from 'path'
const project = new Project({})

project.addSourceFilesAtPaths('src/**/*.ts')
project.addSourceFilesAtPaths('src/**/*.tsx')


const files = project.getSourceFiles()
const isAbsolute = (value: string) => {
  const layers = ['app', 'entities', 'features', 'pages', 'shared', 'widgets']
  if (layers.some(layer => value.startsWith(layer))) {
    
    return true
  }
}

const uiFile = path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui')
const sharedDirectory = project.getDirectory(uiFile)
const componentsDirs = sharedDirectory?.getDirectories()

componentsDirs?.forEach((directory) => {
  const indexFilePath = `${directory.getPath()}/index.ts`
  const indexFile = directory.getSourceFile(indexFilePath)
  if (!indexFile) {
    const sourceCode = `export * from './${directory.getBaseName()}'`
    console.log('sourceCode', sourceCode)
    const file = directory.createSourceFile(indexFilePath, sourceCode, {overwrite: true})
    // console.log(directory.getBaseName())
    file.save()
  }
})

files.forEach(sourceFile => {
  const importDeclarations = sourceFile.getImportDeclarations()
  importDeclarations.forEach((importDeclaration) => {
    const value = importDeclaration.getModuleSpecifierValue()
    // console.log('value', value)
    const valueWithoutAliace = value.replace('@/', '')
 
    const segments = valueWithoutAliace.split('/')
  
    const isSharedLayer = segments?.[0] === 'shared'
    const isUILayer = segments?.[1] === 'ui'
    // console.log(
    //   'valueWithouAliace && isSharedLayer && isUILayer',
    //   Boolean(valueWithoutAliace),
    //   isSharedLayer,
    //   isUILayer
    // )
    if (isAbsolute(valueWithoutAliace) && isSharedLayer && isUILayer) {
      //заменяем value внутри импорта
      const result = valueWithoutAliace.split('/').slice(0, 3).join('/')
      importDeclaration.setModuleSpecifier(`@/${result}`)
    }
   })
  
})

//применяем изменения к файлам
project.save()