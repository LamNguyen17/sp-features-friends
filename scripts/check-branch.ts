const { execSync } = require('child_process')

const branch = execSync('git rev-parse --abbrev-ref HEAD')
    .toString()
    .trim()

const isCI = process.env.CI === 'true'

const MAIN_BRANCHES = ['main', 'master']
const DEV_BRANCHES = ['development', 'develop']

if (MAIN_BRANCHES.includes(branch)) {
    console.log(`✅ Production publish from: ${branch}`)
} else if (DEV_BRANCHES.includes(branch)) {
    console.log(`⚠️ Beta publish from: ${branch}`)
} else if (branch.startsWith('feature/')) {
    console.log(`🧪 Alpha publish from: ${branch}`)
} else {
    console.warn(`⚠️ Unknown branch: ${branch}`)
}

if (!isCI) {
    if (!MAIN_BRANCHES.includes(branch)) {
        console.error(`❌ Local publish blocked from branch: ${branch}`)
        console.error('👉 Only main/master allowed when publishing locally')
        process.exit(1)
    }
}

console.log(`🚀 Ready to publish from: ${branch}`)
