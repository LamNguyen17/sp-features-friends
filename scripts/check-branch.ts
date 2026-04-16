const { execSync } = require('child_process')

const branch = execSync('git rev-parse --abbrev-ref HEAD')
    .toString()
    .trim()

if (branch !== 'main' && branch !== 'master') {
    console.error(`❌ Cannot publish from branch: ${branch}`)
    console.error('👉 Only main/master is allowed')
    process.exit(1)
}

console.log(`✅ Publishing from branch: ${branch}`)
