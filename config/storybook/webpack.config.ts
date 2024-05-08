import type webpack from 'webpack'
import { type BuildPaths } from '../build/types/config'
import path from 'path'
import { buildCssLoaders } from '../build/loaders/buildCssLoaders'

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    entry: '',
    build: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src')

  }
  config.resolve.modules.push(paths.src)
  config.resolve.extensions.push('ts', 'tsx')

  config.module.rules = config.module.rules.map((rule: webpack.RuleSetRule) => {
    if ((rule.test as string).includes('svg')) {
      return { ...rule, exclude: /\.svg$/i }
    }
    return rule
  })
  config.module.rules.push(buildCssLoaders(true))
  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack']
  })
  return config
}
