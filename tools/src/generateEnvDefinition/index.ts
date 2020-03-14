import createDistDir from '../util/createDistDir'
import generateEnvDefinition from './generateEnvDefinition'

// eslint-disable-next-line @typescript-eslint/no-floating-promises
;(async () => {
  const envName = process.argv[2]
  const version = process.argv[3]

  const imagePrefix = process.env.IMAGE_PREFIX ?? 'mofujudge-'
  const image = `${imagePrefix}${envName}:${version}`

  console.log('Generating an environment definition file...')
  const distDir = await createDistDir()
  await generateEnvDefinition(image, distDir)
})()
