import childProcess from 'child_process'

const exec = async (command: string): Promise<void> => new Promise((resolve, reject) => {
  const process = childProcess.spawn(command, { shell: true, stdio: 'inherit' })

  process.once('error', reject)
  process.once('exit', code => {
    if (code === 0) {
      resolve()
    } else {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      reject(new Error(`Process exited with code ${code}`))
    }
  })
})

export default exec
