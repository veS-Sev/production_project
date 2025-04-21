import type webpack from 'webpack'
import { type BuildOptions } from './types/config'
import { buildCssLoaders } from './loaders/buildCssLoaders'
import { buildBabelLoader } from './loaders/buildBabelLoader'
export function buildLoaders (options: BuildOptions): webpack.RuleSetRule[] {
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack']
  }
  const { isDev } = options
  const codeBabelLoaders = buildBabelLoader({ ...options, isTsx: false })
  const tsxCodeBabelLoaders = buildBabelLoader({ ...options, isTsx: true })
  const cssLoader = buildCssLoaders(isDev)

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  }

  return [
    fileLoader,
    svgLoader,
    codeBabelLoaders,
    tsxCodeBabelLoaders,
    cssLoader
  ]
}
