import { promises as fs } from 'fs'
import BuiltImage from '../interface/BuiltImage'

const generateEnvironmentCatalog = async (builtImageList: BuiltImage[], distDir: string): Promise<void> => {
  const environmentList = builtImageList.map(builtImage => ({
    name: builtImage.environmentName,
    version: builtImage.version,

    title: builtImage.labels['io.github.mofucoder.mofujudge-environment.title'],
    description: builtImage.labels['io.github.mofucoder.mofujudge-environment.description'],

    imageName: `${builtImage.repo}:${builtImage.version}`
  }))

  const jsonPath = `${distDir}/environment-catalog.json`
  await fs.writeFile(jsonPath, JSON.stringify(environmentList))
}

export default generateEnvironmentCatalog
