import buildImage from './buildImage'
import buildAllImages from './buildAllImages'

// eslint-disable-next-line @typescript-eslint/no-floating-promises
;(async () => {
  const buildEnvName = process.argv[2]

  const imagePrefix = process.env.IMAGE_PREFIX ?? 'mofujudge-'

  if (buildEnvName != null) {
    await buildImage(imagePrefix, buildEnvName)
  } else {
    await buildAllImages(imagePrefix)
  }
})()
