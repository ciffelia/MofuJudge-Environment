import path from 'path'
import { promises as fs } from 'fs'
import buildImage from './buildImage'
import compileEnvironmentToml from './compileEnvironmentToml'

// eslint-disable-next-line @typescript-eslint/no-floating-promises
;(async () => {
  const environmentDir = path.join(__dirname, '../../environment')
  const distDir = path.join(__dirname, '../../dist')

  // Remove dist directory, if exists
  try {
    await fs.rmdir(distDir, { recursive: true })
  } catch (err) {
    if (err.code !== 'ENOENT') throw err
  }

  await fs.mkdir(distDir)

  console.log('Building docker images...')
  await buildImage('mofujudge-', environmentDir)

  console.log('Compiling environment definition files...')
  await compileEnvironmentToml(environmentDir, distDir)
})()
