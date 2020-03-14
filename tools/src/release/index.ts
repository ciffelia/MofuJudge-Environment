import pushImage from './pushImage'
import createDistDir from '../util/createDistDir'
import extractEnvInfoFromGitRef from './extractEnvInfoFromGitRef'
import generateEnvironmentDefinition from './generateEnvironmentDefinition'

// eslint-disable-next-line @typescript-eslint/no-floating-promises
;(async () => {
  const ref = process.env.GITHUB_REF
  if (ref == null) {
    throw new Error('GITHUB_REF is not defined.')
  }

  const { name: envName, version } = extractEnvInfoFromGitRef(ref)

  const imagePrefix = process.env.IMAGE_PREFIX ?? 'mofujudge-'
  const image = `${imagePrefix}${envName}:${version}`

  console.log(`Pushing ${envName}@${version}...`)
  await pushImage(image)

  console.log('Generating an environment definition file...')
  const distDir = await createDistDir()
  await generateEnvironmentDefinition(image, distDir)
})()
