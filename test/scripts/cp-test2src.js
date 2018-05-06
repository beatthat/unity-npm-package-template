const unpm = require('unity-npm-utils')
const path = require('path')

const unitySrcRoot = path.join(__dirname, '..')

const pkgName = path.basename(path.join(unitySrcRoot, '..'))

unpm.copyFromUnity2Pkg(pkgName, { verbose: true })
    .then(info => {
        console.log(`cp-test2src succeeded for package ${pkgName}`)
    })
    .catch(err => {
        console.log('cp-test2src failed with error: %j', err)
        process.exit(1)
    })
