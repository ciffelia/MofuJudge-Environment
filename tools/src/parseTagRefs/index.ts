(() => {
  const ref = process.env.GITHUB_REF
  if (ref == null) {
    throw new Error('GITHUB_REF is not defined.')
  }

  const match = ref.match(/^refs\/tags\/(.+)@(.+)$/)
  if (match == null) {
    throw new Error('No tag matched.')
  }

  const [, name, version] = match

  console.log(`::set-output name=tag::${name}@${version}`)
  console.log(`::set-output name=name::${name}`)
  console.log(`::set-output name=version::${version}`)
})()
