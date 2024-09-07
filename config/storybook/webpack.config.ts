// import type webpack from 'webpack'
// import { DefinePlugin } from 'webpack'
// import { type BuildPaths } from '../build/types/config'
// import path from 'path'
// import { buildCssLoaders } from '../build/loaders/buildCssLoaders'

// export default ({ config }: { config: webpack.Configuration }) => {
//   const paths: BuildPaths = {
//     entry: '',
//     build: '',
//     html: '',
//     src: path.resolve(__dirname, '..', '..', 'src')

//   }
//   // @ts-ignore
//   config!.resolve!.modules!.push(paths.src)
//   // config!.modules!.push(paths.src)
//   config!.resolve!.extensions!.push('ts', 'tsx')
//   // @ts-ignore
//   config.module.rules = config.module.rules.map((rule: webpack.RuleSetRule) => {
//     // eslint-disable-next-line @typescript-eslint/prefer-includes
//     if (/svg/.test(rule.test as string)) {
//       return { ...rule, exclude: /\.svg$/i }
//     }

//     return rule
//   })
//   config!.module!.rules.push(buildCssLoaders(true))
//   config!.module!.rules.push({
//     test: /\.svg$/,
//     use: ['@svgr/webpack']
//   })

//   config!.plugins!.push(new DefinePlugin(
//     {
//       __IS_DEV__: JSON.stringify(true),
//       __API__: JSON.stringify('')
//     }))

//   return config
// }
import webpack, { DefinePlugin, RuleSetRule } from 'webpack'
import path from 'path'
import { buildCssLoaders } from '../build/loaders/buildCssLoaders'
import { type BuildPaths } from '../build/types/config'

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src')
  }
  config!.resolve!.modules!.push(paths.src)
  config!.resolve!.extensions!.push('.ts', '.tsx')

  // eslint-disable-next-line no-param-reassign
  // @ts-ignore
  config!.module!.rules = config.module!.rules!.map((rule: RuleSetRule) => {
  // eslint-disable-next-line @typescript-eslint/prefer-includes
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i }
    }

    return rule
  })

  config!.module!.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack']
  })
  config!.module!.rules.push(buildCssLoaders(true))

  config!.plugins!.push(
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(true),
      __API__: JSON.stringify('')
    })
  )

  return config
}
