import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import { terser } from 'rollup-plugin-terser'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require('./package.json')
const isProduction = process.env.NODE_ENV === 'production'

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: !isProduction
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: !isProduction
      }
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      terser(),
      postcss({
        extract: true, // Extract CSS to a separate file (optional)
        minimize: true // Minimize CSS (optional)
      }),
      typescript({ sourceMap: !isProduction, inlineSources: true })
    ],
    external: ['react', 'react-dom', 'styled-components']
  },
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/types.d.ts', format: 'es' }],
    plugins: [dts.default()]
  }
]
