import pushImage from './pushImage'
import createDistDir from '../util/createDistDir'
import generateEnvironmentDefinition from './generateEnvironmentDefinition'

// eslint-disable-next-line @typescript-eslint/no-floating-promises
;(async () => {
  const envName = process.argv[2]
  const version = process.argv[3]

  const imagePrefix = process.env.IMAGE_PREFIX ?? 'mofujudge-'
  const image = `${imagePrefix}${envName}:${version}`

  console.log(`Pushing ${envName}@${version}...`)
  await pushImage(image)

  console.log('Generating an environment definition file...')
  const distDir = await createDistDir()
  await generateEnvironmentDefinition(image, distDir)
})()
