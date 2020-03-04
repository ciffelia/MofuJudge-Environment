import { promises as fs } from 'fs'
import exec from './exec'

const buildImage = async (environmentDir: string, distDir: string): Promise<void> => {
  const environmentNameList = await fs.readdir(environmentDir)

  // Build images
  for (const environmentName of environmentNameList) {
    const tag = `mofujudge-${environmentName}`

    console.log(`Building ${environmentName}...`)
    await exec(`docker image build --build-arg="BUILDKIT_INLINE_CACHE=1" --tag="${tag}" "${environmentDir}/${environmentName}"`)

    console.log(`Saving ${environmentName}...`)
    await exec(`docker image save --output="${distDir}/${environmentName}.tar" "${tag}"`)
  }
}

export default buildImage
