import { promises as fs } from 'fs'
import getLabels from '../util/getLabels'

const generateEnvDefinition = async (image: string, distDir: string): Promise<void> => {
  const labels = await getLabels(image)

  const environmentDefinition = {
    name: labels['io.github.mofucoder.mofujudge-environment.name'],
    version: labels['io.github.mofucoder.mofujudge-environment.version'],

    title: labels['io.github.mofucoder.mofujudge-environment.title'],
    description: labels['io.github.mofucoder.mofujudge-environment.description'],

    image
  }

  const jsonPath = `${distDir}/environment.json`
  await fs.writeFile(jsonPath, JSON.stringify(environmentDefinition))
}

export default generateEnvDefinition
