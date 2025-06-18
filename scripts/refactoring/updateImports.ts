import { Project } from 'ts-morph'

const project = new Project({})
 console.log ('@@@progect', project)
project.addSourceFilesAtPaths('src/**/*.ts')
project.addSourceFilesAtPaths('src/**/*.tsx')



const layers = ['app', 'entities', 'features', 'pages', 'shared', 'widgets']

const isAbsolute = (value: string) => {
  if (layers.some(layer => value.startsWith(layer))) {
    return true
  }
}
const files = project.getSourceFiles()


files.forEach(sourceFile => {
  const importDeclarations = sourceFile.getImportDeclarations()
  importDeclarations.forEach((importDeclaration) => {
    const value = importDeclaration.getModuleSpecifierValue()

    if (isAbsolute(value)) {
     importDeclaration.setModuleSpecifier(`@/${value}`)
   }
   })
  
})

//применяем изменения к файлам
project.save()