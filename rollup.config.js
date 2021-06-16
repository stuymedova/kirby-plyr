import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import scss from 'rollup-plugin-scss';
import { terser } from 'rollup-plugin-terser';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
import glob from 'fast-glob';
import path from 'path';

const mode =
  process.env.NODE_ENV === 'production' ? 'production' : 'development';
const dev = mode === 'development';

// necessary to make multiple entries in different directory levels work
function generateInputMap(filenames, base) {
  const inputMap = {};
  for (let filename of filenames) {
    const relativeFile = path.relative(base, filename);
    const parsed = path.parse(relativeFile);
    const name = path.join(parsed.dir, parsed.name);
    inputMap[name] = filename;
  }
  return inputMap;
}

export default async() => {
  return {
    input: generateInputMap(await glob('src/js/**/*.js'), 'src/js'),
    output: {
      dir: 'public/assets/js/',
      format: 'es',
      sourcemap: false,
    },
    plugins: [
      replace({
        preventAssignment: true,
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode),
      }),
      resolve({
        browser: true,
      }),
      scss({
        output: 'public/assets/css/main.css',
        outputStyle: 'compressed',
        sass: require('sass'),
        processor: () => postcss([autoprefixer()]),
        watch: 'src/scss/',
      }),
      commonjs(),
      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'bundled',
      }),
      !dev && terser({
        module: true,
      }),
    ],
    treeshake: { moduleSideEffects: true },
    watch: {
      clearScreen: false,
      exclude: ['node_modules/**'],
    },
  };
};
