import exec from './exec'

const getLabels = async (image: string): Promise<{ [key: string]: string }> => {
  const { stdout: labelsJson } = await exec(`docker inspect --format "{{ json .Config.Labels }}" "${image}"`)
  return JSON.parse(labelsJson)
}

export default getLabels
