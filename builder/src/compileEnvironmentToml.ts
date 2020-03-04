import { promises as fs } from 'fs'
import TOML from '@iarna/toml'

const compileEnvironmentToml = async (environmentDir: string, distDir: string): Promise<void> => {
  const environmentNameList = await fs.readdir(environmentDir)

  const compiledEnvironment = []

  for (const environmentName of environmentNameList) {
    const tomlPath = `${environmentDir}/${environmentName}/environment.toml`
    const toml = await fs.readFile(tomlPath, 'utf8')

    compiledEnvironment.push({
      name: environmentName,
      ...await TOML.parse.async(toml)
    })
  }

  const compiledJsonPath = `${distDir}/environment.json`
  await fs.writeFile(compiledJsonPath, JSON.stringify(compiledEnvironment))
}

export default compileEnvironmentToml
