interface BuiltImage {
  environmentName: string

  repo: string
  version: string

  labels: { [key: string]: string }
}

export default BuiltImage
