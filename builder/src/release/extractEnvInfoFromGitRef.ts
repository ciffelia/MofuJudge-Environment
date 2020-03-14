const extractEnvInfoFromGitRef = (ref: string): { name: string, version: string } => {
  const match = ref.match(/^refs\/tags\/(.+)@(.+)$/)
  if (match == null) {
    throw new Error('No tag matched.')
  }

  const [, name, version] = match

  return { name, version }
}

export default extractEnvInfoFromGitRef
