import exec from '../util/exec'

const pushImage = async (image: string): Promise<void> => {
  await exec(`docker image push "${image}"`, true)
}

export default pushImage
