import path from 'path'
import { promises as fs } from 'fs'
import buildImage from './buildImage'
import generateEnvironmentCatalog from './generateEnvironmentCatalog'

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

  const imagePrefix = process.env.IMAGE_PREFIX ?? 'mofujudge-'

  console.log('Building docker images...')
  const builtImageList = await buildImage(imagePrefix, environmentDir)

  console.log('Generating a environment catalog...')
  await generateEnvironmentCatalog(builtImageList, distDir)
})()
