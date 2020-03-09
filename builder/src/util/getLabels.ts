import exec from './exec'

const getLabels = async (name: string): Promise<{ [key: string]: string }> => {
  const { stdout: labelsJson } = await exec(`docker inspect --format "{{ json .Config.Labels }}" "${name}"`)
  return JSON.parse(labelsJson)
}

export default getLabels
