const unpm = require('unity-npm-utils')
const path = require('path')

const unitySrcRoot = path.join(__dirname, '..')

const pkgName = path.basename(path.join(unitySrcRoot, '..'))
const unityInstallPath = path.join(__dirname, '..', 'Assets', 'Plugins', 'packages', pkgName)
const packageTargetPath = path.join(unitySrcRoot, '..', 'Runtime')

unpm.copyFromUnity2Pkg(pkgName, {
	verbose: true,
	unity_install_path: unityInstallPath,
	package_target_path: packageTargetPath
})
    .then(info => {
        console.log(`cp-test2src succeeded for package ${pkgName}`)
    })
    .catch(err => {
        console.log('cp-test2src failed with error: %j\n%j', err, err.stack)
        process.exit(1)
    })
