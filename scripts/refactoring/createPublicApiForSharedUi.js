"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts_morph_1 = require("ts-morph");
var path_1 = require("path");
var project = new ts_morph_1.Project({});
project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');
var files = project.getSourceFiles();
var isAbsolute = function (value) {
    var layers = ['app', 'entities', 'features', 'pages', 'shared', 'widgets'];
    if (layers.some(function (layer) { return value.startsWith(layer); })) {
        return true;
    }
};
var uiFile = path_1.default.resolve(__dirname, '..', '..', 'src', 'shared', 'ui');
var sharedDirectory = project.getDirectory(uiFile);
var componentsDirs = sharedDirectory === null || sharedDirectory === void 0 ? void 0 : sharedDirectory.getDirectories();
componentsDirs === null || componentsDirs === void 0 ? void 0 : componentsDirs.forEach(function (directory) {
    var indexFilePath = "".concat(directory.getPath(), "/index.ts");
    var indexFile = directory.getSourceFile(indexFilePath);
    if (!indexFile) {
        var sourceCode = "export * from './".concat(directory.getBaseName(), "'");
        var file = directory.createSourceFile(indexFilePath, sourceCode, { overwrite: true });
        console.log(directory.getBaseName());
        file.save();
    }
});
files.forEach(function (sourceFile) {
    var importDeclarations = sourceFile.getImportDeclarations();
    importDeclarations.forEach(function (importDeclaration) {
        var value = importDeclaration.getModuleSpecifierValue();
        console.log('value', value);
        var valueWithoutAliace = value.replace('@', '');
        var segments = valueWithoutAliace.split('/');
        var isSharedLayer = (segments === null || segments === void 0 ? void 0 : segments[0]) === 'shared';
        var isUILayer = (segments === null || segments === void 0 ? void 0 : segments[1]) === 'ui';
        console.log('valueWithouAliace && isSharedLayer && isUILayer', Boolean(valueWithoutAliace), isSharedLayer, isUILayer);
        if (isAbsolute(valueWithoutAliace) && isSharedLayer && isUILayer) {
            //заменяем value внутри импорта
            var result = valueWithoutAliace.split('/').slice(0, 3).join('/');
            importDeclaration.setModuleSpecifier("@/".concat(result));
        }
    });
});
//применяем изменения к файлам
project.save();
