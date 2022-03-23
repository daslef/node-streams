export default async function countBytes (srcStream) {
  return new Promise((resolve, reject) => {
    let bytes = 0
    srcStream.on('error', reject)
    srcStream.on('end', () => resolve(bytes))
    srcStream.on('data', (chunk) => {
      bytes += chunk.length
    })
  })
}
