import path from 'path'
import { promises as fs } from 'fs'

const createDistDir = async (): Promise<string> => {
  const distDir = path.join(__dirname, '../../dist')

  // Remove dist directory, if exists
  try {
    await fs.rmdir(distDir, { recursive: true })
  } catch (err) {
    if (err.code !== 'ENOENT') throw err
  }

  await fs.mkdir(distDir)

  return distDir
}

export default createDistDir
