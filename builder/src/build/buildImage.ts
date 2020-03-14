import { promises as fs } from 'fs'
import exec from '../util/exec'
import getLabels from '../util/getLabels'
import BuiltImage from '../interface/BuiltImage'

const buildImage = async (tagPrefix: string, environmentDir: string): Promise<BuiltImage[]> => {
  const environmentNameList = await fs.readdir(environmentDir)

  const builtImageList: BuiltImage[] = []

  for (const environmentName of environmentNameList) {
    const repo = `${tagPrefix}${environmentName}`

    console.log(`Building ${environmentName}...`)
    await exec(`docker image build --tag="${repo}:latest" "${environmentDir}/${environmentName}"`, true)

    const labels = await getLabels(`${repo}:latest`)

    // Create version tag
    const version = labels['io.github.mofucoder.mofujudge-environment.version']
    await exec(`docker tag "${repo}:latest" "${repo}:${version}"`)

    builtImageList.push({ environmentName, repo, version, labels })
  }

  return builtImageList
}

export default buildImage
