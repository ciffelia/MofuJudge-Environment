import path from 'path'
import { promises as fs } from 'fs'
import buildImage from './buildImage'

const buildAllImages = async (imagePrefix: string): Promise<void> => {
  const environmentDir = path.join(__dirname, '../../../environment')
  const environmentNameList = await fs.readdir(environmentDir)

  for (const environmentName of environmentNameList) {
    await buildImage(imagePrefix, environmentName)
  }
}

export default buildAllImages
