import { promises as fs } from 'fs'
import exec from '../util/exec'
import getLabels from '../util/getLabels'

const buildImage = async (imagePrefix: string, environmentDir: string): Promise<void> => {
  const environmentNameList = await fs.readdir(environmentDir)

  for (const environmentName of environmentNameList) {
    const repo = `${imagePrefix}${environmentName}`

    console.log(`Building ${environmentName}...`)
    await exec(`docker image build --tag="${repo}:latest" "${environmentDir}/${environmentName}"`, true)

    const labels = await getLabels(`${repo}:latest`)

    // Create version tag
    const version = labels['io.github.mofucoder.mofujudge-environment.version']
    await exec(`docker tag "${repo}:latest" "${repo}:${version}"`)
  }
}

export default buildImage
