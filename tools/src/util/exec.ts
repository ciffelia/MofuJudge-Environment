import childProcess from 'child_process'

const exec = async (command: string, pipeStdout: boolean = false): Promise<{ stdout: string, stderr: string }> => new Promise((resolve, reject) => {
  const subProcess = childProcess.spawn(command, { shell: true })

  const stdoutBufferList: Buffer[] = []
  const stderrBufferList: Buffer[] = []

  if (pipeStdout) {
    subProcess.stdout.pipe(process.stdout)
    subProcess.stderr.pipe(process.stderr)
  }

  subProcess.stdout.on('data', data => {
    stdoutBufferList.push(data)
  })
  subProcess.stderr.on('data', data => {
    stderrBufferList.push(data)
  })

  subProcess.once('error', reject)
  subProcess.once('exit', code => {
    if (code === 0) {
      resolve({
        stdout: Buffer.concat(stdoutBufferList).toString(),
        stderr: Buffer.concat(stderrBufferList).toString()
      })
    } else {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      reject(new Error(`Process exited with code ${code}`))
    }
  })
})

export default exec
