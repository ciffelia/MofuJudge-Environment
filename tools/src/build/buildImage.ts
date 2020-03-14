import path from 'path'
import exec from '../util/exec'
import getLabels from '../util/getLabels'

const buildImage = async (imagePrefix: string, environmentName: string): Promise<void> => {
  const environmentDir = path.join(__dirname, '../../../environment')

  const repo = `${imagePrefix}${environmentName}`

  console.log(`Building ${environmentName}...`)
  await exec(`docker image build --tag="${repo}:latest" "${environmentDir}/${environmentName}"`, true)

  const labels = await getLabels(`${repo}:latest`)

  // Create version tag
  const version = labels['io.github.mofucoder.mofujudge-environment.version']
  await exec(`docker image tag "${repo}:latest" "${repo}:${version}"`)
}

export default buildImage
