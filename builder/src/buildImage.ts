import { promises as fs } from 'fs'
import exec from './exec'

const buildImage = async (environmentDir: string, distDir: string): Promise<void> => {
  const environmentNameList = await fs.readdir(environmentDir)

  // Build images
  for (const environmentName of environmentNameList) {
    const tag = `mofujudge-${environmentName}:latest`

    console.log(`Building ${environmentName}...`)
    await exec(`docker image build --tag="${tag}" "${environmentDir}/${environmentName}"`)
  }
}

export default buildImage
