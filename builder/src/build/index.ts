import path from 'path'
import buildImage from './buildImage'

// eslint-disable-next-line @typescript-eslint/no-floating-promises
;(async () => {
  const environmentDir = path.join(__dirname, '../../../environment')

  const imagePrefix = process.env.IMAGE_PREFIX ?? 'mofujudge-'

  console.log('Building docker images...')
  await buildImage(imagePrefix, environmentDir)
})()
